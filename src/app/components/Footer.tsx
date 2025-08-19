import { FiHeart } from "react-icons/fi";
import Contact from "./grid/Contact";

export default function Footer() {
  return (
    <footer className="relative text-black dark:text-white pb-10 px-14 mt-12">
      <div className="flex flex-wrap sm:justify-between justify-center  items-center">
      <p className="flex md:text-base text-sm font-light gap-2">
        <FiHeart className="size-5 text-black dark:text-white" />
        Made with love by Bahar Hasanova
      </p>

      <Contact />
      </div>
    </footer>
  )
}