export default function Button({ children, ...props }) {
    return (    
        <button
            className="bg-blue-500 text-white font-bold px-4 py-2 rounded-2xl shadow-lg transition-shadow hover:shadow-2xl duration-300 cursor-pointer"
            {...props}
        >
            {children}
            </button>
    )
}