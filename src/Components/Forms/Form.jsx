export default function Form({ action, children }) {
    return (

        <>
            <form action={action} className="mb-0 mt-6 space-y-4 rounded-lg p-8 shadow-lg sm:p-6 lg:p-8">
                {children}
            </form>
        </>
    );
}