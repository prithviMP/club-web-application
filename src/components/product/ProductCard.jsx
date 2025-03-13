import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faHeartSolid, faStar } from '@fortawesome/free-solid-svg-icons';

const ProductCard = ({ product }) => {
  const {
    documentId,
    name,
    price,
    rating,
    product_image,
    brand,
    in_stock
  } = product;

  const mainImage = product_image?.[0]?.url || '/placeholder-product.jpg';

  return (
    <div className="group">
      <Link to={`/product/${documentId}`} className="block">
        <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-900">
          <img
            src={mainImage}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
          {!in_stock && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <span className="text-white text-sm font-medium">Out of Stock</span>
            </div>
          )}
          <button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors">
            <FontAwesomeIcon icon={faHeart} />
          </button>
        </div>
        
        <div className="mt-3 space-y-1">
          {brand && (
            <p className="text-xs text-gray-400">{brand.brand_name}</p>
          )}
          <h3 className="text-sm font-medium text-white group-hover:text-primary transition-colors line-clamp-2">
            {name}
          </h3>
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold">₹{price.toLocaleString()}</p>
            {rating && (
              <div className="flex items-center text-xs">
                <FontAwesomeIcon icon={faStar} className="text-yellow-400 mr-1" />
                <span>{rating}</span>
              </div>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;