import { useState } from "react"
import toast from "react-hot-toast"
import API from "../api"

function AddProduct() {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    image: "",
    category: "",
    description: ""
  })

  function handleChange(event) {
    setProduct({
      ...product,
      [event.target.name]: event.target.value
    })
  }

  async function handleSubmit(event) {
    event.preventDefault()

    try {
      await API.post("/products", product)
      toast.success("Product added")

      setProduct({
        name: "",
        price: "",
        image: "",
        category: "",
        description: ""
      })
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to add product")
    }
  }

  return (
    <main className="settings-page">
      <section className="dashboard-heading">
        <div>
          <p className="eyebrow">Catalog</p>
          <h1>Add Product</h1>
          <p>Create a product listing for the storefront.</p>
        </div>
      </section>

      <form className="settings-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Product Name</label>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Product Name"
          value={product.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="price">Price</label>
        <input
          id="price"
          type="number"
          name="price"
          placeholder="Price"
          value={product.price}
          onChange={handleChange}
          required
        />

        <label htmlFor="image">Image URL</label>
        <input
          id="image"
          type="url"
          name="image"
          placeholder="Image URL"
          value={product.image}
          onChange={handleChange}
        />

        <label htmlFor="category">Category</label>
        <input
          id="category"
          type="text"
          name="category"
          placeholder="Category"
          value={product.category}
          onChange={handleChange}
        />

        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          placeholder="Description"
          value={product.description}
          onChange={handleChange}
        />

        <div className="settings-actions">
          <button type="submit">Add Product</button>
        </div>
      </form>
    </main>
  )
}

export default AddProduct
