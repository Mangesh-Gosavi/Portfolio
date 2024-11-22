import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import git from '../assets/git.jpg';
import linkedin from '../assets/linkdin.png';
import { useEffect, useState } from "react";

function Contact() {
  const { register, handleSubmit, formState } = useForm();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://portfolioserver-1yf2.onrender.com/users", {
          method: "GET",
          headers: {
            "Accept": "application/json",
          },
        });
        const data = await response.json();
        console.log(data);
        setData(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData(); 
  }, []);

  // Handle form submission
  const onSubmitHandler = async (formData) => {
    console.log(formData);
    try {
      const response = await fetch("https://portfolioserver-1yf2.onrender.com/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log("Response from server:", result);
    } catch (error) {
      console.error("Error during fetch:", error);
    }
  };

  return (
    <>
      <main className="flex flex-col md:flex-row items-center justify-center bg-blue-950 p-10 gap-8 min-h-screen">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
          <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmitHandler)}>
            <label>Company Name : </label>
            <input
              {...register("name")}
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              required
            />
            <label>Email: </label>
            <input
              {...register("email")}
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="email"
              required
            />
            <label>Message: </label>
            <textarea
              {...register("message")}
              rows="4"
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow transition duration-300"
            >
              Submit
            </button>
          </form>
          <div className="flex justify-center gap-5 mt-4">
            <Link to="https://github.com/Mangesh-Gosavi">
              <img
                className="w-12 h-12 rounded-full shadow-lg hover:scale-125 transition duration-1000"
                src={git}
                alt="Git image"
              />
            </Link>
            <Link to="https://www.linkedin.com/in/mangesh-gosavi-2b2b25296/">
              <img
                className="w-12 h-12 rounded-full shadow-lg hover:scale-125 transition duration-1000"
                src={linkedin}
                alt="Linkdin image"
              />
            </Link>
          </div>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
          <h1 className="font-bold text-center mb-4">Messages</h1>
          {data.length > 0 ? (
            data.map((item, index) => (
              <div
                key={index}
                className="border border-gray-500 shadow-lg shadow-zinc-400 p-3 rounded-xl mb-5"
              >
                <h2 className="font-semibold">{item.email}</h2>
                <h3>Company Name: {item.name}</h3>
                <h3>Message: {item.message}</h3>
              </div>
            ))
          ) : (
            <p>No messages to display</p>
          )}
        </div>
      </main>
    </>
  );
}

export default Contact;
