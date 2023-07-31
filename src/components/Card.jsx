// Card component designed to display a single creator with the following props:
// name, url, description, and (optional) imageURL

const Card = ({ name, url, description, imageURL }) => {
  return (
    <div>
      <h2>{name}</h2>
      <a href="{url}">{url}</a>
      <p>{description}</p>
      {/* Optional imageURL prop */}
      {imageURL ? <img src={imageURL} alt={name} /> : null}
    </div>
  );
};

export default Card;
