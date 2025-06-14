import React, { useState } from "react";

const Team = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    // Add your submission logic here (e.g. API call)
  };

  return (
    <div className="md:mx-10 md:gap-5 bg-base-200 md:w-[1270px] w-[500px] p-5 mx-5">
      <div>
        <div className="flex justify-center gap-7 items-center text-center ">
          <div className="leading-6 text-black mt-16">
            <h1 className="text-5xl md:text-7xl font-semibold">
              Get in
              <span className="text-accent"> Touch</span>
            </h1>
            <br></br>
            <p className="text-xl text-gray-700">
              We're here to help you start your wellness journey.
            </p>
          </div>
        </div>
      </div>
      <div className="md:flex justify-center items-center grid-cols-1">
        <div className="md:w-[600px] w-[350px] md:h-[600px] mt-10 p-6 bg-white rounded-lg shadow-lg m-20">
          <h2 className="md:text-2xl text-xl font-semibold mb-6 text-gray-800">
            Send Message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-md md:text-lg font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Type Your Name"
                required
                className="mt-1 block w-full px-5 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-md md:text-lg font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Type Your Email"
                required
                className="mt-1 block w-full px-5 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-md md:text-lg font-medium text-gray-700">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Type Your Phone"
                className="mt-1 block w-full px-5 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-md md:text-lg font-medium text-gray-700">
                Message
              </label>
              <textarea
                name="message"
                rows="4"
                value={form.message}
                onChange={handleChange}
                placeholder="Type Your Massage"
                required
                className="mt-1 block w-full px-5 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-teal-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
        <div className="  md:w-[600px] w-[350px] md:h-[600px] mt-10 p-6 bg-white rounded-lg shadow-lg m-20">
          <div>
            <h2 className="md:text-2xl text-xl font-semibold mb-6 text-gray-800">
              Contact Information
            </h2>
          </div>
          <div>
            <dib className="flex justify-start items-center gap-5 mt-10">
              <img className="w-7 h-7" src="/src/assets/icon1.png" alt="" />
              <div className="text-base/10 ">
                <h3 className="text-xl font-semibold">Our Location</h3>
                <p>123 Wellness Avenue, Suite 200 Dubai, UAE</p>
              </div>
            </dib>
            <dib>
              <dib className="flex justify-start items-center gap-5 mt-10">
                <img className="w-7 h-7" src="/src/assets/icon2.png" alt="" />
                <div className="text-base/10 ">
                  <h3 className="text-xl font-semibold">Phone</h3>
                  <p>(555) 123-4567</p>
                </div>
              </dib>
            </dib>
            <dib>
              <dib className="flex justify-start items-center gap-5 mt-10">
                <img className="w-7 h-7" src="/src/assets/icon3.png" alt="" />
                <div className="text-base/10 ">
                  <h3 className="text-xl font-semibold">Email</h3>
                  <p>info@relive-clinic.com</p>
                </div>
              </dib>
              <br></br>
              <br></br>
              <div className="gap-10 text-base/9 ">
                <h3 className="text-2xl font-semibold ">Business Hours</h3>
                <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </dib>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
