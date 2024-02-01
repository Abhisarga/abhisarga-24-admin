export default function SubmitButton({ type, label }) {
    return (
        <>
            <button
                type={type}
                className="block w-1/3 rounded-lg bg-indigo-700 px-5 py-3 text-sm font-medium text-white mx-auto hover:bg-indigo-800 hover:shadow-lg"
            >
                {label}
            </button>
        </>
    )
}
