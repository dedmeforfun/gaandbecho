import { useState, useEffect } from "react";
import { db } from "../utils/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import Modal from "react-modal";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

// Setting up modal root element
Modal.setAppElement("#root");

const ViewAllProducts = () => {
  const [products, setProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const querySnapshot = await getDocs(collection(db, "products"));
      const productList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setProducts(productList);
    };

    fetchProducts();
  }, []);

  const handleImageClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const handleWhatsAppEnquiry = (productName) => {
    const whatsappUrl = `https://wa.me/9031446324?text=Hi,%20I%20am%20interested%20in%20the%20product%20"${productName}".%20Please%20provide%20more%20details.`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          All Products
        </h1>
        <div className="space-y-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row items-center md:items-start p-6"
            >
              {/* Product Image */}
              <div
                className="w-full md:w-1/3 lg:w-1/4 mb-6 md:mb-0 cursor-pointer"
                onClick={() => handleImageClick(product)}
              >
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-md"
                />
              </div>
              {/* Product Details */}
              <div className="flex-grow md:pl-6">
                <h2 className="text-2xl font-semibold text-gray-800">
                  {product.name}
                </h2>
                <p className="text-gray-600 mt-2">{product.description}</p>
                <p className="text-xl font-bold text-indigo-600 mt-4">
                  ₹{product.price.toFixed(2)}
                </p>
                <button
                  onClick={() => handleWhatsAppEnquiry(product.name)}
                  className="mt-4 bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-all duration-300"
                >
                  Send Enquiry
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for large image view */}
      {selectedProduct && (
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          contentLabel="Product Image"
          overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
          className="bg-white rounded-lg shadow-lg w-11/12 max-w-4xl p-6 relative"
        >
          <button
            onClick={closeModal}
            className="absolute top-3 right-3 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-full p-2 focus:outline-none"
          >
            ✕
          </button>
          <div className="flex flex-col items-center">
            <Zoom>
              <img
                src={selectedProduct.imageUrl}
                alt={selectedProduct.name}
                className="w-full h-auto object-contain max-h-96"
              />
            </Zoom>
            <h2 className="text-2xl font-semibold text-gray-800 mt-4">
              {selectedProduct.name}
            </h2>
            <p className="text-gray-600 mt-2">{selectedProduct.description}</p>
            <p className="text-xl font-bold text-indigo-600 mt-4">
              ₹{selectedProduct.price.toFixed(2)}
            </p>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default ViewAllProducts;
