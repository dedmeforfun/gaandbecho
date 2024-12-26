import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_afu1r53", // Your EmailJS service ID
        "template_4smyiub", // Your EmailJS template ID
        formData,
        "aAI_fZh45VoM-it7Y" // Your EmailJS user ID
      )
      .then(
        () => {
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
        },
        (error) => {
          alert("Failed to send message. Please try again.");
          console.error(error);
        }
      );
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-10">Get in Touch</h1>
      <div className="flex flex-col md:flex-row gap-12">
        {/* Contact Form */}
        <div className="md:w-2/3 bg-white p-8 shadow-lg rounded-lg">
          <h2 className="text-2xl font-bold mb-6">Contact Form</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-3/4 border p-2 rounded-md"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-3/4 border p-2 rounded-md"
              required
            />
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your Phone Number"
              className="w-3/4 border p-2 rounded-md"
              required
            />
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              className="w-3/4 border p-2 rounded-md"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="w-3/4 border p-2 rounded-md"
              rows="4"
              required
            ></textarea>
            <button
              type="submit"
              className="w-3/4 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Line Separator */}
        <div className="hidden md:block w-[1px] bg-gray-300"></div>

        {/* Additional Info and Map */}
        <div className="md:w-1/3 space-y-8">
          {/* Info Section */}
          <div className="bg-gray-100 p-6 shadow-lg rounded-lg">
            <h2 className="text-xl font-bold mb-4">Contact Information</h2>
            <p>
              Email:{" "}
              <a
                href="mailto:info@shubhamenterprises.co"
                className="text-blue-500"
              >
                info@shubhamenterprises.com
              </a>
            </p>
            <p>Phone: +91 9031446324</p>
            <p>Working Hours: Mon - Sat, 9 AM - 6 PM</p>
            <p>Address: Panchsheel Enclave, Jamshedpur, Jharkhand</p>
          </div>

          {/* Map Section */}
          <div className="bg-white shadow-lg rounded-lg">
            <h2 className="text-xl font-bold mb-4 p-6">Our Location</h2>
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3678.188974754668!2d86.13705129520733!3d22.795460588485955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f5e527c34d20e5%3A0xf959510d445d4618!2sPanchsheel%20Enclave!5e0!3m2!1sen!2sin!4v1734586170106!5m2!1sen!2sin"
              width="100%"
              height="250"
              className="rounded-b-lg"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
