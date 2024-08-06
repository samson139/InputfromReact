import { useState } from "react";
import "./styles.css";

export default function App() {
  const [user, setUser] = useState({
    name: "",
    age: "",
    adult: "false",
    favfood: "",
    favplace: "",
  });
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newUser = { ...user, [name]: type == "checkbox" ? checked : value };
    setUser(newUser);
  };
  return (
    <div className="App">
      <form>
        <div className="oneInput">
          <label for="name">Name</label>
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
          />
        </div>
        <div className="oneInput">
          <label for="age">Age</label>
          <input
            type="text"
            name="age"
            value={user.age}
            onChange={handleChange}
          />
        </div>
        <div className="oneInput">
          <label for="adult">Adult</label>
          <input
            type="checkbox"
            name="adult"
            checked={user.adult}
            onChange={handleChange}
          />
        </div>

        <div className="oneInput">
          <label for="favfood">Favourite Food : </label>
          <select name="favfood" id="favfood" onChange={handleChange}>
            <option value="">Choose your favourite food</option>
            <option value={"biryani"}>biryani</option>
            <option value={"paneer"}>paneer</option>
            <option value={"fries"}>fries</option>
          </select>
        </div>
        <div>
          <label for="india">India</label>
          <input
            type="radio"
            id="india"
            name="favplace"
            value="india"
            onChange={handleChange}
          />
          <label for="usa">usa</label>
          <input
            type="radio"
            id="usa"
            name="favplace"
            value="us"
            onChange={handleChange}
          />
          <label for="uk">uk</label>
          <input
            type="radio"
            id="uk"
            name="favplace"
            value="uk"
            onChange={handleChange}
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}
