import { LoaderCircle } from "lucide-react";

function Loader() {
    return (
        <div className="flex justify-center items-center py-10">
            <LoaderCircle className="animate-spin" size={40} />
        </div>
    );
}

export default Loader;