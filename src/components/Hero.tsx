import ScrollZoom from "./ScrollBottomHero";
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
    <div className="w-full relative bg-gradient-to-br from-white via-green-50 to-teal-50">
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

      {/* Phone Frame Container with Animation */}
      <div className="absolute top-55 w-full h-full -z-10">
        <ScrollZoom
          frameTitle=""
        />
      </div>
    </div>
  );
};

export default Hero;
