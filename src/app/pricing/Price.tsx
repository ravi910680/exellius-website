"use client"

import { useState } from "react"

// Helper function to format numbers with commas
const formatNumber = (num: number) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

// Function to calculate price based on credits (simplified for example)
// You would replace this with your actual pricing logic from your backend
const calculatePrice = (emailCredits: number, phoneCredits: number): string => {
  // Example pricing tiers:
  // Email: $55 per 1000 credits
  // Phone: $15 per 1000 credits
  const emailPricePerThousand = 55;
  const phonePricePerThousand = 15;

  const calculatedEmailCost = (emailCredits / 1000) * emailPricePerThousand;
  const calculatedPhoneCost = (phoneCredits / 1000) * phonePricePerThousand;

  return (calculatedEmailCost + calculatedPhoneCost).toFixed(2);
}

export default function CreditPurchase() {
  const [emailCredits, setEmailCredits] = useState(1000)
  const [phoneCredits, setPhoneCredits] = useState(1000)

  // Calculate the total price based on current slider values
  const totalPrice = calculatePrice(emailCredits, phoneCredits);

  // Define the theme color for easy use
  const themeColor = '#58328c';

  return (
    <section className="min-h-screen bg-gray-50 py-40 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-6xl mx-auto text-center">
        {/* Header Section */}
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
          Access Exellius data via API.
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          Exellius provides a flexible way to access our email and phone finding and verification services at scale. Determine how many credits you need,
          and only pay for the credits you're planning to spend.
        </p>

        {/* Main Content Area: Sliders and Summary */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          {/* Left Section: Credit Sliders */}
          <div className="flex-1 w-full bg-white p-8 rounded-lg shadow-xl">
            <h3 className="text-xl font-semibold text-gray-800 mb-8 text-left">
              How many credits do you want to purchase?
            </h3>

            {/* Email Credits Slider */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <label htmlFor="email-credits" className="text-gray-700 font-medium text-lg">
                  Email credits
                </label>
                <span className="text-gray-900 font-semibold text-xl">
                  {formatNumber(emailCredits)}
                </span>
              </div>
              <input
                type="range"
                id="email-credits"
                min="1000"
                max="1000000" // Max 1 million credits
                step="1000" // Increment by 1000
                value={emailCredits}
                onChange={(e) => setEmailCredits(Number(e.target.value))}
                // Custom styling for the range input track to show progress
                className="w-full h-2 rounded-lg appearance-none cursor-pointer range-lg focus:outline-none focus:ring-2"
                style={{
                  background: `linear-gradient(to right, ${themeColor} 0%, ${themeColor} ${((emailCredits - 1000) / (1000000 - 1000)) * 100}% , #E0F2FE ${((emailCredits - 1000) / (1000000 - 1000)) * 100}% , #E0F2FE 100%)`,
                  borderColor: themeColor, // For focus ring
                  accentColor: themeColor // For thumb color (if supported by browser/tailwind config)
                }}
              />
              <div className="flex justify-between text-sm text-gray-500 mt-2 px-1">
                <span>1,000</span>
                <span>10,000</span>
                <span>100,000</span>
                <span>1M.</span>
              </div>
            </div>

            {/* Phone Credits Slider */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <label htmlFor="phone-credits" className="text-gray-700 font-medium text-lg">
                  Phone credits
                </label>
                <span className="text-gray-900 font-semibold text-xl">
                  {formatNumber(phoneCredits)}
                </span>
              </div>
              <input
                type="range"
                id="phone-credits"
                min="1000"
                max="1000000" // Max 1 million credits
                step="1000" // Increment by 1000
                value={phoneCredits}
                onChange={(e) => setPhoneCredits(Number(e.target.value))}
                // Custom styling for the range input track to show progress
                className="w-full h-2 rounded-lg appearance-none cursor-pointer range-lg focus:outline-none focus:ring-2"
                style={{
                  background: `linear-gradient(to right, ${themeColor} 0%, ${themeColor} ${((phoneCredits - 1000) / (1000000 - 1000)) * 100}% , #E0F2FE ${((phoneCredits - 1000) / (1000000 - 1000)) * 100}% , #E0F2FE 100%)`,
                  borderColor: themeColor, // For focus ring
                  accentColor: themeColor // For thumb color (if supported by browser/tailwind config)
                }}
              />
              <div className="flex justify-between text-sm text-gray-500 mt-2 px-1">
                <span>1,000</span>
                <span>10,000</span>
                <span>100,000</span>
                <span>1M.</span>
              </div>
            </div>

            <p className="text-sm text-gray-500 mt-6 text-left">
              Email credits are used to find emails, and Phone credits are used to find phone numbers.
            </p>
          </div>

          {/* Right Section: Bulk Purchase Summary */}
          <div className="flex-1 w-full bg-white p-8 rounded-lg shadow-xl border border-gray-200">
            <h3 className="text-gray-600 text-lg font-medium mb-6">
              Your Bulk credits purchase
            </h3>
            <p className="text-5xl font-extrabold text-gray-900 mb-8">
              ${totalPrice} <span className="text-3xl font-semibold text-gray-500">USD</span>
            </p>

            <div className="border-t border-b border-gray-200 py-6 mb-8">
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-700 font-medium text-lg">
                  {formatNumber(emailCredits)} Email credits
                </span>
                <span className="text-gray-900 font-semibold text-xl">
                  ${((emailCredits / 1000) * 55).toFixed(2)} USD
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700 font-medium text-lg">
                  {formatNumber(phoneCredits)} Phone credits
                </span>
                <span className="text-gray-900 font-semibold text-xl">
                  ${((phoneCredits / 1000) * 15).toFixed(2)} USD
                </span>
              </div>
            </div>

            <p className="text-sm text-gray-500 mb-8">
              Credits can be used up to 12 months from purchase.
            </p>

            <button
              className="w-full text-white font-bold py-4 rounded-md text-lg transition duration-300 ease-in-out hover:bg-[#4a2b75]"
              style={{ backgroundColor: themeColor }} // Adjust hover color if needed
            >
              Confirm purchase
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}