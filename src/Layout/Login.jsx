import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import doc1 from "../assets/doc1.png";

const Login = ({ onSwitch }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      await signInWithEmailAndPassword(auth, email, password);
      setSuccess("Logged in successfully!");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-900">
      <div className="flex bg-blue-100 rounded-2xl shadow-lg w-4/5 max-w-5xl overflow-hidden">
        {/* Left side form */}
        <div className="w-1/2 px-10 py-12">
          <h2 className="text-2xl font-bold mb-2 text-gray-800">Login</h2>
          <p className="text-sm mb-6 text-gray-600">
            If you don't have account?{" "}
            <button onClick={onSwitch} className="text-blue-600 underline">
              SignUp Here
            </button>
          </p>

          <form className="space-y-4" onSubmit={handleLogin}>
            <div>
              <input
                type="email"
                placeholder="Enter your email here"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Enter your password here"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-32 py-2 rounded-full bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition"
            >
              Login
            </button>
          </form>

          {success && <p className="mt-4 text-green-600 text-sm">{success}</p>}
          {error && <p className="mt-4 text-red-600 text-sm">{error}</p>}
        </div>

        {/* Right side image */}
        <div className="w-1/2 bg-blue-50 flex items-center justify-center p-8">
          <img src={doc1} alt="Login Illustration" className="max-h-96 object-contain" />
        </div>
      </div>
    </div>
  );
};

export default Login;
