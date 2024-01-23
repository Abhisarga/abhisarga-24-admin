export function SelectDropDown({ id, label, children }) {
    /*
    pass the options as children
    */
    return (
        <>
            <div>
                <label htmlFor={id} className="block text-sm font-medium text-gray-900"> {label} </label>

                <select
                    name={id}
                    id={id}
                    className="mt-1.5 w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm"
                >
                    {children}
                </select>
            </div>
        </>
    );
}