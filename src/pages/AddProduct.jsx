import { useState } from "react"
import axios from "axios"

function AddProduct() {

  const [product, setProduct] = useState({
    name: "",
    price: "",
    image: "",
    category: "",
    description: ""
  })

  const handleChange = (e) => {

    setProduct({
      ...product,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {

    e.preventDefault()

    try {

      await axios.post(
        "http://localhost:5000/api/products",
        product
      )

      alert("Product Added ✅")

      setProduct({
        name: "",
        price: "",
        image: "",
        category: "",
        description: ""
      })

    } catch (err) {

      console.error(err)

      alert("Failed to add product ❌")
    }
  }

  return (

    <div>

      <h1>Add New Catalog Product</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={product.name}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="number"
          name="price"
          placeholder="Price"
          value={product.price}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={product.image}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="text"
          name="category"
          placeholder="Category"
          value={product.category}
          onChange={handleChange}
        />

        <br /><br />

        <textarea
          name="description"
          placeholder="Description"
          value={product.description}
          onChange={handleChange}
        />

        <br /><br />

        <button type="submit">
          Add Product
        </button>

      </form>

    </div>
  )
}

export default AddProduct
