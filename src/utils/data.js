import I1 from "../img/i1.png";
import F1 from "../img/f1.png";
import C3 from "../img/c3.png";
import Fi1 from "../img/fi1.png";
import { IoFishSharp, IoConstruct } from "react-icons/io5";
import { IoMdIceCream } from "react-icons/io";
import {
  GiBananaBunch,
  GiChickenOven,
  GiBowlOfRice,
  GiSodaCan,
  GiIndianPalace,
} from "react-icons/gi";

export const heroData = [
  {
    id: 1,
    name: "Glaces",
    decp: "Chocolat & vanille",
    price: "4.5",
    imageSrc: I1,
  },
  {
    id: 2,
    name: "Fraises",
    decp: "Fraises des bois",
    price: "7.5",
    imageSrc: F1,
  },
  {
    id: 3,
    name: "Chicken Kebab",
    decp: "Assiette de Kebab",
    price: "8.5",
    imageSrc: C3,
  },
  {
    id: 4,
    name: "Poissons",
    decp: "Assiette de poisson",
    price: "6.75",
    imageSrc: Fi1,
  },
];

export const categories = [
  {
    id: 1,
    name: "Poulet",
    urlParamName: "chicken",
    icons: <GiChickenOven />,
  },
  {
    id: 2,
    name: "Curry",
    urlParamName: "curry",
    icons: <GiIndianPalace />
  },
  {
    id: 3,
    name: "Riz",
    urlParamName: "rice",
    icons: <GiBowlOfRice />
  },
  {
    id: 4,
    name: "Poisson",
    urlParamName: "fish",
    icons: <IoFishSharp />
  },
  {
    id: 5,
    name: "Fruits",
    urlParamName: "fruits",
    icons: <GiBananaBunch />
  },
  {
    id: 6,
    name: "Glaces",
    urlParamName: "icecreams",
    icons: <IoMdIceCream />
  },

  {
    id: 7,
    name: "Boissons",
    urlParamName: "drinks",
    icons: <GiSodaCan />
  },
  {
    id: 7,
    name: "Test",
    urlParamName: "construction",
    icons: <IoConstruct />
  },
];
