import React, { useState, useEffect } from "react";
import { Calculator, Recycle, TreePine, Globe } from "lucide-react";

// CO2 savings per kg for different materials (in kg CO2 saved per kg of material)
const CO2_SAVINGS_PER_KG = {
  paper: 3.3, // Paper recycling saves ~3.3 kg CO2 per kg
  cardboard: 3.3, // Similar to paper
  plastic: 2.0, // Plastic recycling saves ~2 kg CO2 per kg
  glass: 0.5, // Glass recycling saves ~0.5 kg CO2 per kg
  aluminum: 9.0, // Aluminum recycling saves ~9 kg CO2 per kg (highest impact)
  steel: 1.5, // Steel recycling saves ~1.5 kg CO2 per kg
  electronic: 4.0, // E-waste recycling saves ~4 kg CO2 per kg
  organic: 0.3, // Composting organic waste saves ~0.3 kg CO2 per kg
};

// Equivalent conversions for visualization
const EQUIVALENT_CONVERSIONS = {
  treesPlanted: 0.025, // 1 kg CO2 saved = ~0.025 trees planted (40kg CO2 per tree per year)
  kmDriving: 4.6, // 1 kg CO2 saved = ~4.6 km of driving (average car emits 0.21 kg CO2/km)
  lightBulbHours: 100, // 1 kg CO2 saved = ~100 hours of LED light bulb usage
};

const CO2Calculator = () => {
  const [materials, setMaterials] = useState([
    { type: "paper", weight: 0 },
    { type: "plastic", weight: 0 },
    { type: "glass", weight: 0 },
    { type: "aluminum", weight: 0 },
  ]);

  const [totalCO2Saved, setTotalCO2Saved] = useState(0);
  const [equivalents, setEquivalents] = useState({
    trees: 0,
    drivingKm: 0,
    lightBulbHours: 0,
  });

  // Calculate total CO2 savings
  useEffect(() => {
    const total = materials.reduce((sum, material) => {
      const savingsPerKg =
        CO2_SAVINGS_PER_KG[material.type as keyof typeof CO2_SAVINGS_PER_KG] ||
        0;
      return sum + material.weight * savingsPerKg;
    }, 0);

    setTotalCO2Saved(total);

    // Calculate equivalents
    setEquivalents({
      trees: total * EQUIVALENT_CONVERSIONS.treesPlanted,
      drivingKm: total * EQUIVALENT_CONVERSIONS.kmDriving,
      lightBulbHours: total * EQUIVALENT_CONVERSIONS.lightBulbHours,
    });
  }, [materials]);

  const updateMaterialWeight = (index: number, weight: number) => {
    const newMaterials = [...materials];
    newMaterials[index].weight = weight;
    setMaterials(newMaterials);
  };

  const addMaterial = () => {
    setMaterials([...materials, { type: "paper", weight: 0 }]);
  };

  const removeMaterial = (index: number) => {
    if (materials.length > 1) {
      setMaterials(materials.filter((_, i) => i !== index));
    }
  };

  const updateMaterialType = (index: number, type: string) => {
    const newMaterials = [...materials];
    newMaterials[index].type = type;
    setMaterials(newMaterials);
  };

  return (
    <div className="min-h-screen mt-20 bg-gradient-to-br from-[#1D558E]/5 via-[#3EBAB9]/5 to-[#8CE4B5]/10 py-12 sm:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="bg-gradient-to-br from-[#1D558E] to-[#3EBAB9] p-4 rounded-full">
              <Calculator className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1D558E] via-[#3EBAB9] to-[#8CE4B5]">
              CO₂ Savings
            </span>{" "}
            Calculator
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Calculate how much CO₂ emissions you can prevent by recycling
            different materials.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Input Section */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold mb-6 flex flex-col gap-2 sm:flex-row sm:items-center">
              <Recycle className="w-6 h-6 mr-2 text-[#3EBAB9]" />
              Materials to Recycle
            </h2>

            <div className="space-y-5">
              {materials.map((material, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-3 rounded-2xl border border-gray-100 p-4 shadow-sm md:flex-row md:items-center"
                >
                  <div className="w-full md:flex-1">
                    <label className="text-sm font-medium text-gray-600 mb-2 block">
                      Material Type
                    </label>
                    <select
                      value={material.type}
                      onChange={(e) =>
                        updateMaterialType(index, e.target.value)
                      }
                      className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#3EBAB9] focus:border-transparent"
                    >
                      <option value="paper">Paper/Cardboard</option>
                      <option value="plastic">Plastic</option>
                      <option value="glass">Glass</option>
                      <option value="aluminum">Aluminum Cans</option>
                      <option value="steel">Steel/Metal</option>
                      <option value="electronic">Electronics</option>
                      <option value="organic">Organic Waste</option>
                    </select>
                  </div>

                  <div className="w-full md:w-auto">
                    <label className="text-sm font-medium text-gray-600 mb-2 block">
                      Weight (kg)
                    </label>
                    <div className="flex items-center gap-2">
                      <input
                        type="number"
                        value={material.weight}
                        onChange={(e) =>
                          updateMaterialWeight(
                            index,
                            parseFloat(e.target.value) || 0
                          )
                        }
                        placeholder="0"
                        min="0"
                        step="0.1"
                        className="w-full md:w-24 p-3 border border-gray-200 rounded-xl text-center focus:ring-2 focus:ring-[#3EBAB9] focus:border-transparent"
                      />
                      <span className="text-gray-600 font-medium">kg</span>
                    </div>
                  </div>

                  {materials.length > 1 && (
                    <button
                      onClick={() => removeMaterial(index)}
                      className="self-start text-red-500 hover:text-red-700 font-bold text-xl md:self-center"
                      aria-label="Remove material"
                    >
                      ×
                    </button>
                  )}
                </div>
              ))}
            </div>

            <button
              onClick={addMaterial}
              className="mt-6 w-full bg-gradient-to-r from-[#1D558E] to-[#3EBAB9] text-white py-3 rounded-xl hover:opacity-90 transition-all font-medium"
            >
              + Add Another Material
            </button>
          </div>

          {/* Results Section */}
          <div className="space-y-6">
            {/* Main Result */}
            <div className="bg-gradient-to-br from-[#1D558E] via-[#3EBAB9] to-[#8CE4B5] text-white p-6 sm:p-8 rounded-2xl shadow-lg text-center">
              <Globe className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Total CO₂ Saved</h3>
              <div className="text-5xl font-bold mb-2">
                {totalCO2Saved.toFixed(1)}
              </div>
              <div className="text-xl opacity-90">kg CO₂</div>
            </div>

            {/* Equivalents */}
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-center">
                That's equivalent to...
              </h3>

              <div className="space-y-4">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between p-4 bg-[#8CE4B5]/20 rounded-lg">
                  <div className="flex items-center">
                    <TreePine className="w-6 h-6 text-[#3EBAB9] mr-3" />
                    <span className="font-medium">Trees planted</span>
                  </div>
                  <span className="text-2xl font-bold text-[#3EBAB9]">
                    {equivalents.trees.toFixed(1)}
                  </span>
                </div>

                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between p-4 bg-[#1D558E]/10 rounded-lg">
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">🚗</span>
                    <span className="font-medium">Km of driving avoided</span>
                  </div>
                  <span className="text-2xl font-bold text-[#1D558E]">
                    {equivalents.drivingKm.toFixed(0)}
                  </span>
                </div>

                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between p-4 bg-[#3EBAB9]/10 rounded-lg">
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">💡</span>
                    <span className="font-medium">Hours of LED lighting</span>
                  </div>
                  <span className="text-2xl font-bold text-[#3EBAB9]">
                    {equivalents.lightBulbHours.toFixed(0)}
                  </span>
                </div>
              </div>
            </div>

            {/* Educational Info */}
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-lg font-bold mb-4">💡 Did you know?</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  • Recycling 1 kg of aluminum saves 9 kg of CO₂ emissions
                </li>
                <li>• Paper recycling saves 3.3 kg CO₂ per kg of paper</li>
                <li>• Electronic waste recycling prevents 4 kg CO₂ per kg</li>
                <li>• Every kg of CO₂ saved helps fight climate change!</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 bg-gradient-to-r from-[#1D558E] via-[#3EBAB9] to-[#8CE4B5] text-white p-6 sm:p-8 rounded-2xl text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Make an Impact?</h2>
          <p className="text-lg sm:text-xl mb-6 opacity-90">
            Start recycling with Mint Rewards and earn points while saving the
            planet!
          </p>
          <button className="bg-white text-[#1D558E] px-6 sm:px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
            Download the App
          </button>
        </div>
      </div>
    </div>
  );
};

export default CO2Calculator;
