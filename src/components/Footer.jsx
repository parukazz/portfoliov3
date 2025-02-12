import { GoArrowUp, GoArrowUpRight } from "react-icons/go";
import Button from "./Button";
import SectionBar from "./SectionBar";
import SocialList from "./SocialList";

const Footer = () => {
  return (
    <footer className="relative bg-primary text-text-heading">
      <div className="py-20 w-full flex flex-col items-end">
        <h1 className="text-heading-1 uppercase font-black leading-120">
          let&apos;s start something great together
        </h1>
        <Button label="Contact Me" icon={GoArrowUpRight} />
      </div>
      <SectionBar section="contact me" label="get in touch" />
      <div className="w-full pt-6 pb-8 flex justify-between items-center text-sm tracking-tight">
        <div className="w-1/3">
          <a href="#" className="underline">
            parukazziyi@gmail.com
          </a>
        </div>
        <div className="w-1/3 flex justify-center">
          <SocialList />
        </div>
        <div className="w-1/3 flex justify-end">
          <div className="flex items-center gap-5">
            <h5 className="uppercase">back to top</h5>
            <div className="border-[1px] border-text-base p-5 rounded-full cursor-pointer transition-base group hover:border-accent">
              <GoArrowUp
                size={36}
                className="transition-base text-text-base group-hover:text-accent"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
