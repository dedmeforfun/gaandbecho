import { useState } from "react";

const InquiryModal = ({ isOpen, onClose, product }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = () => {
    // Send inquiry to WhatsApp & Firebase
    alert("Inquiry sent successfully!");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-md w-80">
        <h2 className="text-xl font-bold mb-4">Inquiry for {product.name}</h2>
        <input
          type="text"
          className="border p-2 mb-4 w-full"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          className="border p-2 mb-4 w-full"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Send Inquiry
        </button>
      </div>
    </div>
  );
};

export default InquiryModal;
