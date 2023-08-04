import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { supabase } from "../client";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

const ViewCreator = () => {
  // useParams to extract the id from the url
  const { id } = useParams();
  const [creator, setCreator] = useState(null);

  // UseEffect to call fetchCreator() function when component is mounted and whenever 'id' changes
  useEffect(() => {
    fetchCreator(id);
  }, [id]);

  // Fetch a single creator by id and set the creator state
  const fetchCreator = async (id) => {
    const { data, error } = await supabase
      .from("creators")
      .select("*")
      .eq("id", id)
      .single();

    if (error) console.error("Error fetching creator: ", error);
    else setCreator(data);
  };

  // Check if creator data is fetched from the database
  return creator ? (
    <div className="CreatorProfile">
      {creator.imageURL && (
        <div
          className="CreatorProfile-image"
          style={{ backgroundImage: `url(${creator.imageURL})` }}
        />
      )}
      <div className="CreatorProfile-info">
        <h1 className="CreatorProfile-title">{creator.name}</h1>
        <a
          className="CreatorProfile-link"
          href={creator.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <ArrowOutwardIcon fontSize="small" />
        </a>
        <hr className="hr-section" />
        <p className="CreatorProfile-description">{creator.description}</p>
        <Link
          className="CreatorProfile-editLink"
          to={`/creator/edit/${creator.id}`}
        >
          <AutoAwesomeIcon className="editIcon" fontSize="small" />
          Edit
        </Link>
      </div>
    </div>
  ) : (
    // If creator data is not yet fetched, display a loading state
    <article aria-busy="true" className="Loading"></article>
  );
};

export default ViewCreator;
