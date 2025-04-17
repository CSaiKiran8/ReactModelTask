import React from 'react'

export const CartModal = ({ cart, closeModal, removeItem }) => {
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
      <div className="bg-white p-5 rounded-lg shadow-lg w-96 max-w-full">
        <h2 className="text-xl font-bold mb-4">Cart Items ({cart.reduce((total, item) => total + item.quantity, 0)})</h2>
        {cart.length === 0 ? (
          <p className="text-gray-600 text-center">Cart is empty</p>
        ) : (
          <div className="space-y-3">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center justify-between border-b pb-2">
                <div className="flex items-center gap-2">
                  <img src={item.image} alt={item.title} className="h-12 w-12 object-contain" />
                  <span className="font-semibold">{item.title}</span>
                  <span>Price: ${item.price} Quantity: ({item.quantity})</span> 
                  <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
                </div>
                <button className="text-sm bg-red-600 text-red-600 px-2 py-1 rounded hover:bg-red-700 transition" onClick={() => removeItem(item.id)}>Remove</button>
              </div>
            ))}
            <div className="text-right font-bold pt-2">
              SubTotal: ${totalPrice}
            </div>
          </div>
        )}
        <button className="mt-4 px-4 py-2 bg-gray-500 text-red-600 rounded w-full shadow hover:bg-gray-600 transition" onClick={closeModal}>
          Close
        </button>
      </div>
    </div>
  );
};