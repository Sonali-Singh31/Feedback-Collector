import { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";

export default function FeedbackForm({ darkMode }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await addDoc(collection(db, "feedbacks"), {
        ...form,
        timestamp: Timestamp.now(),
      });
      alert("Feedback submitted!");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      alert("Submission failed!");
    }
    setLoading(false);
  };

  const inputClass = `w-full p-2 border border-gray-300 rounded transition duration-300 
    focus:outline-none focus:border-gray-600 
    ${darkMode ? "bg-gray-800 text-white border-gray-700" : "bg-white text-black"}`;

  const formClass = `max-w-lg mx-auto px-4 py-2 space-y-4 rounded-xl shadow-lg transform transition duration-500 ease-in-out 
    ${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"}`;

  return (
    <form onSubmit={handleSubmit} className={formClass}>
      <h2 className="text-2xl font-semibold mb-2">Submit Feedback</h2>

      <input
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Full Name"
        required
        className={inputClass}
      />
      <input
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Email"
        required
        className={inputClass}
      />
      <textarea
        name="message"
        value={form.message}
        onChange={handleChange}
        placeholder="Your feedback..."
        required
        rows={4}
        className={inputClass}
      />
      <button
        type="submit"
        disabled={loading}
        className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition duration-300 transform hover:scale-105"
      >
        {loading ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}
