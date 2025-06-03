import React from "react";
import { useCart } from "./CartContext";

export default function Cart() {
  const {
    cartItems,
    getCartTotal,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  const subtotal = getCartTotal();
  const shipping = subtotal > 0 ? 50 : 0;
  const platformFee = subtotal > 0 ? 30 : 0;
  const total = subtotal + shipping + platformFee;

  return (
    <div className="pt-50 px-4 pb-20 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      
        <div className="w-full max-w-md mx-auto lg:max-w-full">
          <h1 className="font-bold text-4xl mb-6">Cart</h1>
          {cartItems.length === 0 ? (
            <p className="text-center">Your cart is empty!</p>
          ) : (
            cartItems.map((item, idx) => (
              <div
                key={idx}
                className="flex gap-4 p-3 border-2 border-black rounded-xl mb-5 items-center"
              >
                <img
                  className="w-20 h-20 rounded object-cover"
                  src={item.image}
                  alt={item.title}
                />
                <div className="flex flex-col gap-3 flex-1">
                  <div>
                    <div className="font-semibold text-lg">{item.title}</div>
                    <div className="text-gray-700 text-base">
                      ₹{item.discountedPrice}
                    </div>
                  </div>
                  <div className="flex gap-4 items-center">
                    <button
                      onClick={() => decreaseQuantity(item.title)}
                      className="text-white bg-black px-3 py-1 rounded"
                    >
                      -
                    </button>
                    <div className="px-3 py-1 border-2 rounded">{item.quantity}</div>
                    <button
                      onClick={() => increaseQuantity(item.title)}
                      className="text-white bg-black px-3 py-1 rounded"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.title)}
                    className="bg-black text-white px-6 py-2 rounded-lg mt-1 w-fit"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        
        <div className="w-full max-w-md mx-auto lg:max-w-full">
          <h1 className="font-bold text-4xl mb-6">Bill</h1>
          <div className="w-full text-xl space-y-5">
            <div className="flex justify-between">
              <div>SubTotal</div>
              <div>₹{subtotal}</div>
            </div>
            <div className="flex justify-between">
              <div>Shipping</div>
              <div>₹{shipping}</div>
            </div>
            <div className="flex justify-between">
              <div>Platform Fee</div>
              <div>₹{platformFee}</div>
            </div>
            <div className="border-t pt-4 flex justify-between font-bold text-3xl">
              <div>Total</div>
              <div>₹{total}</div>
            </div>
          </div>
          <button className="mt-8 bg-black text-white w-full py-3 rounded-lg text-xl hover:bg-gray-900 transition">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
