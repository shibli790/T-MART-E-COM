import React from "react";
import Swal from "sweetalert2";

const AddProduct = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    Swal.fire({
      title: "Product Added!",
      text: "Your product has been added successfully.",
      icon: "success",
      confirmButtonColor: "#4f46e5",
    });
  };

  return (
    <section className="container my-12">
      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg"
      >
        <h2 className="text-2xl font-semibold text-center mb-6">Add Product</h2>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Product Name
          </label>
          <input
            type="text"
            className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter product name"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Product Image
          </label>
          <input
            type="file"
            className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
            accept="image/*"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Regular Price
          </label>
          <input
            type="number"
            className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter regular price"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Sale Price
          </label>
          <input
            type="number"
            className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter sale price"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
            rows="4"
            placeholder="Enter product description"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Category
          </label>
          <select className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500">
            <option value="">Select Category</option>
            <option value="Mascara">Mascara</option>
            <option value="Cosmetics">Cosmetics</option>
            <option value="Beauty Products">Beauty Products</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Stock Availability
          </label>
          <select className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500">
            <option value="true">In Stock</option>
            <option value="false">Out of Stock</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Tags
          </label>
          <input
            type="text"
            className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
            placeholder="e.g., Mascara, Lash Princess"
          />
        </div>

        <div className="mt-6">
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white p-3 cursor-pointer rounded-md"
          >
            Add Product
          </button>
        </div>
      </form>
    </section>
  );
};

export default AddProduct;
