import { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://real-time-amazon-data.p.rapidapi.com/search",
      params: {
        query: "Phone",
        page: "1",
        country: "US",
        sort_by: "RELEVANCE",
        product_condition: "ALL",
        is_prime: "false",
        deals_and_discounts: "NONE",
      },
      headers: {
        "x-rapidapi-key": import.meta.env.VITE_API_KEY,
        "x-rapidapi-host": "real-time-amazon-data.p.rapidapi.com",
      },
    };

    const fetchProducts = async () => {
      try {
        const response = await axios.request(options);
        setProducts(response.data.data.products);
        console.log(response.data.data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <header className="text-center py-4">
        <h1 className="text-4xl font-bold text-gray-800">Amazon Products</h1>
      </header>
      <main className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
              <div className="p-3 h-40 w-full flex item-center justify-center">
                <img
                  src={product.product_photo}
                  alt={product.product_title}
                  className="object-coverrounded-t-lg"
                />
              </div>
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800 line-clamp-1 ">
                  {product.product_title}
                </h2>
                <p className="text-gray-600 mt-2 line-clamp-3">
                  {product.product_title}
                </p>
                <div className="mt-4">
                  <span className="text-xl font-bold text-gray-800">
                    ${product.product_original_price}
                  </span>
                </div>
                <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default App;
