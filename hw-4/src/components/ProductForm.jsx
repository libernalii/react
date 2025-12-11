import "./ProductForm.css"
import { useState } from "react"

const ProductForm = ({ onAddProduct }) => {
    const initialState = {
        title: "",
        price: "",
        category: "electronics",
        description: ""
    }

    const [product, setProduct] = useState(initialState)

    const handleChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value })
    }

    const handleAdd = (e) => {
        e.preventDefault();

        const { title, price, category, description } = product;

        if (!title || !price || !category || !description) {
            alert("Усі поля мають бути заповнені!");
            return;
        }

        if (title.length < 3 || title.length > 50) {
            alert("Назва має бути від 3 до 50 символів!");
            return;
        }

        const priceNum = Number(price);
        if (isNaN(priceNum) || priceNum <= 0) {
            alert("Ціна має бути числом більше 0!");
            return;
        }

        if (description.length < 10 || description.length > 300) {
            alert("Опис має бути від 10 до 300 символів!");
            return;
        }

        const newProduct = {
            id: crypto.randomUUID(),
            title,
            price: priceNum,
            category,
            description
        };

        onAddProduct(newProduct);

        setProduct(initialState);
    };

    return (
        <div className="product-wrapper">
            <form className="product-form">
                <h3 className="section-title">Додавання продукту</h3>

                <input
                    name="title"
                    type="text"
                    placeholder="Title"
                    value={product.title}
                    onChange={handleChange}
                />
                <input
                    name="price"
                    type="text"
                    placeholder="Price"
                    value={product.price}
                    onChange={handleChange}
                />
                <select
                    name="category"
                    value={product.category}
                    onChange={handleChange}
                >
                    <option value="electronics">Electronics</option>
                    <option value="clothes">Clothes</option>
                    <option value="books">Books</option>
                </select>

                <textarea
                    name="description"
                    placeholder="About product"
                    value={product.description}
                    onChange={handleChange}
                />

                <button
                    type="submit"
                    className="btn add-btn"
                    onClick={handleAdd}
                >
                    Додати товар
                </button>
            </form>
        </div>
    )
}

export default ProductForm
