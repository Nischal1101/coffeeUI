import about from "../assets/img/about.jpg";
const About = () => {
  return (
    <div className="min-h-screen px-5 lg:px-32 bg-backgroundColor flex flex-col justify-center">
      <h1 className="text-4xl font-semibold mt-24 mb-8 text-center">
        About Us
      </h1>
      {/* <div className="flex flex-col lg:flex-row justify-center items-center w-full gap-5 "> */}
      <div className="flex gap-5">
        <div className="w-full lg:w-1/2 ">
          <img src={about} alt="loading about" className="rounded-lg" />
        </div>
        <div className="w-full lg:w-1/2  space-y-4">
          <h1 className="font-semibold text-3xl">
            What Makes Our Coffee Special?
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus eum
            cum repellendus, fuga, pariatur quaerat sit qui rerum facilis
            aspernatur assumenda dicta. Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Quo possimus consectetur commodi!
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo
            possimus consectetur commodi! Lorem ipsum, dolor sit amet
            consectetur adipisicing lorem ispum
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
