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
    <div className=" pt-50 flex justify-around flex-wrap gap-8">
      <div className="w-80">
        <h1 className="font-bold text-4xl pb-6">Cart</h1>
        {cartItems.length === 0 ? (
          <p>Your cart is empty!</p>
        ) : (
          cartItems.map((item, idx) => (
            <div
              className="flex gap-6 p-2 justify-center items-center border-2 border-black rounded-xl mb-4"
              key={idx}
            >
              <img className="size-20 rounded" src={item.image} alt="" />
              <div className="flex flex-col gap-4 items-start">
                <div>
                  <div>{item.title}</div>
                  <div>₹{item.discountedPrice}</div>
                </div>
                <div className="flex gap-5">
                  <button
                    onClick={() => decreaseQuantity(item.title)}
                    className="text-white bg-black p-1 px-2 rounded"
                  >
                    -
                  </button>
                  <div className="p-1 px-2 rounded border-2">
                    {item.quantity}
                  </div>
                  <button
                    onClick={() => increaseQuantity(item.title)}
                    className="text-white bg-black p-1 px-2 rounded"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => removeFromCart(item.title)}
                  className="bg-black text-white px-5 py-2 rounded-lg"
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="flex flex-col gap-5">
        <h1 className="font-bold text-4xl">Bill</h1>
        <div className="w-80 text-2xl">
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
        </div>
        <div>
          <div className="flex justify-between">
            <h1 className="font-bold text-4xl">Total</h1>
            <div className="text-4xl">₹{total}</div>
          </div>
        </div>
        <button className="bg-black text-white p-3 rounded-lg">Checkout</button>
      </div>
    </div>
  );
}
