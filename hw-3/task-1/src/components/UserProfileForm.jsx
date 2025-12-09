import { useState } from "react";
import "./UserProfileForm.css"

const UserProfileForm = () => {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [country, setCountry] = useState("Ukraine");

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === "name") setName(value);
        if (name === "age") setAge(value);
        if (name === "country") setCountry(value);
    };

    const handleClear = () => {
        setName("");
        setAge("");
        setCountry("Ukraine");
    };

    return (
        <div className="profile-wrapper">
            <form className="profile-form">
                
                {/* Name */}
                <input
                    name="name"
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={handleChange}
                />
                <p>Name: {name || "---"}</p>

                {/* Age */}
                <input
                    name="age"
                    type="number"
                    placeholder="Age"
                    value={age}
                    onChange={handleChange}
                />
                <p>Age: {age || "---"}</p>

                {/* Country */}
                <select
                    name="country"
                    value={country}
                    onChange={handleChange}
                >
                    <option value="Ukraine">Ukraine</option>
                    <option value="Poland">Poland</option>
                    <option value="USA">USA</option>
                    <option value="Germany">Germany</option>
                </select>

                <p>Country: {country}</p>

                {/* Clear button */}
                <button className="clear-btn" type="button" onClick={handleClear}>
                    Очистити форму
                </button>
            </form>

            {/* Summary */}
            <h3 style={{ marginTop: "20px" }}>
                Hello, {name || "Anonymous"} from {country}!{" "}
                {age && `You are ${age} years old.`}
            </h3>
        </div>
    );
};

export default UserProfileForm;
