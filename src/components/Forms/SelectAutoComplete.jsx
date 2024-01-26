import { UpDownArrowIcon } from "./FormIcons";
export function SelectAutoComplete({ id, label, placeholder, options, children }) {
    /*
pass the options as children
*/
    return (
        <>
            <div>
                <label htmlFor={id} className="block text-sm font-medium text-gray-900">{label} </label>

                <div className="relative mt-1.5">
                    <input
                        type="text"
                        name={id}
                        list={`${id}List`}
                        id={id}
                        className="w-full rounded-lg border-gray-300 pe-10 p-3 text-gray-700 sm:text-sm [&::-webkit-calendar-picker-indicator]:opacity-0"
                        placeholder={placeholder}
                    />

                    <span className="absolute inset-y-0 end-0 flex w-8 items-center">
                        <UpDownArrowIcon />
                    </span>
                </div>

                {!options && <datalist name={id} id={`${id}List`}>
                    {children}
                </datalist>}
                {options && <datalist name={id} id={`${id}List`}>
                    {options.map((option, index) => (<option key={index} value={option}> {option}</option>))}
                </datalist>}
            </div>
        </>
    );
}