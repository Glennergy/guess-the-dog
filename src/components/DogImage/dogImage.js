function DogImage({ randomDogImage }) {
  return (
    <div className="imageFrame">
      <img
        className="dog-image"
        src={randomDogImage}
        placeholder="random-dog-image"
      ></img>
    </div>
  );
}

export default DogImage;
