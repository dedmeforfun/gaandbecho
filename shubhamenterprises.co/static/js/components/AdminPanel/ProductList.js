import { useState, useEffect } from "react";
import { db } from "../../utils/firebaseConfig";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import AddProduct from "./AddProduct";

const ProductList = () => {
  const [products, setProducts] = useState([]);

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

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      await deleteDoc(doc(db, "products", id));
      setProducts(products.filter((product) => product.id !== id));
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Admin Panel</h1>
      <AddProduct />
      <h2 className="text-xl font-bold mt-8 mb-4">Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id} className="mb-4">
            <div className="flex justify-between">
              <div>
                <h3 className="font-bold">{product.name}</h3>
                <p>{product.description}</p>
                <p className="text-blue-600">₹{product.price}</p>
              </div>
              <button
                onClick={() => handleDelete(product.id)}
                className="bg-red-500 text-white px-4 py-2 rounded-md"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
