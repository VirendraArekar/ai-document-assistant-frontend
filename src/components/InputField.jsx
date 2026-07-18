import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

function InputField({
    type,
    placeholder,
    register,
    name,
    error
}) {
    const [showPassword, setShowPassword] = useState(false);
    const inputType =
        type === "password"
            ? (showPassword ? "text" : "password")
            : type;
    return (
        <div className="mb-5">
            <div className="relative">
                <input
                    type={inputType}
                    placeholder={placeholder}
                    {...register(name)}
                    className="
                    w-full
                    rounded-xl
                    bg-gray-800
                    border
                    border-gray-700
                    p-4
                    outline-none
                    focus:border-blue-500
                    transition
                    "
                />

                {
                    type === "password" &&
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-4"
                    >
                        {
                            showPassword
                                ? <FaEyeSlash />
                                : <FaEye />
                        }
                    </button>
                }
            </div>
            {
                error &&
                <p className="text-red-500 mt-2">
                    {error.message}
                </p>
            }
        </div>
    )
}

export default InputField;