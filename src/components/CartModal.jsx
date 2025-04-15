import React from 'react'

export const CartModal = ({ cart, closeModal, removeFromCart }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
      <div className="bg-white p-5 rounded-lg shadow-lg w-96 max-w-full">
        <h2 className="text-xl font-bold mb-4">Cart Items</h2>
        {cart.length === 0 ? (
          <p className="text-gray-600 text-center">Cart is empty</p>
        ) : (
          <div className="space-y-3">
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between items-center border-b pb-2 gap-2">
              <img src={item.image} alt={item.title} className="h-12 w-12 object-contain" />
              <span className="flex-1 text-sm">{item.title} (x{item.quantity})</span>
              <button className="text-red-500 text-xs" onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}
          </div>
        )}
        <button className="mt-4 px-4 py-2 bg-gray-500 text-blue-500 rounded w-full shadow hover:bg-gray-600 transition" onClick={closeModal}>
          Close
        </button>
      </div>
    </div>
  );
