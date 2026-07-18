import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { FaUserPlus } from "react-icons/fa";
import { useState } from "react";
import toast from "react-hot-toast";

import InputField from "../components/InputField";
import { registerUser } from "../api/authService";

function Register() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      await registerUser(data);

      toast.success("Account created successfully");

      navigate("/");
    } catch (error) {
      toast.error(error.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-blue-950 to-black px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md rounded-3xl bg-slate-900/70 border border-slate-700 backdrop-blur-xl p-10 shadow-2xl"
      >
        <div className="flex justify-center">
          <div className="bg-green-600 rounded-full p-5">
            <FaUserPlus className="text-4xl text-white" />
          </div>
        </div>

        <h1 className="text-center text-4xl font-bold mt-6">Create Account</h1>

        <p className="text-center text-slate-400 mt-2 mb-8">
          Register to use AI Assistant
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <InputField
            type="text"
            placeholder="Full Name"
            register={register}
            name="name"
            error={errors.name}
          />

          <InputField
            type="email"
            placeholder="Email Address"
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
            type="submit"
            disabled={loading}
            className="w-full py-4 rounded-2xl bg-green-600 hover:bg-green-700 transition font-semibold"
          >
            {loading ? "Creating Account..." : "Register"}
          </button>
        </form>

        <div className="mt-8 text-center">
          Already have an account?
          <Link to="/" className="text-blue-400 ml-2">
            Login
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

export default Register;
