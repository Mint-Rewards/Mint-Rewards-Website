import { useEffect } from "react";
import { Smartphone, Download } from "lucide-react";

const AppRedirect = () => {
  useEffect(() => {
    const userAgent = navigator.userAgent;

    // Detect device type and redirect
    if (/android/i.test(userAgent)) {
      window.location.href =
        "https://play.google.com/store/apps/details?id=com.mintrewards.appp";
    } else if (/iPhone|iPad|iPod/i.test(userAgent)) {
      window.location.href =
        "https://apps.apple.com/us/app/mint-rewards/id6723895911";
    } else {
      // For desktop users, show the download page instead of redirect
      // window.location.href = "https://mintrewards.com"; // fallback
    }
  }, []);

  const handleManualDownload = (platform: "android" | "ios") => {
    if (platform === "android") {
      window.open(
        "https://play.google.com/store/apps/details?id=com.mintrewards.appp",
        "_blank"
      );
    } else {
      window.open(
        "https://apps.apple.com/us/app/mint-rewards/id6723895911",
        "_blank"
      );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        {/* Loading/Redirect Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-green-600 p-4 rounded-full animate-pulse">
              <Smartphone className="w-8 h-8 text-white" />
            </div>
          </div>

          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Redirecting to Store...
          </h1>

          <p className="text-gray-600 mb-8">
            We're taking you to the right app store for your device. If the
            redirect doesn't work, choose your platform below:
          </p>

          {/* Manual Download Buttons */}
          <div className="space-y-4">
            <button
              onClick={() => handleManualDownload("android")}
              className="w-full flex items-center justify-center space-x-3 bg-green-600 hover:bg-green-700 text-white px-6 py-4 rounded-xl transition-colors duration-200 shadow-lg"
            >
              <Download size={24} />
              <div className="text-left">
                <div className="text-sm opacity-90">Get it on</div>
                <div className="font-semibold">Google Play</div>
              </div>
            </button>

            <button
              onClick={() => handleManualDownload("ios")}
              className="w-full flex items-center justify-center space-x-3 bg-black hover:bg-gray-800 text-white px-6 py-4 rounded-xl transition-colors duration-200 shadow-lg"
            >
              <Download size={24} />
              <div className="text-left">
                <div className="text-sm opacity-90">Download on the</div>
                <div className="font-semibold">App Store</div>
              </div>
            </button>
          </div>

          {/* Back to Website Link */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <a
              href="/"
              className="text-green-600 hover:text-green-700 font-medium transition-colors"
            >
              ← Back to Website
            </a>
          </div>
        </div>

        {/* Info Cards */}
        <div className="mt-8 grid grid-cols-2 gap-4">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center">
            <div className="text-2xl mb-2">♻️</div>
            <div className="text-sm font-medium text-gray-700">
              Recycle & Earn
            </div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center">
            <div className="text-2xl mb-2">🎁</div>
            <div className="text-sm font-medium text-gray-700">
              Redeem Rewards
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppRedirect;
