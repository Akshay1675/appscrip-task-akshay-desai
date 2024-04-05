import { ChevronDown, Square } from "lucide-react";
import { useState } from "react";
import tick from "../images/header/material-symbols_check-small-rounded.png";

const FilterItem = ({ item }) => {
  const [showExpandedFilter, setShowExpandedFilter] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("All");
  console.log(item);
  return (
    <div className="mt-6">
      <div className="flex justify-between">
        <p className="text-lg font-bold leading-[21.6px] font-family: Simplon Norm">
          {item?.name.toUpperCase()}
        </p>
        <ChevronDown
          className="mt-1 cursor-pointer"
          onClick={() => setShowExpandedFilter(!showExpandedFilter)}
        />
      </div>
      <p className="text-lg font-normal leading-[21.6px] font-family: Simplon Norm">
        {selectedFilter}
      </p>
      {showExpandedFilter && (
        <div className="h-[148px] mt-6">
          <p
            className="font-normal text-base text-[#BFC8CD] underline font-family: Simplon Norm"
            onClick={() => setSelectedFilter("All")}
          >
            Unselect all
          </p>
          {item?.options?.map((option, i) => (
            <div
              key={i}
              className="flex mt-4"
              onClick={() => setSelectedFilter(option)}
            >
              <Square className="text-[#4d4d4d]" />
              {selectedFilter === option && (
                <img src={tick} alt="tick" className="absolute" />
              )}
              <p className="font-normal text-base font-family: Simplon Norm ml-2 ">
                {option}
              </p>
            </div>
          ))}
        </div>
      )}
      <div className="mt-6 border-t-[1px] border-t-[#e5e5e5]"></div>
    </div>
  );
};

export default FilterItem;
