/* eslint-disable react/prop-types */
const Button = ({ label, icon: Icon, onClick }) => {
  return (
    <button
      className="flex justify-between items-center gap-3 w-max font-sans text-base leading-140 py-2.5 border-b-[1px] border-text-heading cursor-pointer"
      onClick={onClick}
    >
      {label} {Icon && <Icon color="#FDFFFF" size={16} />}
    </button>
  );
};

export default Button;
