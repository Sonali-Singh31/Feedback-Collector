import { useState } from "react";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";

function App() {
  const [showAdmin, setShowAdmin] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => setDarkMode(!darkMode);

  const backgroundImage = darkMode
    ? "url('https://source.unsplash.com/1600x900/?night,feedback')"
    : "url('https://source.unsplash.com/1600x900/?feedback,form')";

  return (
    <div
      className={`min-h-screen bg-cover bg-center bg-no-repeat transition-colors duration-500 font-ubuntu ${
        darkMode ? "text-white" : "text-gray-800"
      }`}
      style={{
        backgroundImage,
      }}
    >
      <div
        className={`${
          darkMode ? "bg-gray-900 bg-opacity-90" : "bg-white bg-opacity-80"
        } min-h-screen px-4 transition-colors duration-500`}
      >
        <div className="text-center py-4 flex flex-col items-center space-y-2">
          <h1
            className={`text-3xl p-4 rounded-md lg:text-4xl font-bold shadow-md transition ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Feedback Collector
          </h1>

          <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0">
            <button
              onClick={() => setShowAdmin(!showAdmin)}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded shadow-md transition-all duration-300 ease-in-out hover:scale-[1.03]"
            >
              {showAdmin ? "Hide Feedback" : "View Submitted Feedback"}
            </button>
            <button
              onClick={toggleTheme}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded shadow-md transition-all duration-300 ease-in-out hover:scale-[1.03]"
            >
              {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            </button>
          </div>
        </div>

        <div className="flex justify-center items-center py-4">
          <div
            className={`${
              darkMode ? "bg-gray-800 text-white" : "bg-white"
            } bg-opacity-90 px-6 py-4 rounded-2xl shadow-2xl w-full max-w-xl transition-all duration-500 animate-fadeIn`}
          >
            {showAdmin ? <FeedbackList darkMode={darkMode} /> : <FeedbackForm darkMode={darkMode} />}
          </div>
        </div>

        <footer
          className={`text-center py-2 text-sm transition-colors duration-300 ${
            darkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          © 2025 Sonali Singh – Feedback Collector
        </footer>
      </div>
    </div>
  );
}

export default App;
