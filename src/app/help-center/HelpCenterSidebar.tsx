"use client"

import { useState } from "react"

interface HelpCenterSidebarProps {
  topics: {
    category: string
    articles: { title: string }[]
  }[]
  selectedTitle: string
  onSelect: (title: string) => void
}

export default function HelpCenterSidebar({
  topics,
  selectedTitle,
  onSelect,
}: HelpCenterSidebarProps) {
  // Track which topic categories are expanded
  const [expandedCategories, setExpandedCategories] = useState<string[]>([])

  const toggleCategory = (category: string) => {
    setExpandedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    )
  }

  return (
    <aside className="w-64 bg-gray-50 border-r overflow-y-auto h-full">
      {topics.map((topic, idx) => {
        const isExpanded = expandedCategories.includes(topic.category)
        return (
          <div key={idx} className="px-4 py-2 border-b border-gray-200">
            {/* Topic Header */}
            <button
              onClick={() => toggleCategory(topic.category)}
              className="w-full flex justify-between items-center text-left font-semibold text-gray-700 text-sm py-1 hover:bg-gray-100 rounded"
            >
              <span>{topic.category}</span>
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${
                  isExpanded ? "rotate-90" : "rotate-0"
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* Articles List (submenu) */}
            {isExpanded && (
              <ul className="mt-2 ml-3 space-y-1">
                {topic.articles.map((article, aIdx) => (
                  <li key={aIdx}>
                    <button
                      onClick={() => onSelect(article.title)}
                      className={`w-full text-left px-2 py-1 rounded hover:bg-blue-100 text-sm ${
                        selectedTitle === article.title
                          ? "bg-blue-50 font-medium"
                          : "text-gray-700"
                      }`}
                    >
                      {article.title}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )
      })}
    </aside>
  )
}
