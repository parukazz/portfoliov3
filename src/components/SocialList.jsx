import { HiPlusSmall } from "react-icons/hi2";
import { socialLinks } from "../constants";

const SocialList = () => {
  return (
    <main className="py-2 border-t-[1px] border-b-[1px] border-line">
      <ul className="flex space-x-3 uppercase text-mini">
        {socialLinks.map((item) => (
          <li key={item.id} className="hover:text-accent transition-base">
            <a href={item.url} className="flex items-center gap-1">
              <HiPlusSmall />
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default SocialList;
