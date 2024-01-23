export function FormCard({ action, children }) {
    return (

        <>
            <form action={action} className="mb-0 mt-6 space-y-4 rounded-lg p-8 shadow-lg sm:p-6 lg:p-8">
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