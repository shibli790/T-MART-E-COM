import 'react-image-gallery/styles/css/image-gallery.css';
import axios from 'axios';
import { FaRegStar } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import Banner from './UI/Banner';
import ImageGallery from 'react-image-gallery';
import { useParams } from 'react-router';
import Swal from 'sweetalert2';

const ProductDetails = () => {
  const [productData, setProductData] = useState({});
  const [images, setImages] = useState([]);
  const [up, setUp] = useState(1);
  const params = useParams();

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${params.id}`).then(res => {
      setProductData(res.data);
      const imgData = res.data.images.map(item => ({
        original: item,
        thumbnail: item,
      }));
      setImages(imgData);
    });
  }, []);

  const handleAddCard = () => {
    const currentCart = JSON.parse(localStorage.getItem('cart')) || [];
    const newProduct = {
      productData,
      quantity: up,
    };
    currentCart.push(newProduct);
    localStorage.setItem('cart', JSON.stringify(currentCart));

    Swal.fire({
      title: 'Product Added!',
      text: 'Your product has been added successfully.',
      icon: 'success',
      confirmButtonColor: '#4f46e5',
    });
  };

  return (
    <>
      <Banner title="Product Details" path="Home" />
      <section className="mt-[120px] mb-[100px]">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {/* Image Gallery Section */}
            <div className="w-full">
              <ImageGallery
                items={images}
                thumbnailPosition="left"
                showPlayButton={false}
                showFullscreenButton={false}
              />
            </div>

            {/* Product Details Section */}
            <div className="w-full md:w-[540px]">
              <h2 className="text-3xl font-medium text-lg">
                {productData.title}
              </h2>
              <h1 className="flex gap-2 items-center text-amber-400">
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
                <p className="text-primary">{productData.rating}</p>
              </h1>
              <p className="pt-6 pb-10 text-secondary text-sm md:text-base">
                {productData.description}
              </p>
              <div className="flex gap-3.5 pb-4">
                <h2 className="text-xl text-secondary">
                  <del>{productData.price + 50}</del>
                </h2>
                <h2 className="text-3xl text-bagde">{productData.price}</h2>
              </div>
              <div className="flex gap-2.5">
                <h2 className="pb-3">Stock</h2>
                <div>{productData?.stock}</div>
              </div>
              <div>
                <h2 className="pb-3 text-xl">Size</h2>
                <div className="flex gap-3">
                  <p>XL</p>
                  <p>M</p>
                  <p>ML</p>
                  <p>LM</p>
                  <p>XXL</p>
                </div>
              </div>
              <div className="py-8 flex gap-4 text-xl">
                <p>Quantity :</p>
                <button onClick={() => setUp(up - 1)}>-</button>
                <p>{up}</p>
                <button onClick={() => setUp(up + 1)}>+</button>
              </div>
              <div className="flex items-center gap-4 text-secondary">
                <button className="btn hover:bg-amber-300">Buy Product</button>
                <button
                  onClick={handleAddCard}
                  className="btn hover:bg-amber-300"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
