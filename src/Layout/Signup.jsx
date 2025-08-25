import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import doc1 from "../assets/doc1.png";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setSuccess("Account created successfully!");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-900">
      <div className="flex bg-blue-100 rounded-2xl shadow-lg w-4/5 max-w-5xl overflow-hidden">
        {/* Left side form */}
        <div className="w-1/2 px-10 py-12">
          <h2 className="text-2xl font-bold mb-2 text-gray-800">Sign up</h2>
          <p className="text-sm mb-6 text-gray-600">
            Already have account? <a href="#" className="text-blue-600">Login here</a>
          </p>

          <form className="space-y-4" onSubmit={handleSignup}>
            <div>
              <input
                type="text"
                placeholder="Enter your name here"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
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

            <div className="flex items-center space-x-2">
              <input type="checkbox" id="updates" className="w-4 h-4" />
              <label htmlFor="updates" className="text-xs text-gray-600">
                By Signing up you agree to receive updates and special offers.
              </label>
            </div>

            <button
              type="submit"
              className="w-32 py-2 rounded-full bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </form>


          {success && <p className="mt-4 text-green-600 text-sm">{success}</p>}
          {error && <p className="mt-4 text-red-600 text-sm">{error}</p>}
        </div>


        <div className="w-1/2 bg-blue-50 flex items-center justify-center p-8">
          <img
            src={doc1}
            alt="Signup Illustration"
            className="max-h-96 object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;
