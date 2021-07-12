import Pet from "./Pet";

const Results = ({ pets }) => {
  return (
    <div className="search">
      {!pets.length ? (
        <h2>No Pets Found</h2>
      ) : (
        pets.map(({ name, animal, breed, id, images, city, state }) => (
          <Pet
            name={name}
            animal={animal}
            breed={breed}
            key={id}
            images={images}
            location={`${city}, ${state}`}
            id={id}
          />
        ))
      )}
    </div>
  );
};

export default Results;
