export default function FileUpload({ id, label, help }) {
    return (
        <>
            <div>
                <label
                    className="block text-sm font-medium text-gray-700 p-1"
                    htmlFor={id}
                >
                    {label}
                </label>
                <input
                    className="lock w-full border shadow-sm rounded-lg text-sm focus:z-10 border-gray-200 focus:ring-indigo-600 disabled:opacity-50 disabled:pointer-events-none focus:border-indigo-600
                     file:border-0
                     bg-white
                    file:bg-indigo-600 file:me-4
                    file:text-white
                    file:py-3 file:px-4
                    file:cursor-pointer
                   "
                    aria-describedby={`${id}-help`}
                    id={id}
                    type="file"
                    name={`fileUpload@${id}`}
                />
                <p className=" text-sm text-gray-500 p-1.5" id={`${id}-help`}>
                    {help}
                </p>
            </div>
        </>
    )
}
