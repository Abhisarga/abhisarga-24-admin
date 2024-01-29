'use client';
import { useMutation } from '@apollo/client';

/*
a generic form submit handler
the form fields should have a name attribute same as the variable needed in graphql mutation
for variables of type list, the name should be like item.1, item.2 and so on
*/
const isNumeric = value =>
    value.length !== 0 && [...value].every(c => c >= '0' && c <= '9');

function aahniks_recursiveSyntaxProcessor(key, value, variables) {
    if (key.includes('@exclude.')) return variables;
    if (key.includes('-')) {
        console.log("key includes -, processing as array:");
        // for array items
        let [p, ...c] = key.split('-');
        console.log("- split done");
        console.log(`c= ${c} p=${p}`);
        c = c.join('-');
        if (!variables[p]) {
            variables[p] = [];
        }

        console.log(`index=${c}`);
        if (!isNumeric(c)) {
            console.log("each list item has nested fields");
            let [index, ...cc] = c.split(".");
            cc = cc.join(".");

            console.log(`index= ${index} and cc = ${cc}`);
            index = Number(index);
            if (!variables[p][index - 1])
                variables[p][index - 1] = {};
            variables[p][index - 1] = aahniks_recursiveSyntaxProcessor(cc, value, variables[p][index - 1]);
        }
        else {
            let index = Number(c);

            variables[p][index - 1] = value;
        }
        return variables;

        // the list could contain nested objects
    }
    if (key.startsWith("fileUpload@")) {
        let [, c] = key.split("fileUpload@");
        console.log(`to upload file ${key} ${value}`);
        // upload file to files endpoint
        variables[c] = "fileUploadURL";
        return variables;
    }
    if (key.includes(".")) {
        // for nested types
        console.log("key includes .");
        let [p, ...c] = key.split(".");
        c = c.join(".");
        console.log(`parent: ${p}`);
        console.log(`child: ${c}`);
        if (!variables[p]) variables[p] = {};
        variables[p] = aahniks_recursiveSyntaxProcessor(c, value, variables[p]);
        return variables;
    }
    variables[key] = value;
    return variables;
}

export function FormCard({ mutation, children }) {
    const [submitData, { loading, error }] = useMutation(mutation);
    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        let variables = {};

        formData.forEach((value, key) => {
            // Handle array items
            console.log(`value: ${value}`);
            console.log(`key: ${key}`);
            variables = aahniks_recursiveSyntaxProcessor(key, value, variables);
        });

        try {
            console.log(variables);

            // TODO: TEST
            const response = await submitData({
                variables: { input: variables }, // Adjust the input structure as needed
            });

            // // Access the data from the response
            // const responseData = response.data.YOUR_MUTATION_NAME;

            console.log(response);
            // return success screen
        } catch (error) {
            // Handle errors
            console.error(error);
            //  return error screen
        }
    };
    console.log(mutation);

    return (

        <>
            <form className="mb-0 mt-6 space-y-4 rounded-lg p-8 shadow-lg sm:p-6 lg:p-8 " onSubmit={handleSubmit}>
                {children}
            </form>
        </>
    );
}
export function FormHeader({ children }) {
    return (
        <div className='mb-8'>
            {children}
        </div>
    );
}

export function FormFooter({ children }) {
    return (
        <div className='py-4'>
            {children}
        </div>
    );
}

export function FormTitle({ title }) {
    return (<p className="text-center text-lg font-medium">{title}</p>);
}

export function FormDescription({ description }) {
    return (<p className="text-center text-md font-light"> {description}</p>);
}

export function ExtraLink({ link, label }) {
    return (<>
        <p className="text-center text-sm text-gray-500 mt-4">
            <a className="underline" href={link}>{label}</a>
        </p>
    </>);
}