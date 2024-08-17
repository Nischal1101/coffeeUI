import Card from "./ui/Card";
import menu1 from "../assets/img/menu1.jpg";
import menu2 from "../assets/img/menu2.jpg";
import menu3 from "../assets/img/menu3.jpg";
import menu4 from "../assets/img/menu4.jpg";
import menu5 from "../assets/img/menu5.jpg";
import menu6 from "../assets/img/menu6.jpg";

const Menu = () => {
  const cardItems = [
    {
      name: "Expresso",
      img: menu1,
    },

    {
      name: "Cappuccino",
      img: menu2,
    },

    {
      name: "Latte",
      img: menu3,
    },

    {
      name: "Americano",
      img: menu4,
    },
    {
      name: "Macchiato",
      img: menu5,
    },

    {
      name: "Doppio",
      img: menu6,
    },
  ];

  return (
    // <div className="min-h-screen bg-backgroundColor px-5 lg:px-32">
    <div className="min-h-screen  justify-center lg:px-32 px-5 bg-backgroundColor pb-8">
      <h1 className="text-4xl text-center font-semibold pt-24 pb-8">
        Our Menu
      </h1>

      <div className="grid grid-col-1 md:grid-cols:2 lg:grid-cols-3  gap-8">
        {cardItems.map((ele) => (
          <Card key={ele.name} name={ele.name} src={ele.img} />
        ))}
      </div>
    </div>
  );
};

export default Menu;
