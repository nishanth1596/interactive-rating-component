import startIcon from "/icon-star.svg";
import Ratings from "./Ratings";

type CardProps = {
  onClick: () => void;
  rating: number | undefined;
  handleRating: (ratingValue: number) => void;
};

const Card = ({ onClick, rating, handleRating }: CardProps) => {
  return (
    <article className="from-blackGradient1 to-blackGradient2 mx-6 rounded-2xl bg-radial px-6 pt-6 pb-8 sm:mx-8 sm:max-w-[25.75rem] sm:rounded-[1.875rem] sm:px-8 sm:py-8">
      <div className="bg-darkBlue w-10 rounded-full sm:w-12">
        <img src={startIcon} alt="Star Icon" className="p-3.5 sm:p-4" />
      </div>
      <h2 className="mt-4 text-2xl leading-[1.875rem] font-bold sm:mt-[1.875rem] sm:text-[1.75rem] sm:leading-[2.21rem]">
        How did we do?
      </h2>
      <p className="text-LightGrey mt-2.5 text-sm leading-[1.375rem] font-normal sm:mt-[.94rem] sm:pr-10 sm:leading-6">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <Ratings count={5} handleRating={handleRating} selectedRating={rating} />
      <button
        onClick={onClick}
        disabled={!rating}
        className="bg-Orange text-VeryDarkBlue mt-6 w-full rounded-3xl py-3.5 text-sm leading-[1.125rem] font-bold tracking-[1.87px] uppercase hover:cursor-pointer hover:bg-white sm:mt-12 sm:text-[15px] sm:tracking-[2px]"
      >
        Submit
      </button>
    </article>
  );
};

export default Card;
