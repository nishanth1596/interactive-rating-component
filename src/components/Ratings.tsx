type RatingProps = {
  count: number;
  handleRating: (ratingValue: number) => void;
  selectedRating: number | undefined;
};

const Ratings = ({ count, handleRating, selectedRating }: RatingProps) => {
  const ratings: number[] = Array.from(
    { length: count },
    (_, index) => index + 1,
  );

  return (
    <ol className="mt-6 flex justify-between">
      {ratings.map((rating) => (
        <li
          key={rating}
          className="rating-item"
          style={{
            backgroundColor: selectedRating === rating ? "#fff" : undefined,
            color: selectedRating === rating ? "#262e38" : undefined,
          }}
          onClick={() => handleRating(rating)}
        >
          <button>{rating}</button>
        </li>
      ))}
    </ol>
  );
};

export default Ratings;
