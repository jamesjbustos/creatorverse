import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { supabase } from "../client";

const EditCreator = ({ deleteCreator }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    name: "",
    url: "",
    description: "",
    imageURL: "",
  });

  useEffect(() => {
    fetchCreator(id);
  }, [id]);

  // Use the id param to fetch the creator from the database
  // and set the formState to the creator's data
  const fetchCreator = async (id) => {
    const { data, error } = await supabase
      .from("creators")
      .select("*")
      .eq("id", id)
      .single();

    if (error) console.error("Error fetching creator: ", error);
    else setFormState(data);
  };

  // handleChange will update the formState when a user types into an input
  const handleChange = (e) => {
    setFormState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // handleSubmit will update the creator in the database
  // and navigate to the creator's page
  const handleSubmit = async (event) => {
    event.preventDefault();
    const { data, error } = await supabase
      .from("creators")
      .update(formState)
      .eq("id", id);

    if (error) {
      console.error("Error updating creator: ", error);
    } else {
      console.log("Creator updated: ", data);
      navigate(`/creator/${id}`);
    }
  };

  // handleDelete will delete the creator from the database and navigate to the home page
  const handleDelete = async (event) => {
    event.preventDefault();
    await deleteCreator(id);
    navigate("/");
  };

  return (
    <div className="Creator-form">
      <h1>✍️ Edit a Creator ! </h1>
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
          className="form-input"
        />
        <button type="submit">Update Creator</button>
        <button onClick={handleDelete}>Delete Creator</button>
      </form>
    </div>
  );
};

export default EditCreator;
