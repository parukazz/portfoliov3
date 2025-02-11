/* eslint-disable react/prop-types */
import { PiCopyrightLight } from "react-icons/pi";

const SectionBar = ({ section, label  }) => {
  return (
    <main className="w-full flex justify-between items-center py-7 border-t-[1px] border-line text-text-base uppercase text-xs tracking-tight">
      <div className="w-1/3">
        <h5>{section}</h5>
      </div>
      <div className="w-1/3 text-center">
        <h5>{label}</h5>
      </div>
      <div className="w-1/3">
        <h5 className="flex items-center justify-end">
          <PiCopyrightLight />
          2025
        </h5>
      </div>
    </main>
  );
};

export default SectionBar;
