function UploadProgress({ progress }) {
    return (
        <div className="mt-5">
            <div className="bg-gray-700 rounded-full h-3">
                <div
                    style={{
                        width: `${progress}%`
                    }}
                    className="bg-blue-500 h-3 rounded-full transition-all duration-300"
                />
            </div>
            <p className="text-sm mt-2">
                {progress}%
            </p>
        </div>
    );
}

export default UploadProgress;