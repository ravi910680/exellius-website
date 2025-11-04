"use client";

import { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import CryptoJS from "crypto-js";
import TechnologyOptions from "./technologyOptions.json";

const SECRET_KEY = "4b227777d4dd1fc61c6f884f48641d02";

// --- START: Technology Data Structure ---
interface TechnologyNode {
  value: string;
  label: string;
  children?: TechnologyNode[];
}

const TECHNOLOGY_DATA: TechnologyNode[] = TechnologyOptions as TechnologyNode[];

function getFlatTechnologyList(data: TechnologyNode[]): string[] {
  let list: string[] = [];
  data.forEach(category => {
    if (category.children) {
      list = list.concat(category.children.map(child => child.label));
    }
  });
  return list;
}

const FLAT_TECHNOLOGY_LIST = getFlatTechnologyList(TECHNOLOGY_DATA);
// --- END: Technology Data Structure ---

// ---------- Encryption helpers ----------
function encryptData(data: unknown): string | null {
  try {
    return CryptoJS.AES.encrypt(JSON.stringify(data), SECRET_KEY).toString();
  } catch (error) {
    console.error("Encryption Error:", error);
    return null;
  }
}

function decryptData<T>(encryptedData: string): T | null {
  try {
    const decryptedText = CryptoJS.AES.decrypt(encryptedData, SECRET_KEY).toString(CryptoJS.enc.Utf8);
    return decryptedText ? (JSON.parse(decryptedText) as T) : null;
  } catch (error) {
    console.error("Decryption Error:", error);
    return null;
  }
}

interface LeadResult {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  company_name?: string;
}

interface ApiResponse {
  data: LeadResult[];
}

export default function WebsiteTechChecker() {
  const [technology, setTechnology] = useState("");
  const [results, setResults] = useState<LeadResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  // --- New: Daily Search Limit ---
  const [showLimitAlert, setShowLimitAlert] = useState(false);
  const MAX_DAILY_SEARCHES = 3;

  useEffect(() => {
    const today = new Date().toDateString();
    const savedData = localStorage.getItem("techCheckerSearchData");

    if (savedData) {
      const { date, count } = JSON.parse(savedData);
      if (date !== today) {
        localStorage.setItem("techCheckerSearchData", JSON.stringify({ date: today, count: 0 }));
      }
    } else {
      localStorage.setItem("techCheckerSearchData", JSON.stringify({ date: today, count: 0 }));
    }
  }, []);

  const incrementSearchCount = () => {
    const today = new Date().toDateString();
    const savedData = localStorage.getItem("techCheckerSearchData");
    if (savedData) {
      const data = JSON.parse(savedData);
      if (data.date === today) {
        data.count += 1;
        localStorage.setItem("techCheckerSearchData", JSON.stringify(data));
        return data.count;
      } else {
        localStorage.setItem("techCheckerSearchData", JSON.stringify({ date: today, count: 1 }));
        return 1;
      }
    }
    localStorage.setItem("techCheckerSearchData", JSON.stringify({ date: today, count: 1 }));
    return 1;
  };

  const getSearchCount = () => {
    const savedData = localStorage.getItem("techCheckerSearchData");
    if (savedData) {
      const data = JSON.parse(savedData);
      const today = new Date().toDateString();
      return data.date === today ? data.count : 0;
    }
    return 0;
  };

  const handleSearch = async () => {
    setShowSuggestions(false);

    if (!technology.trim()) {
      setError("Please enter a technology name (e.g., Shopify, Klaviyo).");
      return;
    }

    const currentCount = getSearchCount();
    if (currentCount >= MAX_DAILY_SEARCHES) {
      setShowLimitAlert(true);
      return;
    }

    setError("");
    setLoading(true);
    setShowLimitAlert(false);

    const filters = {
      includeIndustry: [],
      excludeIndustry: [],
      includeemployeeCount: [],
      includeRevenue: [],
      includemanagmentRole: [],
      includeCompany: [],
      excludeCompany: [],
      includedepartmentKeyword: [],
      includePersonalCountry: [],
      excludePersonalCountry: [],
      includecompanyLocation: [],
      excludeCompanyLocation: [],
      includejobTitles: [],
      excludeJobTitles: [],
      includetechnology: [technology],
      foundingYear: [],
      funding: [],
      perCompany: 1,
    };

    const page = 1;
    const currentLimit = 10;

    const encryptedData = encryptData({
      ...filters,
      page,
      limit: currentLimit,
      sort_by: "first_name",
      sort_order: "asc",
    });

    const requestOptions: RequestInit = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
      },
      body: JSON.stringify({ data: encryptedData }),
    };

    try {
      const response = await fetch(
        "https://api.app.exellius.com/api/leads/getPeopleLeads/",
        requestOptions
      );

      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

      const result = await response.json();
      const decrypted = decryptData<ApiResponse>(result.data);
      setResults(decrypted?.data || []);
      incrementSearchCount();
    } catch (error) {
      console.error("API Error:", error);
      setError("Failed to fetch data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setTechnology(value);

    if (value.trim().length > 0) {
      const filtered = FLAT_TECHNOLOGY_LIST.filter(tech =>
        tech.toLowerCase().startsWith(value.toLowerCase())
      ).slice(0, 8);
      setSuggestions(filtered);
      setShowSuggestions(filtered.length > 0);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
    setError("");
  };

  const handleSuggestionClick = (tech: string) => {
    setTechnology(tech);
    setSuggestions([]);
    setShowSuggestions(false);
  };

  return (
    <section className="relative w-full py-24 pt-60 bg-[#fcf4fc] overflow-hidden text-center">
      {/* Backgrounds */}
      <Image src="/bg_top.png" alt="Top Background" width={1920} height={400} className="absolute top-0 left-0 w-full object-cover z-0" />
      <Image src="/bg_bottom.png" alt="Bottom Background" width={1920} height={400} className="absolute bottom-0 left-0 w-full object-cover z-0" />
      <div className="absolute inset-0 bg-[url('/grid-lines.svg')] bg-cover opacity-10 pointer-events-none z-0" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <p className="text-md text-[#9856F2] font-semibold mb-2 pb-10">
          Website Technology Checker
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Analyze the Technology Stack <br />
          <span className="text-[#9856F2]">Behind Any Website</span>
        </h1>

        <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
          Run a free, instant technology-based email finder to discover companies using specific tools.
        </p>

        {/* Input + Button */}
        <div className="flex justify-center flex-col items-center">
          <div className="relative w-full max-w-3xl">
            <div className="flex w-full bg-white rounded-lg shadow-sm overflow-hidden border border-[#e0d0f5]">
              <input
                type="text"
                placeholder="Enter Technology (e.g., Shopify, Magento, Klaviyo)"
                value={technology}
                onChange={handleChange}
                onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                onFocus={() =>
                  technology.trim().length > 0 &&
                  setSuggestions(
                    FLAT_TECHNOLOGY_LIST.filter(tech =>
                      tech.toLowerCase().startsWith(technology.toLowerCase())
                    ).slice(0, 8)
                  ) &&
                  setShowSuggestions(true)
                }
                className="flex-1 py-4 px-4 text-sm outline-none text-black bg-transparent"
              />
              <button
                onClick={handleSearch}
                className="bg-[#9856F2] hover:bg-[#7e48d6] text-white font-semibold text-sm px-6"
                disabled={loading}
              >
                {loading ? "Checking..." : "Check Now"}
              </button>
            </div>

            {/* Autocomplete Dropdown */}
            {showSuggestions && suggestions.length > 0 && (
              <ul className="absolute left-0 right-0 mt-1 bg-white border border-[#e0d0f5] rounded-lg shadow-lg max-h-60 overflow-y-auto z-20 text-left">
                {suggestions.map((tech, index) => (
                  <li
                    key={index}
                    onClick={() => handleSuggestionClick(tech)}
                    className="px-4 py-2 cursor-pointer hover:bg-[#f3effd] text-gray-800 text-sm truncate"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {error && <p className="text-red-500 text-sm mt-3">{error}</p>}

          {/* Alert after limit reached */}
          {showLimitAlert && (
            <div className="mt-4 border border-yellow-300 bg-yellow-50 text-yellow-700 px-4 py-3 rounded-md text-sm flex items-start gap-2 max-w-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 mt-0.5 text-yellow-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3.75m0 3.75h.008v.008H12v-.008zM10.343 3.94c.873-1.519 3.04-1.519 3.913 0l7.013 12.194A2.25 2.25 0 0119.263 19.5H4.737a2.25 2.25 0 01-1.993-3.366L9.757 3.94z"
                />
              </svg>
              <p>
                You reached the maximum number of trial calls today. Please{" "}
                <a href="https://app.exellius.com/signup" className="underline text-yellow-800">
                  create a free account
                </a>{" "}
                or{" "}
                <a href="https://app.exellius.com/login" className="underline text-yellow-800">
                  sign in
                </a>{" "}
                to continue using Exellius.
              </p>
            </div>
          )}
        </div>

        {/* Results */}
        <div className="max-w-5xl mx-auto space-y-4 mt-12">
          {results.slice(0, 2).map((res) => (
            <div
              key={res.id}
              className="flex justify-between items-center bg-white p-4 rounded-lg shadow-sm border border-[#e0d0f5]"
            >
              <div className="text-left">
                <p className="text-gray-900 font-semibold">
                  {res.first_name} {res.last_name}
                </p>
                {res.company_name && (
                  <p className="text-gray-500 text-sm">{res.company_name}</p>
                )}
              </div>
              <p className="text-gray-700 text-sm">{res.email}</p>
              <button
                onClick={() => window.open("https://app.exellius.com/signup", "_blank")}
                className="bg-[#9856F2] hover:bg-[#7e48d6] text-white text-sm font-medium px-3 py-1 rounded"
              >
                More Details
              </button>
            </div>
          ))}

          {results.length > 2 && (
            <div className="flex justify-center mt-4">
              <button
                onClick={() => window.open("https://app.exellius.com/signup", "_blank")}
                className="bg-[#9856F2] hover:bg-[#7e48d6] text-white text-sm font-semibold px-6 py-3 rounded-lg shadow-md"
              >
                Get Free 10 Credits – Sign Up
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
