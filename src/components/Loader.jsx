function Loader() {
    return (
        <div className="flex gap-2 p-4">
            <div className="w-3 h-3 rounded-full bg-blue-500 animate-bounce"></div>
            <div className="w-3 h-3 rounded-full bg-blue-500 animate-bounce delay-100"></div>
            <div className="w-3 h-3 rounded-full bg-blue-500 animate-bounce delay-200"></div>
        </div>
    )
}

export default Loader;