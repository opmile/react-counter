export default function Container({ children }) {
    return (
        <div className="h-screen flex flex-col items-center justify-center font-primary text-2xl gap-12">
            {children}
        </div>
    )
}