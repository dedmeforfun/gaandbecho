import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { db } from "../utils/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import InquiryModal from "../components/InquiryModal";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      const productRef = doc(db, "products", id);
      const productSnap = await getDoc(productRef);

      if (productSnap.exists()) {
        setProduct(productSnap.data());
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) return <p className="text-center text-lg">Loading...</p>;

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg transition-all duration-500 ease-in-out transform hover:scale-105">
        <h1 className="text-4xl font-semibold text-gray-800 mb-4 fade-in">{product.name}</h1>
        <p className="text-gray-600 text-lg mb-6">{product.description}</p>
        <p className="text-blue-600 font-bold text-2xl mb-4">₹{product.price}</p>

        {product.imageUrl && (
          <div className="mb-6 transition-opacity duration-500 opacity-0 fade-in">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        )}

        <div className="mt-6">
          <button
            onClick={() => setModalOpen(true)}
            className="w-full py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-500 transition duration-300 transform hover:scale-105"
          >
            Send Inquiry
          </button>
        </div>
      </div>

      <InquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        product={product}
      />
    </div>
  );
};

export default ProductPage;
