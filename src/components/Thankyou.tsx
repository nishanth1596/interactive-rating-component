import illustrationImg from "/illustration-thank-you.svg";

const Thankyou = ({ rating }) => {
  return (
    <article className="from-blackGradient1 to-blackGradient2 mx-6 flex flex-col items-center justify-between rounded-2xl bg-radial px-6 sm:max-w-[25.75rem] sm:rounded-4xl sm:pr-10 sm:pl-8">
      <img
        className="mt-[2.125rem] sm:mt-11"
        src={illustrationImg}
        alt="A smartphone showing card payment done"
      />
      <p className="bg-darkBlue text-Orange mt-6 rounded-3xl px-3 py-1 text-sm leading-[1.38rem] font-normal sm:mt-8 sm:text-[.94rem] sm:leading-6">
        You selected {rating} out of 5
      </p>
      <p className="sm:text-[1.75rem]sm:leading-[2.21rem] mt-6 text-2xl leading-[1.88rem] font-bold sm:mt-8">
        Thank you!
      </p>
      <p className="text-LightGrey mt-2.5 mb-[2.31rem] text-center text-sm leading-[1.38rem] font-normal sm:mt-1.5 sm:text-[.94rem] sm:leading-6">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </article>
  );
};

export default Thankyou;
