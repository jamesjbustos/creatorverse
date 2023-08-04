import { Link } from "react-router-dom";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import InfoIcon from "@mui/icons-material/Info";

const CreatorCard = ({ id, name, url, description, imageURL }) => {
  // Update the URL to include "http://" if it doesn't already
  const absoluteURL =
    url.startsWith("http://") || url.startsWith("https://")
      ? url
      : "https://" + url;

  return (
    <article className="Card" style={{ backgroundImage: `url(${imageURL})` }}>
      <div className="Card-info">
        <h2 className="Card-title">{name}</h2>
        <p className="Card-description">{description}</p>
        <div className="Card-iconContainer">
          <a
            href={absoluteURL}
            target="_blank"
            rel="noreferrer"
            className="Card-button"
          >
            <ArrowOutwardIcon fontSize="small" />
          </a>
          <Link to={`/creator/${id}`} className="Card-button">
            <InfoIcon fontSize="small" />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default CreatorCard;
