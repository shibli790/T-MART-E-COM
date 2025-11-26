import { useEffect, useState } from 'react';
import { FcViewDetails } from 'react-icons/fc';
import { MdDeleteForever } from 'react-icons/md';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';

const AddCard = () => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    const groupedCart = savedCart.reduce((acc, item) => {
      const existingProduct = acc.find(
        product => product.productData?.id === item.productData?.id
      );
      if (existingProduct) {
        existingProduct.quantity += item.quantity;
      } else {
        acc.push(item);
      }
      return acc;
    }, []);

    setCart(groupedCart);
  }, []);

  const handleDelete = id => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(result => {
      if (result.isConfirmed) {
        const updatedCart = cart.filter(item => item.productData?.id !== id);

        localStorage.setItem('cart', JSON.stringify(updatedCart));
        setCart(updatedCart);

        Swal.fire({
          title: 'Deleted!',
          text: 'Your item has been deleted.',
          icon: 'success',
        });
      }
    });
  };

  const handleViewDetails = id => {
    navigate(`/shop/${id}`);
  };

  if (cart.length === 0) {
    return (
      <section className="container my-12">
        <h2 className="text-3xl font-semibold mb-6">My Cart</h2>
        <table className="w-full container text-left">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-3">Image</th>
              <th className="p-3">Product</th>
              <th className="p-3">Price</th>
              <th className="p-3">Qty</th>
              <th className="p-3">Total</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td colSpan="6" className="text-center p-6 text-gray-500 text-lg">
                Cart is empty
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    );
  }

  return (
    <section className="container my-12">
      <h2 className="text-3xl font-semibold mb-6">My Cart</h2>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-3">Image</th>
              <th className="p-3">Product</th>
              <th className="p-3">Price</th>
              <th className="p-3">Qty</th>
              <th className="p-3">Total</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>

          <tbody>
            {cart.map((item, index) => (
              <tr key={index} className="border-b">
                <td className="p-3">
                  {item.productData?.thumbnail && (
                    <img
                      src={item.productData.thumbnail}
                      alt={item.productData.title}
                      className="w-20 rounded-2xl bg-[#ebecec]"
                    />
                  )}
                </td>

                <td className="p-3">{item.productData?.title}</td>
                <td className="p-3">${item.productData?.price}</td>
                <td className="p-3">{item.quantity}</td>
                <td className="p-3">
                  ${(item.productData?.price * item.quantity).toFixed(2)}
                </td>

                <td className="p-3">
                  <button
                    onClick={() => handleDelete(item.productData?.id)}
                    className="underline text-red-500 flex cursor-pointer items-center px-4 py-1 rounded-2xl"
                  >
                    Delete <MdDeleteForever />
                  </button>
                  <button
                    onClick={() => handleViewDetails(item.productData?.id)}
                    className="underline text-blue-500 cursor-pointer flex items-center px-4 py-1 rounded-2xl"
                  >
                    Details <FcViewDetails />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default AddCard;
