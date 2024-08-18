// import Button from "./ui/Button";
// import img from "../assets/img/home.png";

// const Home = () => {
//   return (
//     <section className="flex flex-col lg:flex-row lg:justify-between justify-center gap-10 items-center bg-gradient-to-r from-[#FFDCAB] to-[#AB6B2E] min-h-screen px-5 lg:px-32">
//       <div className="w-full lg:w-1/2 mt-14 lg:mt-0 space-y-4">
//         <h1 className="font-semibold text-center text-5xl lg:text-start leading-tight">
//           Start your day with streaming cup of coffee
//         </h1>
//         <p className=" text-center lg:text-start">
//           Boost your productivity and build your mood with a glass of coffee in
//           the morning
//         </p>
//         <div className="flex gap-6 justify-center lg:justify-start">
//           <Button>ADD TO CART</Button>
//           <Button>MORE MENU</Button>
//         </div>
//       </div>
//       <div className="relative">
//         <img src={img} alt="loading home..." />
//         <div>
//           <h1 className="absolute bg-white px-8 py-2 border  rounded-full top-5 right-0 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]">
//             14K
//           </h1>
//           <h1 className="absolute bg-white px-8 py-2  rounded-full bottom-0 -left-10">
//             Cappuccino
//           </h1>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Home;

import img from "../assets/img/home.png";
import Button from "./ui/Button";

const Home = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center lg:flex-row lg:justify-between items-center lg:px-32 px-5 gap-10 bg-gradient-to-r from-[#FFDCAB] to-[#AB6B2E] ">
      <div className=" w-full lg:w-2/4 space-y-4 mt-14 lg:mt-0">
        <h1 className="font-semibold text-5xl text-center lg:text-start leading-tight">
          Start your day with a steaming cup of coffee
        </h1>
        <p>
          Boost your productivity and build your mood with a glass of coffee in
          the morning
        </p>

        <div className=" flex flex-row gap-6">
          <Button>ADD TO CART</Button>
          <Button>MORE MENU</Button>
        </div>
      </div>

      <div className="relative">
        <img src={img} alt="img" />

        <div className=" absolute bg-white px-8 py-2 top-5 right-0 rounded-full shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]">
          <h2 className=" font-semibold">14K</h2>
        </div>

        <div className=" absolute bg-white px-8 py-2 bottom-0 -left-10 rounded-full">
          <h2 className=" font-semibold">Cappuccino</h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
