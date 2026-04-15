const Business = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Business Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Partner with Mint Rewards to enhance your sustainability efforts and engage customers through eco-friendly initiatives.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="text-4xl mb-4">🏢</div>
            <h3 className="text-2xl font-semibold mb-4">Corporate Partnerships</h3>
            <p className="text-gray-600 mb-4">
              Integrate recycling programs into your business operations and offer rewards to your customers.
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>• Custom reward programs</li>
              <li>• Employee engagement initiatives</li>
              <li>• Sustainability reporting</li>
              <li>• Brand visibility opportunities</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="text-4xl mb-4">🛒</div>
            <h3 className="text-2xl font-semibold mb-4">Retail Integration</h3>
            <p className="text-gray-600 mb-4">
              Become a redemption partner and attract eco-conscious customers to your business.
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>• Point redemption options</li>
              <li>• Customer acquisition</li>
              <li>• Marketing co-opportunities</li>
              <li>• Analytics and insights</li>
            </ul>
          </div>
        </div>

        <div className="bg-indigo-600 text-white p-8 rounded-2xl text-center">
          <h2 className="text-3xl font-bold mb-4">Partner With Us</h2>
          <p className="text-xl mb-6">Join leading brands in creating a more sustainable future.</p>
          <button className="bg-white text-indigo-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors mr-4">
            Become a Partner
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-indigo-600 transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Business;
