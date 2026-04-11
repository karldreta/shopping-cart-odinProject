import tshirtIcon from "../assets/tshirt-men.svg";
import dressIcon from "../assets/dress-women.svg";
import giftIcon from "../assets/gift.svg";
import shoeIcon from "../assets/shoes.svg";
import bagIcon from "../assets/bag.svg";
import glassesIcon from "../assets/glasses.svg";
import watchIcon from "../assets/watch.svg";
import perfumeIcon from "../assets/perfume.svg";

export const linkIcons = [
    {
      name: "Men's",
      to: "/product?category=mens",
      img: tshirtIcon,
      alt: "Men's Clothing",
    },
    {
      name: "Women's",
      to: "/product?category=womens",
      img: dressIcon,
      alt: "Women's Clothing",
    },
    {
      name: "Shoes",
      to: "/product?category=shoes",
      img: shoeIcon,
      alt: "Shoes",
    },
    {
      name: "Bags",
      to: "/product?category=bags",
      img: bagIcon,
      alt: "Bags",
    },
    {
      name: "Glasses",
      to: "/product?category=glasses",
      img: glassesIcon,
      alt: "Glasses",
    },
    {
      name: "Watches",
      to: "/product?category=watches",
      img: watchIcon,
      alt: "Watches",
    },
    {
      name: "Fragrances",
      to: "/product?category=fragrances",
      img: perfumeIcon,
      alt: "Fragrances",
    },
    {
      name: "Everything",
      to: "/product?category=everything",
      img: giftIcon,
      alt: "Everything",
    },
  ];