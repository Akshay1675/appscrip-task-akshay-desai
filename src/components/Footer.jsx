import icon1 from "../images/footer/Frame 28.png";
import icon2 from "../images/footer/Frame 136278.png";

const Footer = () => {
  return (
    <footer className="mt-4 pt-6 md:pt-12 bg-black">
      <div className="md:flex">
        <div className="md:ml-[128px] ml-4">
          <div>
            <h1 className="md:text-xl text-base font-bold leading-6 font-family: Simplon Norm text-white">
              BE THE FIRST TO KNOW
            </h1>
            <p className="mt-3 text-sm md:text-base font-normal leading-[19.2px] font-family: Simplon Norm text-white">
              Sign up for updates from mettā muse.
            </p>
          </div>
          <div className="flex md:w-full w-[343px] items-center space-x-2 mt-8">
            <input
              className="flex h-10 w-full md:w-[384px] rounded-sm bg-white px-3 py-2 text-lg placeholder:text-[#BFC8CD] focus:outline-none"
              type="email"
              placeholder="Enter your e-mail..."
            ></input>
            <button
              type="button"
              className="rounded-sm w-28 bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 border-[1px] border-[#ffffff] font-family: Simplon Norm"
            >
              SUBCRIBE
            </button>
          </div>
        </div>

        <div className="md:ml-[304px] ml-4 mt-4 md:mt-0">
          <h1 className="md:text-xl text-base font-bold leading-6 font-family: Simplon Norm text-white">
            CONTACT US
          </h1>
          <p className="md:text-base text-sm font-normal mt-2 leading-6 font-family: Simplon Norm text-white">
            +44 221 133 5360
          </p>
          <p className="md:text-base text-sm font-normal mt-2 leading-6 font-family: Simplon Norm text-white">
            customercare@mettamuse.com
          </p>
          <h1 className="text-xl mt-4 font-bold leading-6 font-family: Simplon Norm text-white">
            Currency
          </h1>
          <p className="md:text-base text-xs font-normal mt-2 leading-6 font-family: Simplon Norm text-white">
            USD
          </p>
          <p className="md:text-base text-xs font-normal mt-2 leading-3 font-family: Simplon Norm text-white">
            Transactions will be completed in Euros and a currency reference is available on hover.
          </p>
        </div>
      </div>
      <div className="md:ml-[128px]  border-[1px] w-full md:w-[1160px] mt-10 border-white"></div>
      <div className="md:flex mt-14">
        <div className="md:ml-[128px] ml-4">
          <h1 className="md:text-xl text-base font-bold leading-6 font-family: Simplon Norm text-white">
            mettā muse
          </h1>
          <p className="md:text-lg text-sm font-normal mt-2 leading-6 font-family: Simplon Norm text-white">
            About Us
          </p>
          <p className="md:text-lg text-sm font-normal mt-2 leading-6 font-family: Simplon Norm text-white">
            Stories
          </p>
          <p className="md:text-lg text-sm font-normal mt-2 leading-6 font-family: Simplon Norm text-white">
            Artisans
          </p>
          <p className="md:text-lg text-sm font-normal mt-2 leading-6 font-family: Simplon Norm text-white">
            Boutiques
          </p>
          <p className="md:text-lg text-sm font-normal mt-2 leading-6 font-family: Simplon Norm text-white">
            Contact Us
          </p>
          <p className="md:text-lg text-sm font-normal mt-2 leading-6 font-family: Simplon Norm text-white">
            EU Compliances Docs
          </p>
        </div>
        <div className="md:ml-[128px] ml-4">
          <h1 className="md:text-xl text-base font-bold leading-6 font-family: Simplon Norm text-white">
            Quick Links
          </h1>
          <p className="md:text-lg text-sm font-normal mt-2 leading-6 font-family: Simplon Norm text-white">
            Orders & Shipping
          </p>
          <p className="md:text-lg text-sm font-normal mt-2 leading-6 font-family: Simplon Norm text-white">
            Join/Login as a Seller
          </p>
          <p className="md:text-lg text-sm font-normal mt-2 leading-6 font-family: Simplon Norm text-white">
            Payment & Pricing
          </p>
          <p className="md:text-lg text-sm font-normal mt-2 leading-6 font-family: Simplon Norm text-white">
            Return & Refunds
          </p>
          <p className="md:text-lg text-sm font-normal mt-2 leading-6 font-family: Simplon Norm text-white">
            FAQs
          </p>
          <p className="md:text-lg text-sm font-normal mt-2 leading-6 font-family: Simplon Norm text-white">
            Privacy Policy
          </p>
          <p className="md:text-lg text-sm font-normal mt-2 leading-6 font-family: Simplon Norm text-white">
            Terms & Conditions
          </p>
        </div>
        <div className="md:ml-[128px] ml-4">
          <h1 className="md:text-xl text-base font-bold leading-6 font-family: Simplon Norm text-white">
            Follow Us
          </h1>
          <img src={icon1} className="mt-4 hidden md:block" alt="social link" />
          <h1 className="mt-16 text-xl font-bold leading-6 font-family: Simplon Norm text-white">
            mettā muse Accepts
          </h1>
          <img src={icon2} alt="payment method" className="mt-6 w-[343px]" />
        </div>
      </div>
      <p className="md:text-sm text-sm font-normal mt-2 leading-6 font-family: Simplon Norm text-white ml-4 md:ml-[550px]">
        Copyright © 2023 mettamuse. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
