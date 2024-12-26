import { useState, useEffect } from "react"; // Import useEffect
import { FaTimes } from "react-icons/fa";
import { gsap } from "gsap";
import emailjs from "emailjs-com"; // Import EmailJS SDK

const QuoteModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    address: "",
    materials: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const timeline = gsap.timeline();
    timeline.fromTo(
      ".modal-content",
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5 }
    );
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send the email via EmailJS
      const templateParams = {
        to_name: "Admin",  // Replace with recipient's name
        from_name: formData.name,
        email: formData.email,
        company_name: formData.company,
        address: formData.address,
        materials: formData.materials,
      };

      const result = await emailjs.send(
        "service_bwdd7xf",  // Your EmailJS service ID
        "template_4smyiub",  // Your EmailJS template ID
        templateParams,
        "aAI_fZh45VoM-it7Y"  // Your EmailJS user ID
      );

      console.log(result.text); // Log the result

      alert("Quote request submitted successfully!");
      setFormData({
        name: "",
        email: "",
        company: "",
        address: "",
        materials: "",
      });
      onClose();
    } catch (error) {
      console.error("Error submitting the form:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="modal-content bg-white rounded-lg shadow-lg w-96 p-6 relative text-black">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
        >
          <FaTimes />
        </button>
        {/* Modal Content */}
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Request a Quote
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Company Name"
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Company Address"
            className="w-full p-2 border border-gray-300 rounded h-20"
            required
          />
          <textarea
            name="materials"
            value={formData.materials}
            onChange={handleChange}
            placeholder="Material Details"
            className="w-full p-2 border border-gray-300 rounded h-24"
            required
          />
          <button
            type="submit"
            className="w-full bg-yellow-500 hover:bg-yellow-400 text-white py-2 rounded font-semibold transition-all"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default QuoteModal;
