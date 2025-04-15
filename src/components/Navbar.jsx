import React from 'react'

export const Navbar = ({ cartCount, toggleCart }) => (
    <div className="flex justify-between items-center p-4 bg-blue-700 text-white shadow-md">
      <h1 className="text-2xl font-bold">Fake Store</h1>
      <button className="relative p-2 bg-white text-blue-700 rounded-full shadow-md" onClick={toggleCart}>
        🛒
        {cartCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-xs text-white rounded-full px-2 py-1">
            {cartCount}
          </span>
        )}
      </button>
    </div>
  );
