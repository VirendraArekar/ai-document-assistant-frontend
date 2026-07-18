import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { FaRobot } from "react-icons/fa";
import { useState } from "react";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

import InputField from "../components/InputField";
import { loginUser } from "../api/authService";
import { loginSuccess } from "../redux/authSlice";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const login = async (data) => {
    try {
      setLoading(true);

      const response = await loginUser(data);

      dispatch(loginSuccess(response));

      toast.success("Welcome Back!");

      navigate("/dashboard");
    } catch (error) {
      toast.error(error.response?.data?.message || "Invalid Email or Password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-black flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md rounded-3xl border border-slate-700 bg-slate-900/70 backdrop-blur-xl shadow-2xl p-10"
      >
        <div className="flex justify-center">
          <div className="bg-blue-600 p-5 rounded-full shadow-lg">
            <FaRobot className="text-5xl text-white" />
          </div>
        </div>

        <h1 className="text-center text-5xl font-bold mt-6">AI Assistant</h1>

        <p className="text-center text-slate-400 mt-3 mb-8">
          Login to continue
        </p>

        <form onSubmit={handleSubmit(login)} className="space-y-5">
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

          <div className="flex justify-end">
            <Link
              to="/forgot-password"
              className="text-sm text-blue-400 hover:text-blue-300"
            >
              Forgot Password?
            </Link>
          </div>

          <button
            disabled={loading}
            className="w-full rounded-2xl bg-blue-600 py-4 text-lg font-semibold hover:bg-blue-700 transition disabled:opacity-60"
          >
            {loading ? "Logging In..." : "Login"}
          </button>
        </form>

        <div className="text-center mt-8 text-slate-400">
          Don't have an account?
          <Link to="/register" className="ml-2 font-semibold text-blue-400">
            Register
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

export default Login;
