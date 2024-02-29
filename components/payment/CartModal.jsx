"use client";
import Image from "next/image";
import { FaTimes } from "react-icons/fa";
import { useSelector } from "react-redux";
import { removeFromCart } from "../redux/slices/cartSlice";
import { useDispatch } from "react-redux";
import useStripeCheckout from "../hooks/useStripeCheckout";

const CartModal = ({ showCart, setShowCart }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const handleCheckout = useStripeCheckout();

  return (
    showCart && (
      <div className="fixed inset-0 z-50 bg-black bg-opacity-40 overflow-hidden">
        <div className="flex justify-end h-screen p-4 text-center sm:p-0">
          <div className="relative w-full p-4 max-w-[400px] bg-white rounded-none shadow-xl">
            <div className="flex justify-between w-full border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">
                Shopping Cart
              </h2>
              <button onClick={() => setShowCart(false)}>
                <FaTimes color="black" />
              </button>
            </div>
            <div className="flex flex-col justify-between h-full overflow-auto max-h-screen pr-3">
              <div className="flex-1">
                <div className="divide-y divide-gray-200">
                  {cartItems?.length === 0 ? (
                    <h1 className="text-lg py-6 justify-center items-center z-50 text-center">
                      You don't have any items on cart
                    </h1>
                  ) : (
                    cartItems?.map((entry) => (
                      <li key={entry.id} className="flex py-6">
                        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                          <img
                            src={entry.imageUrl}
                            alt="Product image"
                            className="w-full h-full"
                          />
                        </div>
                        <div className="ml-4 flex flex-1 flex-col">
                          <div>
                            <div className="flex justify-between text-base font-medium text-gray-900">
                              <h3 className="text-start line-clamp-1">
                                {entry.name}
                              </h3>
                              <p className="ml-4">${entry.price}</p>
                            </div>
                            <p className="mt-1 text-sm text-start text-gray-500 line-clamp-2">
                              {entry.description}
                            </p>
                          </div>

                          <div className="flex flex-1 items-end justify-between text-sm">
                            <p className="text-gray-500">
                              QTY: {entry.quantity}
                            </p>

                            <div className="flex">
                              <button
                                type="button"
                                onClick={() => dispatch(removeFromCart(entry))}
                                className="font-medium text-indigo-600 hover:text-indigo-500"
                              >
                                Remove
                              </button>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))
                  )}
                </div>
              </div>

              <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                <div className="flex justify-between text-base font-semibold text-gray-900">
                  <p>Subtotal:</p>${totalPrice.toFixed(2)}
                </div>
                <p className="text-left mt-2 text-sm text-gray-500">
                  Shipping and taxes calculated at checkout.
                </p>
                <div className="mt-6">
                  <button
                    disabled={cartItems.length === 0}
                    onClick={() => handleCheckout(cartItems)}
                    className={`${
                      cartItems.length === 0 && "bg-gray-400 cursor-not-allowed"
                    } w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 focus:outline-none`}
                  >
                    Checkout
                  </button>
                </div>

                <div className="mt-6 flex justify-center text-sm text-gray-500">
                  <p>
                    OR{" "}
                    <button
                      type="button"
                      onClick={() => setShowCart(false)}
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      Continue Shopping
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default CartModal;
