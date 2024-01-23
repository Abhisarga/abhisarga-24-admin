
export default function RootLayout({ children }) {
    return (
        <>
            <div className="w-max-md mx-auto text-black">
                {children}
            </div>
        </>
    );

}