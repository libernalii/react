import "./ProductCard.css"

const ProductCard = ({ product }) => {
    const { id, title, price, category, description } = product;

    const handleAddToCart = () => {
        console.log(`Продукт з id: ${id} додано в кошик`);
    };

    return (
        <div className="product-card">

            <h3>{title}</h3>

            <p><b>Ціна:</b> {price} грн</p>
            <p><b>Категорія:</b> {category}</p>
            <p>{description}</p>

            <button onClick={handleAddToCart}>
                Add to cart
            </button>

        </div>
    );
};

export default ProductCard;
