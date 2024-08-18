import Button from "./Button";
import { FaShoppingCart } from "react-icons/fa";

interface ICardProps {
  name: string;
  src: string;
}

const Card = ({ name, src }: ICardProps) => {
  return (
    <div className="bg-white rounded-lg space-y-4 p-4 max-w-sm">
      <div className="">
        <img src={src} alt="loading menu" className=" rounded-lg" />
      </div>
      <h1 className="text-xl font-semibold ">{name}</h1>
      <div className="flex justify-between  items-center">
        <div className="flex gap-2">
          <Button className=" border-brightColor rounded-md">Hot</Button>
          <Button className=" border-brightColor rounded-md">Cold</Button>
        </div>
        <div className="logo">
          <FaShoppingCart size={25} />
        </div>
      </div>
    </div>
  );
};

export default Card;
