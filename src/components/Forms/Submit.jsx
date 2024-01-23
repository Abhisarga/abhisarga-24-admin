export default function SubmitButton({ type, label }) {
    return (

        <>
            <button
                type={type}
                className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
            >
                {label}
            </button>

        </>
    );
}