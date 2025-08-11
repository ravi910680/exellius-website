import { useState, useEffect, useRef } from "react"

type HelpCenterHeroProps = {
  topics: {
    category: string;
    articles: { title: string }[];
  }[];
  onSelect: (title: string) => void;
};

export default function HelpCenterHero({ topics, onSelect }: HelpCenterHeroProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [results, setResults] = useState<{ category: string; title: string }[]>([])
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!searchQuery.trim()) {
      setResults([])
      return
    }

    const trimmedQuery = searchQuery.trim().toLowerCase()
    const matchedArticles: { category: string; title: string }[] = []

    topics.forEach((topic) => {
      topic.articles.forEach((article) => {
        if (article.title.toLowerCase().includes(trimmedQuery)) {
          matchedArticles.push({ category: topic.category, title: article.title })
        }
      })
    })

    setResults(matchedArticles)
  }, [searchQuery, topics])

  // Outside click handler to close dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setSearchQuery("") // clear input and hide dropdown
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <section className="bg-[#F8F9FC] border-b border-gray-200">
      <div className="max-w-3xl mx-auto px-6 py-20 flex flex-col items-center text-center pt-40 relative">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Help Center</h1>
        <p className="mt-4 text-lg text-gray-600 max-w-xl">
          Find answers to your questions, guides, and troubleshooting tips.
        </p>

        {/* Wrap input + results in relative container with ref */}
        <div className="mt-8 w-full relative" ref={containerRef}>
          <div className="flex shadow-sm rounded-lg overflow-hidden border border-gray-300 bg-white">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 px-4 py-3 text-gray-700 focus:outline-none"
            />
          </div>

          {searchQuery.trim() && (
            <div className="absolute left-0 right-0 bg-white border border-gray-300 rounded-md shadow-lg mt-1 max-h-64 overflow-y-auto z-50">
              {results.length > 0 ? (
                results.map((res, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      onSelect(res.title)
                      setSearchQuery("") // close dropdown after select
                    }}
                    className="w-full text-left px-4 py-3 border-b last:border-b-0 hover:bg-gray-100 transition"
                  >
                    <p className="text-sm text-gray-500">{res.category}</p>
                    <h3 className="text-base font-semibold">{res.title}</h3>
                  </button>
                ))
              ) : (
                <p className="text-gray-500 text-center p-4">No results found.</p>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
