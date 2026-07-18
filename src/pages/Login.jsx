import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { FaRobot } from "react-icons/fa";
import InputField from "../components/InputField";

function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const login = (data) => {
        console.log(data);
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-950 via-blue-950 to-black flex justify-center items-center">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: .5 }}
                className="
                bg-gray-900/80
                backdrop-blur-xl
                w-[420px]
                p-10
                rounded-3xl
                shadow-2xl
                border
                border-gray-700
                "
            >

                <div className="flex justify-center mb-5">
                    <FaRobot
                        size={60}
                        className="text-blue-500"
                    />
                </div>
                <h1 className="text-4xl font-bold text-center">
                    AI Assistant
                </h1>
                <p className="text-center text-gray-400 mt-2 mb-8">
                    Login to continue
                </p>
                <form onSubmit={handleSubmit(login)}>
                    <InputField
                        type="email"
                        placeholder="Email"
                        register={register}
                        name="email"
                        error={errors.email}
                    />

                    <InputField
                        type="password"
                        placeholder="Password"
                        register={register}
                        name="password"
                        error={errors.password}
                    />

                    <button
                        className="
                        w-full
                        bg-blue-600
                        hover:bg-blue-700
                        rounded-xl
                        p-4
                        font-bold
                        transition
                        "
                    >
                        Login
                    </button>
                </form>
                <div className="mt-8 text-center">
                    <Link
                        to="/register"
                        className="text-blue-400"
                    >
                        Create Account
                    </Link>
                </div>
            </motion.div>
        </div>
    )
}

export default Login;