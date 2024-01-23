export default function TextArea({ id, htmlFor, label, placeholder }) {
    return (<>

        <div>
            <label htmlFor={htmlFor} className="block text-sm font-medium text-gray-700"> {label} </label>

            <textarea
                id={id}
                className="mt-2 w-full rounded-lg border-gray-200 align-top shadow-sm sm:text-sm"
                rows="4"
                placeholder={placeholder}
            ></textarea>
        </div>
    </>);
}