import { useState } from "react";
import { db, storage } from "../../utils/firebaseConfig";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    if (!name || !description || !price || !image) {
      setError("Please fill out all fields and select an image.");
      return;
    }

    setLoading(true);
    setError("");
    try {
      const productsCollection = collection(db, "products");
      const snapshot = await getDocs(productsCollection);

      if (snapshot.empty) {
        console.log("Creating a new 'products' collection as it doesn't exist.");
      }

      // Upload image to Firebase Storage
      const storageRef = ref(storage, `products/${image.name}`);
      await uploadBytes(storageRef, image);
      const imageUrl = await getDownloadURL(storageRef);

      // Add product details to Firestore
      await addDoc(productsCollection, {
        name,
        description,
        price: parseFloat(price),
        imageUrl,
        createdAt: new Date(),
      });

      // Reset form fields
      setName("");
      setDescription("");
      setPrice("");
      setImage(null);

      alert("Product added successfully!");
    } catch (error) {
      console.error("Error adding product:", error);
      setError("Failed to add product. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full sm:w-96">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Add New Product</h2>
        
        {/* Error Message */}
        {error && (
          <div className="text-red-600 text-sm mb-4">
            <p>{error}</p>
          </div>
        )}

        {/* Product Name Input */}
        <div className="mb-4">
          <label htmlFor="name" className="text-gray-600 font-semibold">Product Name</label>
          <input
            id="name"
            type="text"
            placeholder="Enter product name"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {/* Product Description Input */}
        <div className="mb-4">
          <label htmlFor="description" className="text-gray-600 font-semibold">Description</label>
          <textarea
            id="description"
            placeholder="Enter product description"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            rows="4"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        {/* Product Price Input */}
        <div className="mb-4">
          <label htmlFor="price" className="text-gray-600 font-semibold">Price</label>
          <input
            id="price"
            type="number"
            placeholder="Enter product price"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        {/* Image Upload Input */}
        <div className="mb-4">
          <label htmlFor="image" className="text-gray-600 font-semibold">Product Image</label>
          <input
            id="image"
            type="file"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setImage(e.target.files[0])}
          />
          
          {/* Image Preview */}
          {image && (
            <div className="mt-4">
              <p className="text-gray-600">Selected Image:</p>
              <img
                src={URL.createObjectURL(image)}
                alt="Preview"
                className="w-32 h-32 object-cover rounded-md mt-2"
              />
            </div>
          )}
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          className={`w-full py-3 mt-4 rounded-lg text-white ${
            loading ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"
          } transition duration-300`}
          disabled={loading}
        >
          {loading ? "Uploading..." : "Add Product"}
        </button>
      </div>
    </div>
  );
};

export default AddProduct;
