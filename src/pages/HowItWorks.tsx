const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-green-50 py-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            How It Works
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Simple steps to turn your recyclables into rewards and make a positive environmental impact.
          </p>
        </div>

        <div className="space-y-16">
          {/* Step 1 */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                1
              </div>
              <h3 className="text-3xl font-bold mb-4">Sign Up Free</h3>
              <p className="text-gray-600 text-lg">
                Download the Mint Rewards app and create your account in seconds. It's completely free to join and start earning.
              </p>
            </div>
            <div className="md:w-1/2 bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-6xl text-center">📱</div>
              <p className="text-center text-gray-600 mt-4">Download & Register</p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-8">
            <div className="md:w-1/2">
              <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                2
              </div>
              <h3 className="text-3xl font-bold mb-4">Recycle & Earn</h3>
              <p className="text-gray-600 text-lg">
                Collect your recyclables and either schedule a pickup or drop them off at participating locations. Earn points instantly for every item.
              </p>
            </div>
            <div className="md:w-1/2 bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-6xl text-center">♻️</div>
              <p className="text-center text-gray-600 mt-4">Recycle Items</p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                3
              </div>
              <h3 className="text-3xl font-bold mb-4">Redeem Rewards</h3>
              <p className="text-gray-600 text-lg">
                Use your earned points to get vouchers, discounts, and products from your favorite brands. The more you recycle, the more you earn!
              </p>
            </div>
            <div className="md:w-1/2 bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-6xl text-center">🎁</div>
              <p className="text-center text-gray-600 mt-4">Enjoy Rewards</p>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-green-600 text-white p-8 rounded-2xl text-center">
          <h2 className="text-3xl font-bold mb-4">Start Your Journey Today</h2>
          <p className="text-xl mb-6">Join thousands making a difference, one recyclable at a time.</p>
          <button className="bg-white text-green-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
            Get Started Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
