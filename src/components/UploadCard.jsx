import { useDropzone } from "react-dropzone";

function UploadCard() {
    const {
        getRootProps,
        getInputProps
    } = useDropzone({
        accept: {
            "application/pdf": [".pdf"]
        },
        onDrop: (acceptedFiles) => {
            console.log(acceptedFiles);
        }
    })

    return (
        <div
            {...getRootProps()}
            className="border-2 border-dashed border-blue-500 rounded-xl p-10 text-center cursor-pointer hover:bg-gray-800"
        >
            <input
                {...getInputProps()}
            />
            <h2 className="text-2xl font-bold">
                Upload PDF
            </h2>
            <p className="mt-4 text-gray-400">
                Drag and Drop
                or
                Click Here
            </p>
        </div>
    )
}

export default UploadCard;