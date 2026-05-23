import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Loader from "../components/Loader"

const initialCartItems = [
  { id: 1, name: "Laptop", price: 50000, quantity: 1 },
  { id: 2, name: "Phone", price: 20000, quantity: 2 }
]

function Cart() {
  const [cartItems, setCartItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setCartItems(initialCartItems)
      setLoading(false)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  function increaseQty(id) {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    )
  }

  function decreaseQty(id) {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity - 1) }
          : item
      )
    )
  }

  function removeItem(id) {
    setCartItems((items) => items.filter((item) => item.id !== id))
  }

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  )

  return (
    <main className="cart-page">
      <section className="page-heading">
        <p className="eyebrow">Shopping Cart</p>
        <h1>Your Cart</h1>
        <p>Review product quantities before checkout.</p>
      </section>

      {loading ? (
        <Loader count={3} />
      ) : (
        <section className="cart-layout">
          <div className="cart-items">
            {cartItems.map((item) => (
              <article className="cart-item" key={item.id}>
                <div className="cart-item-info">
                  <h3>{item.name}</h3>
                  <p>Price: Rs. {item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                </div>

                <div className="cart-controls">
                  <button type="button" onClick={() => increaseQty(item.id)}>+</button>
                  <button type="button" onClick={() => decreaseQty(item.id)}>-</button>
                  <button type="button" onClick={() => removeItem(item.id)}>Remove</button>
                </div>
              </article>
            ))}
          </div>

          <aside className="cart-summary">
            <h2>Order Summary</h2>
            <div className="summary-row">
              <span>Total</span>
              <strong>Rs. {totalAmount}</strong>
            </div>
            <Link className="primary-button" to="/checkout">Checkout</Link>
          </aside>
        </section>
      )}
    </main>
  )
}

export default Cart
