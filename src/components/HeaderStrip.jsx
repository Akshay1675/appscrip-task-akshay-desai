import element from "../images/header/element-4.png";

export const HeaderStrip = () => {

    return (
      <div className="bg-black w-full h-8 flex items-center justify-between px-4 md:px-[274px]">
        <div className="flex items-center ml-24 md:ml-0">
          <img src={element} alt="?" />
          <p className="font: Simplon Norm font-normal  text-xs text-white mx-2.5">
            Lorem ipsum dolor
          </p>
        </div>
        <div className="md:flex items-center hidden ">
          <img src={element} alt="?" />
          <p className="font: Simplon Norm font-normal text-xs text-white mx-2.5">
            Lorem ipsum dolor
          </p>
        </div>
        <div className="md:flex items-center hidden">
          <img src={element} alt="?" />
          <p className="font: Simplon Norm font-normal text-xs text-white mx-2.5">
            Lorem ipsum dolor
          </p>
        </div>
      </div>
    );
  };