import { useState } from "react";
import Card from "./components/Card";
import Thankyou from "./components/Thankyou";

const App = () => {
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [rating, setRating] = useState<number | undefined>(undefined);

  function handleSubmit(): void {
    setIsSubmitted(true);
  }

  function handleRating(ratingValue: number): void {
    setRating(ratingValue);
  }

  return (
    <div>
      <header className="sr-only">
        <h1>Interactive rating component</h1>
      </header>
      <main>
        <section className="flex h-screen w-full items-center justify-center">
          {isSubmitted ? (
            <Thankyou rating={rating} />
          ) : (
            <Card
              onClick={handleSubmit}
              rating={rating}
              handleRating={handleRating}
            />
          )}
        </section>
      </main>
      <footer className="absolute bottom-0 left-1/2 w-full -translate-x-1/2 animate-pulse text-center text-gray-800">
        Challenge by{""}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="https://www.frontendmentor.io/profile/nishanth1596">
          Nishanth
        </a>
        .
      </footer>
    </div>
  );
};

export default App;
