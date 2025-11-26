import React, { useEffect, useState } from 'react';
import ProductCard from '../UI/ProductCard';
import axios from 'axios';

const ProductItem = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([
    'all',
    'furniture',
    'fragrances',
    'womens-bags',
    'sports-accessories',
  ]);
  const [selectedCategory, setSelectedCategory] = useState(''); // Default to 'all' if empty
  const [pagination, setPagination] = useState({
    total: 0,
    skip: 0,
    limit: 20,
  });

  useEffect(() => {
    axios
      .get(
        `https://dummyjson.com/products${
          selectedCategory && '/category/' + selectedCategory
        }?limit=${pagination.limit}&skip=${pagination.skip}`
      )
      .then(res => {
        setProducts(res.data.products);
        setPagination({
          total: res.data.total,
          skip: res.data.skip,
          limit: res.data.limit,
        });
        setLoading(false);
      });
  }, [selectedCategory, pagination.skip, pagination.limit]);

  return (
    <>
      <section className="my-[100px] bg-background">
        <div className="container">
          <div className="pt-32 pb-4">
            <div className="flex-col m-6  md:pb-16 flex justify-between items-center flex-wrap">
              <ul className=" text-center md:flex flex-wrap gap-10">
                {categories.map(item => (
                  <li key={item}>
                    <button
                      onClick={() =>
                        setSelectedCategory(item === 'all' ? '' : item)
                      }
                      className={`${
                        (item === selectedCategory ||
                          (item === 'all' && selectedCategory === '')) &&
                        'text-[#ff0037]'
                      } capitalize cursor-pointer`}
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>

              <select
                className="text-primary outline-none rounded-2xl p-2 bg-white"
                onChange={e =>
                  setPagination(prev => ({ ...prev, limit: e.target.value }))
                }
              >
                <option value="Filter">Filter</option>
                <option value="20">20</option>
                <option value="60">60</option>
                <option value="100">100</option>
              </select>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-7 gap-y-[60px]">
              {products.map(item => (
                <ProductCard key={item.id} data={item} />
              ))}
            </div>
            <div className="mt-14 w-full flex justify-center items-center gap-3">
              <button
                onClick={() =>
                  setPagination(prev => ({
                    ...prev,
                    skip: pagination.skip - pagination.limit,
                  }))
                }
                className="px-3 py-1.5 border rounded-[6px] cursor-pointer"
              >
                Pre
              </button>
              <button
                onClick={() =>
                  setPagination(prev => ({
                    ...prev,
                    skip: pagination.skip + pagination.limit,
                  }))
                }
                className="px-3 py-1.5 border rounded-[6px] cursor-pointer"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductItem;
