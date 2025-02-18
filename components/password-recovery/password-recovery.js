import { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import {auth} from "@/services/firebase.config";

export default function PasswordRecovery() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate password recovery process
    sendPasswordResetEmail(auth, email)
      .then(() => {
        console.log('Email reset password sent');
      })
      .catch((error) => {
        console.log(error);
      });
    setMessage(
      "If an account with that email exists, you will receive a password reset link."
    );
  };

  return (
    <div className="max-w-md mx-auto p-6 text-gray-800">
      <h1 className="text-3xl font-bold mb-4">Password Recovery</h1>
      <p className="mb-4">
        Enter your email address to receive a password reset link.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Send Reset Link
        </button>
      </form>

      {message && <p className="mt-4 text-green-600">{message}</p>}
    </div>
  );
}
