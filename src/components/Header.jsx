import { HiPlusSmall } from "react-icons/hi2";

const Header = () => {
  return (
    <main className="w-full py-7 font-heading text-mini">
      <nav className="flex justify-between items-center">
        <div className="w-1/2">
          <h5 className="uppercase typo-heading">paruk.azziyi</h5>
        </div>
        <div className="w-1/2">
          <div className="flex justify-between items-center">
            <h5 className="typo-heading">
              <span className="uppercase typo-heading">
                + person who love tech +
              </span>
              <br />
              base on (Depok, Indonesia)
            </h5>
            <button className="typo-heading uppercase flex justify-between items-center gap-2.5 text-mini border-text-heading border-[1px] py-2.5 px-3 rounded-sm cursor-pointer">
              menu
              <HiPlusSmall />
            </button>
          </div>
        </div>
      </nav>
    </main>
  );
};

export default Header;
