import { useRoutes } from "react-router-dom";
import ShowCreators from "./pages/ShowCreators";
import EditCreator from "./pages/EditCreator";
import AddCreator from "./pages/AddCreator";
import ViewCreator from "./pages/ViewCreator";
import Header from "./components/Header";
import Footer from "./components/Footer";

import { supabase } from "./client";
import { useState, useEffect } from "react";

function App() {
  // State to hold list of creators
  const [creators, setCreators] = useState([]);

  // Fetch creators data when component mounts
  useEffect(() => {
    fetchCreators();
  }, []);

  // Function to fetch creators from the database
  const fetchCreators = async () => {
    const { data, error } = await supabase.from("creators").select("*");

    if (error) console.log("Data fetch error: ", error);
    else setCreators(data);
  };

  // Function to delete a creator from the database
  const deleteCreator = async (id) => {
    const { error } = await supabase.from("creators").delete().eq("id", id);

    if (error) {
      console.error("Error deleting creator: ", error);
    } else {
      // If deletion is successful, refetch the creators data
      fetchCreators();
    }
  };

  // Define the routes for the application
  let element = useRoutes([
    { path: "/", element: <ShowCreators creators={creators} /> },
    { path: "creator/:id", element: <ViewCreator /> },
    {
      path: "creator/edit/:id",
      element: <EditCreator deleteCreator={deleteCreator} />,
    },
    {
      path: "add-creator",
      element: <AddCreator fetchCreators={fetchCreators} />,
    },
  ]);

  return (
    <div className="App">
      <Header />
      <main>{element}</main>
      <Footer />
    </div>
  );
}

export default App;
