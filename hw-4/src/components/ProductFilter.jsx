import "./ProductFilter.css"

const ProductFilter = ({ onChangeCategory }) => {

    const handleChange = (e) => {
        onChangeCategory(e.target.value);
    };

    return (
        <div className="filter-wrapper">
            <select onChange={handleChange}>
                <option value="all">All</option>
                <option value="electronics">Electronics</option>
                <option value="clothes">Clothes</option>
                <option value="books">Books</option>
            </select>
        </div>
    );
};

export default ProductFilter;
