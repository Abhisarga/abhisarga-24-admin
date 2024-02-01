export function SelectDropDown({ id, label, placeholder, options, children }) {
    /*
    pass the options as children
    */
    return (
        <>
            <div>
                <label
                    htmlFor={id}
                    className="block text-sm font-medium text-gray-900"
                >
                    {' '}
                    {label}{' '}
                </label>

                <select
                    name={id}
                    id={id}
                    className="mt-1.5 w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm p-3"
                >
                    <option value="none" selected disabled hidden>
                        {placeholder}{' '}
                    </option>
                    {!options && children}
                    {options &&
                        options.map((option, index) => (
                            <option key={index} value={option}>
                                {' '}
                                {option}
                            </option>
                        ))}
                </select>
            </div>
        </>
    )
}
