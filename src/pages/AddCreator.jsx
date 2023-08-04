import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../client";

const AddCreator = ({ fetchCreators }) => {
  // formState will hold the values of the form inputs
  const [formState, setFormState] = useState({
    name: "",
    url: "",
    description: "",
    imageURL: "",
  });
  const navigate = useNavigate();

  // handleChange will update the formState when a user types into an input
  const handleChange = (e) => {
    setFormState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // handleSubmit will insert the new creator into the database
  const handleSubmit = async (event) => {
    event.preventDefault();
    const { data, error } = await supabase.from("creators").insert([formState]);

    if (error) {
      console.error("Error inserting new creator: ", error);
    } else {
      console.log("New creator added: ", data);
      fetchCreators();
      navigate("/");
    }
  };

  return (
    <div className="Creator-form">
      <h1>💡 Add a New Creator ! </h1>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formState.name}
          onChange={handleChange}
          required
        />
        <label>URL:</label>
        <input
          type="text"
          id="url"
          name="url"
          value={formState.url}
          onChange={handleChange}
          required
        />
        <label>Description:</label>
        <textarea
          id="description"
          name="description"
          value={formState.description}
          onChange={handleChange}
          required
        />
        <label>Image URL (optional):</label>
        <input
          type="text"
          id="imageURL"
          name="imageURL"
          value={formState.imageURL}
          onChange={handleChange}
        />
        <button type="submit">Add Creator</button>
      </form>
    </div>
  );
};

export default AddCreator;
