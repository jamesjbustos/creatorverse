import CreatorCard from "../components/CreatorCard";

const ShowCreators = ({ creators }) => {
  return (
    <div>
      <h1 className="ShowCreators-title">🎨 Creators</h1>
      <p className="ShowCreators-subtitle">
        Discover and add your favorite creators !
      </p>
      <section className="ShowCreators">
        {/* Check if there are creators */}
        {creators.length > 0 ? (
          creators.map((creator) => (
            // If creators exist, map over the array and render a CreatorCard.
            <CreatorCard
              key={creator.id} // Unique creator id from database
              id={creator.id}
              name={creator.name}
              url={creator.url}
              description={creator.description}
              imageURL={creator.imageURL}
            />
          ))
        ) : (
          // If there are no creators, display a message
          <p>😢 No content creators found.</p>
        )}
      </section>
    </div>
  );
};

export default ShowCreators;
