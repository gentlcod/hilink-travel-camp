'use client'

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <section className="flex justify-center items-center">
      <div className="max-w-4xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-
        8">
          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="bg-gray-100 p-6  
            sm:w-[500px] mb-[100px] rounded-lg xl:ml-[-10px]
             md:w-[700px] md:ml-[39px] xl:w-[900px]"
          >

            <Image
            src="/camp.svg"
            alt="camp"
            width={24}
            height={24}
            className="absolute ml-[165px] mt-[-15.9px]
             md:ml-[265px] xl:ml-[367.7px]"
            />

            <h2 className="text-2xl font-bold mb-4 text-center">Contact Us</h2>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="border-none w-full px-4 py-2 mb-4 rounded-md border-gray-300 focus:outline-none focus:border-primary-500"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="border-none w-full px-4 py-2 mb-4 rounded-md border-gray-300 focus:outline-none focus:border-primary-500"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              rows={5}
              className="border-none w-full px-4 py-2 mb-4 rounded-md border-gray-300 focus:outline-none focus:border-primary-500"
            />
            <button
              type="submit"
              className="border-none bg-green-50 w-full bg-primary-500 text-white py-2 rounded-md transition duration-300 hover:bg-primary-600"
            >
              Send Message
            </button>
          </motion.form>

        </div>
      </div>
    </section>
  );
};

export default ContactPage;
