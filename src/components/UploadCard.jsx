import { useDropzone } from "react-dropzone";
import useUpload from "../hooks/useUpload";
import UploadProgress from "./UploadProgress";

function UploadCard() {
    const {
        upload,
        progress,
        loading
    } = useUpload();

    const {
        getRootProps,
        getInputProps
    } = useDropzone({
        multiple: false,
        maxSize: 10 * 1024 * 1024,
        accept: {
            "application/pdf": [".pdf"]
        },
        onDrop: (acceptedFiles) => {
            if (acceptedFiles.length > 0) {
                upload(acceptedFiles[0]);
            }
        }
    });

    return (
        <div
            {...getRootProps()}
            className="bg-gray-900 rounded-xl p-8 border-2 border-dashed border-blue-500 cursor-pointer"
        >
            <input {...getInputProps()} />
            <h2 className="text-2xl font-bold">
                Upload PDF
            </h2>
            <p className="mt-3 text-gray-400">
                Drag & Drop your PDF here
            </p>
            {
                loading &&
                <UploadProgress
                    progress={progress}
                />
            }
        </div>
    );
}

export default UploadCard;