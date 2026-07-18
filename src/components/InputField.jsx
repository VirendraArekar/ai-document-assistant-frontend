import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function InputField({
  type,

  placeholder,

  register,

  name,

  error,
}) {
  const [show, setShow] = useState(false);

  const inputType = type === "password" ? (show ? "text" : "password") : type;

  return (
    <div>
      <div className="relative">
        <input
          type={inputType}
          placeholder={placeholder}
          {...register(name)}
          className="w-full rounded-2xl border border-slate-700 bg-slate-800 px-5 py-4 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
        />

        {type === "password" && (
          <button
            type="button"
            onClick={() => setShow(!show)}
            className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400"
          >
            {show ? <FaEyeSlash /> : <FaEye />}
          </button>
        )}
      </div>

      {error && <p className="text-red-500 text-sm mt-2">{error.message}</p>}
    </div>
  );
}

export default InputField;
