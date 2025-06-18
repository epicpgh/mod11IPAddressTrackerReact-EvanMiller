
import React from "react";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;   
  inStock: boolean;}

  interface ProductDisplayProps {
  product: Product;
  showDescription: boolean;
  showStockStatus: boolean;
  onAddToCart: (productId: string) => void;
  children: React.ReactNode;}



const ProductDisplay: React.FC<ProductDisplayProps> = ({
  

  product, 
  showDescription, 
  showStockStatus, 
  onAddToCart, 
  children }) => {
    
    
    return(
      <div className ="bg-white shadow-md rounded-lg p-6 max-w-sm mx-auto">
        {product.imageUrl && (
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-48 object-cover rounded-t-lg mb-4"  
          />
        )}
        {children}
        <div></div>
      
        <h3 className= "text-lg font-bold">{product.name}</h3>
        <p className= "text-lg text-gray-600 mb-4">
          ${product.price.toFixed(2)}
        </p>
        {showDescription && (
          <p className="text-gray-700 mb-2">{product.description}</p>
        )}

        {showStockStatus && (
          <p className="text-sm text-gray-500">
            {product.inStock ? "In Stock" : "Out of Stock"}
          </p>
        )}
        <p>
          {product.inStock ? "In Stock" : "Out of Stock"}
        </p>
        <button className ="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => onAddToCart(product.id)}>
          Add to Cart
        </button>
      
      </div>
    )

}







export default ProductDisplay;