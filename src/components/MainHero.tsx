import ScrollZoom from "./ScrollBottomMainHero";
import { Download, Smartphone } from "lucide-react";

const Hero = () => {
  const handleAppStoreClick = () => {
    console.log("App Store download clicked");
    // Add actual app store link here
  };

  const handleGooglePlayClick = () => {
    console.log("Google Play download clicked");
    // Add actual Google Play link here
  };
  return (
    <div className="w-full relative bg-green-100 ">
      <div className="flex flex-col gap-6 items-center justify-center w-full xl:min-h-[70vh] py-10 z-20">
        <div className="flex flex-col gap-6 items-center justify-center w-full xl:min-h-[60vh] py-12 z-20 relative">
          <div className="flex flex-col gap-6 items-center justify-center h-full w-full max-w-5xl mx-auto px-4">
            {/* Main Headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-center text-gray-900 leading-tight">
              Turn Your Trash into <br />
              <span className="text-green-600">Rewards</span>
            </h1>

            {/* Subtext */}
            <p className="text-lg md:text-xl text-center text-gray-700 max-w-3xl leading-relaxed">
              Recycle smarter. Earn instantly. Redeem everywhere.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mt-2">
              <button
                onClick={handleAppStoreClick}
                className="flex items-center space-x-3 bg-black hover:bg-gray-800 text-white px-5 py-2.5 rounded-xl transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 shadow-lg"
              >
                <Download size={20} />
                <div className="text-left">
                  <div className="text-xs text-gray-300">Download on the</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </button>

              <button
                onClick={handleGooglePlayClick}
                className="flex items-center space-x-3 bg-black hover:bg-gray-800 text-white px-5 py-2.5 rounded-xl transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 shadow-lg"
              >
                <Smartphone size={20} />
                <div className="text-left">
                  <div className="text-xs text-gray-300">Get it on</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </button>
            </div>

            {/* Terms text */}
            <span className="text-xs text-gray-500 underline">
              Terms and exclusions apply
            </span>
          </div>
        </div>
      </div>
      {/* Phone Frame Container */}
      <div className="absolute bottom-0 w-full h-full  -z-10">
        {" "}
        <ScrollZoom />
      </div>
    </div>
  );
};

export default Hero;

export const ToggleSwitch = ({
  isBusiness,
  onToggle,
  className,
}: {
  isBusiness: boolean;
  onToggle: () => void;
  className?: string;
}) => {
  return (
    <div
      onClick={onToggle}
      className={`relative flex items-center w-64 h-12 rounded-full cursor-pointer transition-colors duration-300 ease-in-out border-2 border-black ${
        isBusiness ? "bg-transparent" : "bg-transparent"
      } ${className}`}
    >
      {/* The black sliding handle */}
      <div
        className={`absolute h-full w-1/2 rounded-full transition-transform duration-300 ease-in-out z-10 ${
          isBusiness ? "bg-black translate-x-full" : "bg-black translate-x-0"
        }`}
      ></div>
      {/* Container for the text labels */}
      <div className="relative flex w-full h-full font-semibold text-lg">
        {/* Personal label */}
        <div
          className={`flex-1 flex items-center justify-center h-full transition-colors duration-300 ease-in-out z-20 ${
            isBusiness ? "text-black" : "text-white"
          }`}
        >
          Personal
        </div>
        {/* Business label */}
        <div
          className={`flex-1 flex items-center justify-center h-full transition-colors duration-300 ease-in-out z-20 ${
            isBusiness ? "text-white" : "text-black"
          }`}
        >
          Business
        </div>
      </div>
    </div>
  );
};
