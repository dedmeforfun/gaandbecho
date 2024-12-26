import { useState, useEffect } from "react";
import { db } from "../utils/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import Typewriter from "typewriter-effect";
import CountUp from "react-countup";

// Modal Component
const ImageModal = ({ isOpen, closeModal, imgSrc, imgAlt }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-3xl w-full">
        <button onClick={closeModal} className="absolute top-2 right-2 text-white text-2xl">
          ×
        </button>
        <img src={imgSrc} alt={imgAlt} className="w-full h-auto" />
      </div>
    </div>
  );
};

const Homepage = () => {
  const [randomProducts, setRandomProducts] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      const querySnapshot = await getDocs(collection(db, "products"));
      const productList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      // Randomly select 5 products
      const shuffledProducts = productList.sort(() => 0.5 - Math.random());
      setRandomProducts(shuffledProducts.slice(0, 5));
    };

    fetchProducts();
  }, []);

  const handleImageClick = (imageUrl) => {
    setSelectedImg(imageUrl);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  const handleWhatsAppEnquiry = (productName) => {
    const whatsappUrl = `https://wa.me/9031446324?text=Hi,%20I%20am%20interested%20in%20the%20product%20"${productName}".%20Please%20provide%20more%20details.`;
    window.open(whatsappUrl, "_blank");
  };

  const AchievementsSection = () => (
    <section className="relative py-12 bg-gradient-to-br from-green-100 via-white to-green-50 overflow-hidden hover:bg-green-100 transition-all">
    {/* Decorative Background Elements */}
    <div className="absolute inset-0">
      <div className="absolute top-0 left-0 w-60 h-60 bg-green-300 opacity-30 rounded-full blur-xl transition-all"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-green-400 opacity-20 rounded-full blur-2xl transition-all"></div>
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-yellow-200 opacity-30 rounded-full blur-xl transition-all"></div>
      <div className="absolute -top-10 -right-10 w-48 h-48 bg-indigo-300 opacity-40 rounded-full blur-lg transition-all"></div>
    </div>
  
    <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Achievements</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            <CountUp start={0} end={10} duration={2} suffix="+" />
          </h3>
          <p className="text-lg text-gray-600">Years in Business</p>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            <CountUp start={0} end={350} duration={2.5} suffix="+" />
          </h3>
          <p className="text-lg text-gray-600">Satisfied Clients</p>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            <CountUp start={0} end={100} duration={2} suffix="+" />
          </h3>
          <p className="text-lg text-gray-600">Products in Catalogue</p>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            <CountUp start={0} end={10000} duration={2} suffix="+" />
          </h3>
          <p className="text-lg text-gray-600">Tons of Minerals Delivered</p>
        </div>
      </div>
    </div>
  </section>
  
  );
  
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Banner Section */}
      <section className="flex flex-col justify-center items-center py-16 px-6 md:py-20 bg-gray-50 shadow hover:shadow-lg transition-shadow">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-4 tracking-tight hover:text-gray-800 transition-all">
          Welcome to Shubham Enterprises
        </h1>
        <p className="text-lg md:text-xl text-center text-gray-600">
          <Typewriter
            options={{
              strings: [
                "Delivering exceptional solutions, elegantly.",
                "Your trusted partner for all mineral products",
                "Experience the forefront of priority delivery with Shubham Enterprises.",
              ],
              autoStart: true,
              loop: true,
              delay: 50,
            }}
          />
        </p>
        <button
          onClick={() => handleWhatsAppEnquiry("")}
          className="mt-6 bg-gray-800 text-white font-medium px-5 py-2.5 rounded shadow-sm hover:bg-gray-900 transition-all"
        >
          Contact Us
        </button>
      </section>

      {/* About Us Section */}
      <section className="py-12 bg-white hover:bg-gray-50 transition-all">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 hover:text-gray-600 transition-all">
            About Us
          </h2>
          <p className="text-lg text-gray-600 mb-4">
          Since 2014, Shubham Enterprises has been a trusted venture in the mineral powders industry, offering premium stone powders, manufactured powders, and materials in various sizes and sections.

We are dedicated to delivering high-quality mineral powders that add value and meet the diverse needs of our customers. Choose Shubham Enterprises for reliable solutions in the mineral powder industry and join us in building lasting partnerships.          </p>
          <p className="text-lg text-gray-600 mb-4">
            We believe in creating lasting relationships with our customers by offering products that provide true value and benefit. Join us on our journey towards excellence!
          </p>
        </div>
      </section>

     
      {/* Statistics Section */}
      <section className="py-12 bg-white hover:bg-gray-50 transition-all">
        <AchievementsSection />
      </section>

      {/* Random Products Section with Sliding Effect */}
      <section className="py-12 bg-gray-50 hover:bg-gray-100 transition-all">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Our Featured Products
        </h2>
        <div className="relative overflow-hidden">
          <div className="flex animate-slide">
            {randomProducts.map((product) => (
              <div
                key={product.id}
                className="flex-none w-full md:w-1/3 lg:w-1/4 p-4"
              >
                <div className="bg-gray-50 border border-gray-200 rounded-lg shadow hover:shadow-lg transition-shadow hover:scale-105 transform">
                  {/* Product Image */}
                  <div className="relative h-64 bg-gray-200 rounded-t-lg">
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="w-full h-full object-cover rounded-t-lg hover:opacity-80 transition-all cursor-pointer"
                      onClick={() => handleImageClick(product.imageUrl)}
                    />
                  </div>
                  {/* Product Details */}
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2 hover:text-gray-600 transition-all">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">{product.description}</p>
                    <p className="text-lg font-bold text-gray-800 mb-4">
                      ₹{product.price.toFixed(2)}
                    </p>
                    <button
                      onClick={() => handleWhatsAppEnquiry(product.name)}
                      className="bg-gray-800 text-white font-medium py-2 px-4 rounded hover:bg-gray-900 transition-all"
                    >
                      Send Enquiry
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for Image Preview */}
      <ImageModal
        isOpen={modalOpen}
        closeModal={closeModal}
        imgSrc={selectedImg}
        imgAlt="Product Image"
      />

      {/* Call to Action Section */}
      <section className="py-12 bg-gray-800 text-white text-center hover:bg-gray-900 transition-all">
  <h2 className="text-3xl font-bold mb-6">Looking for Quality Products?</h2>
  <p className="text-lg mb-6">
    Contact us today to get the best deals on high-quality products!
  </p>
  <a
    href="tel:9031446324"
    className="bg-yellow-500 text-gray-800 font-medium py-2 px-4 rounded hover:bg-yellow-400 transition-all"
  >
    Call Us Now
  </a>
</section>

    </div>
  );
};

export default Homepage;
