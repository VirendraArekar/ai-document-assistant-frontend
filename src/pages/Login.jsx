import { Link } from "react-router-dom";

function Login() {
    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="bg-gray-900 p-10 rounded-xl w-[400px]">
                <h1 className="text-3xl font-bold mb-8 text-center">
                    AI Document Assistant
                </h1>
                <input
                    className="w-full p-3 rounded bg-gray-800 mb-4"
                    placeholder="Email"
                />
                <input
                    type="password"
                    className="w-full p-3 rounded bg-gray-800 mb-4"
                    placeholder="Password"
                />
                <button
                    className="bg-blue-600 w-full p-3 rounded"
                >
                    Login
                </button>
                <p className="mt-6 text-center">
                    No Account?
                    <Link
                        to="/register"
                        className="text-blue-400"
                    >
                        Register
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default Login;