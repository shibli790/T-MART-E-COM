import React from 'react'
import { Link } from 'react-router'

const ProductCard = ({data}) => {
  return (
    <>
      <div className="relative cursor-pointer rounded-2xl shadow-2xl hover:translate-y-[-5px] transition-all duration-300 bg-[#FFFFFF]">
        <Link to={`/shop/${data.id}`}>
          <img className="w-full" src={data?.thumbnail} alt={data?.title} />
        </Link>
        <div>
          <p className="text-center text-base text-secondary py-4">
            <Link to={`/shop/${data.id}`}>{data?.title}</Link>
          </p>
          <div className="flex justify-center gap-2.5">
            <p className="text-center text-base text-product ">
              {' '}
              <del>{data?.price + 45}</del>
            </p>
            <p className="text-center text-base text-bagde">{data?.price}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCard
