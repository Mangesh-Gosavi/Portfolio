import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import git from "../assets/git.jpg";
import linkedin from "../assets/linkdin.png";
import API_URL from "../config";

function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const [status, setStatus] = useState({ type: "", message: "" });

  const onSubmitHandler = async (formData) => {
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch(`${API_URL}/send-email`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(result?.message || `Request failed (${response.status})`);
      }

      setStatus({
        type: "success",
        message: "Thanks! Your message has been sent.",
      });
      reset();
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error.message || "Something went wrong. Please try again later.",
      });
    }
  };

  return (
    <main className="flex flex-col items-center justify-center bg-blue-950 p-10 gap-8 min-h-screen">
      <header className="text-center text-white max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-3 leading-tight">
          <span className="text-blue-400">Let’s Build Something Great</span>
        </h1>
        <div className="w-20 h-1 bg-blue-400 rounded-full mx-auto mb-4" />
        <p className="text-gray-300 text-base md:text-lg">
          I’m available for developer roles and exciting projects. Let’s connect.
        </p>
      </header>

      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <form
          className="flex flex-col gap-5"
          onSubmit={handleSubmit(onSubmitHandler)}
          noValidate
        >
          <label htmlFor="name">Company Name :</label>
          <input
            id="name"
            {...register("name", {
              required: "Company name is required",
              minLength: { value: 2, message: "Name is too short" },
            })}
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            disabled={isSubmitting}
          />
          {errors.name && (
            <span className="text-red-600 text-sm">{errors.name.message}</span>
          )}

          <label htmlFor="email">Email:</label>
          <input
            id="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter a valid email",
              },
            })}
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="email"
            disabled={isSubmitting}
          />
          {errors.email && (
            <span className="text-red-600 text-sm">{errors.email.message}</span>
          )}

          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            {...register("message", {
              required: "Message is required",
              minLength: { value: 5, message: "Message is too short" },
            })}
            rows="4"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={isSubmitting}
          />
          {errors.message && (
            <span className="text-red-600 text-sm">
              {errors.message.message}
            </span>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed text-white font-semibold py-2 px-4 rounded-lg shadow transition duration-300"
          >
            {isSubmitting ? "Sending..." : "Submit"}
          </button>

          {status.message && (
            <div
              role="status"
              className={`text-sm text-center p-2 rounded-lg ${
                status.type === "success"
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {status.message}
            </div>
          )}
        </form>

        <div className="flex justify-center gap-5 mt-4">
          <Link to="https://github.com/Mangesh-Gosavi">
            <img
              className="w-12 h-12 rounded-full shadow-lg hover:scale-125 transition duration-1000"
              src={git}
              alt="GitHub"
            />
          </Link>
          <Link to="https://www.linkedin.com/in/mangesh-gosavi-2b2b25296/">
            <img
              className="w-12 h-12 rounded-full shadow-lg hover:scale-125 transition duration-1000"
              src={linkedin}
              alt="LinkedIn"
            />
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Contact;
