const Personal = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-50 py-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Personal Rewards
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Turn your everyday recycling into instant rewards and make a positive impact on the environment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="text-4xl mb-4">♻️</div>
            <h3 className="text-xl font-semibold mb-2">Easy Recycling</h3>
            <p className="text-gray-600">
              Schedule pickups or drop off your recyclables at convenient locations near you.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="text-4xl mb-4">💰</div>
            <h3 className="text-xl font-semibold mb-2">Instant Points</h3>
            <p className="text-gray-600">
              Earn points immediately for every item you recycle. No waiting, instant gratification.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="text-4xl mb-4">🎁</div>
            <h3 className="text-xl font-semibold mb-2">Great Rewards</h3>
            <p className="text-gray-600">
              Redeem your points for vouchers, discounts, and products from top brands.
            </p>
          </div>
        </div>

        <div className="mt-16 bg-green-600 text-white p-8 rounded-2xl text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start?</h2>
          <p className="text-xl mb-6">Join thousands of users making a difference while earning rewards.</p>
          <button className="bg-white text-green-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
            Download the App
          </button>
        </div>
      </div>
    </div>
  );
};

export default Personal;
