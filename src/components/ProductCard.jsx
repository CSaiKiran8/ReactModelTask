import React from 'react'

export const ProductCard = ({ product, cart, addToCart, updateQuantity }) => {

  const cartItem = cart.find((item) => item.id === product.id);
  
  return (
    <div className="border p-4 rounded-lg shadow-md bg-white flex flex-col items-center">
      <img src={product.image} alt={product.title} className="h-40 object-contain mx-auto" />
      <h2 className="text-lg font-bold mt-2 text-center">{product.title}</h2>
      <p className="text-gray-600 font-semibold mt-1">${product.price}</p>
      {cartItem ? (
        <div className="mt-2 w-full">
          <p className="text-green-600 font-bold text-center">Added to Cart</p>
          <div className="flex items-center justify-center mt-2 gap-2">
            <button className="px-3 py-1 bg-gray-300 rounded" onClick={() => updateQuantity(product.id, -1)}>-</button>
            <span className="font-bold">{cartItem.quantity}</span>
            <button className="px-3 py-1 bg-gray-300 rounded" onClick={() => updateQuantity(product.id, 1)}>+</button>
          </div>
        </div>
      ) : (
        <button className="mt-3 px-4 py-2 bg-blue-500 text-green-600 rounded shadow hover:bg-blue-600 transition" onClick={() => addToCart(product)}>
          Add to Cart
        </button>
      )}
    </div>
  );
};