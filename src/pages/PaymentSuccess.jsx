import { useEffect } from "react"
import toast from "react-hot-toast"
import API from "../api"

function PaymentSuccess() {
  useEffect(() => {
    async function createOrder() {
      const orderData = {
        orderId: `ORDER-${Date.now()}`,
        totalAmount: 1000,
        status: "Pending"
      }

      try {
        await API.post("/orders", orderData)
        toast.success("Order saved")
      } catch (error) {
        toast.error(error.response?.data?.message || "Error saving order")
      }
    }

    createOrder()
  }, [])

  return <h2>Payment Successful</h2>
}

export default PaymentSuccess
