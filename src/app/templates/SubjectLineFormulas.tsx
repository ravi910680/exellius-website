export default function SubjectLineFormulas() {
  const subjectLines = [
    "{First Name}, quick question about {Company}",
    "How {Company} is handling {Industry Challenge}",
    "{First Name}, a tip to improve {Metric}",
    "Reducing {Pain Point} for {Industry} teams",
    "{Mutual Connection} recommended I reach out",
  ]

  return (
    <section className="w-full bg-white py-12 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          5 High-Performing Subject Line Formulas
        </h2>

        {/* List */}
        <ul className="space-y-3">
          {subjectLines.map((line, idx) => (
            <li
              key={idx}
              className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-gray-800 text-sm hover:bg-gray-100 transition"
            >
              {line}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
