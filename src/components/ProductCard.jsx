import { Heart } from "lucide-react";
import { useState } from "react";

const ProductCard = ({ data }) => {
  const [favourite, setFavourite] = useState(false);
  return (
    <div className="w-[168px] -mb-28 md:mb-4 md:w-[300px] h-[462px] ml-1 md:ml-2 mx-auto md:mt-4 ">
      <img
        src={data?.image}
        alt={data?.title}
        className=" h-[224px] md:h-[399px] object-cover "
      />
      <div className="flex justify-between h-[45px] md:h-[47px] mt-2">
        <div>
          <h1
            className=" w-[144px] md:w-[269px] text-sm md:text-lg font-bold font-family: Simplon Norm h-[22px] overflow-hidden "
            style={{ textOverflow: "ellipsis", whiteSpace: "nowrap" }}
          >
            {data?.title}
          </h1>
          <p className="md:text-sm text-[10px] font-normal font-family: Simplon Norm mt-2 text-[#888792]">
            <span className="underline">Sign in</span> or Create an account to
            see pricing
          </p>
        </div>
        <Heart
          className={`${favourite && "fill-[#EB4C6B] text-[#EB4C6B]"}  mt-2`}
          onClick={() => setFavourite(!favourite)}
        />
      </div>
    </div>
  );
};

export default ProductCard;
