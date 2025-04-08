import { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, getDocs, query, orderBy } from "firebase/firestore";

export default function FeedbackList({ darkMode }) {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      const q = query(collection(db, "feedbacks"), orderBy("timestamp", "desc"));
      const querySnapshot = await getDocs(q);
      setFeedbacks(querySnapshot.docs.map((doc) => doc.data()));
    };
    fetchFeedbacks();
  }, []);

  return (
    <div className="max-w-3xl mx-auto mt-6 px-4">
      <h2 className={`text-xl font-bold mb-4 transition-colors ${darkMode ? "text-white" : "text-gray-800"}`}>
        Submitted Feedback
      </h2>
      <div className="grid gap-4">
        {feedbacks.map((f, i) => (
          <div
            key={i}
            className={`p-4 border rounded shadow-sm transition-all duration-300 transform hover:shadow-md hover:scale-[1.01] ${
              darkMode
                ? "bg-gray-800 text-white border-gray-700"
                : "bg-gray-50 text-gray-800 border-gray-200"
            }`}
          >
            <p className="font-semibold">{f.name}</p>
            <p className="text-sm mt-1">{f.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
