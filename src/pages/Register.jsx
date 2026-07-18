import { Link } from "react-router-dom";

function Register() {
    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="bg-gray-900 p-10 rounded-xl w-[400px]">
                <h1 className="text-3xl font-bold mb-8">
                    Register
                </h1>
                <input className="w-full p-3 rounded bg-gray-800 mb-4" placeholder="Name" />
                <input className="w-full p-3 rounded bg-gray-800 mb-4" placeholder="Email" />
                <input type="password" className="w-full p-3 rounded bg-gray-800 mb-4" placeholder="Password" />
                <button className="bg-green-600 w-full p-3 rounded">
                    Register
                </button>
                <p className="mt-5">
                    Already have account?
                    <Link to="/" className="text-blue-400">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default Register;