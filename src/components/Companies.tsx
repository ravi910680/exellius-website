"use client"

import Image from "next/image"
import { useEffect, useRef } from "react"

export default function UsedByCompanies() {
  const containerRef = useRef<HTMLDivElement>(null)
  const scrollRef = useRef<number | null>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Clone children for seamless scrolling
    const children = Array.from(container.children) as HTMLElement[]
    if (children.length === 0) return

    // Duplicate children to allow infinite scroll effect
    children.forEach(child => {
      const clone = child.cloneNode(true)
      container.appendChild(clone)
    })

    let scrollPos = 0
    const scrollSpeed = 2 // pixels per frame; adjust speed here

    function step() {
      if (!container) return
      scrollPos += scrollSpeed
      if (scrollPos >= container.scrollWidth / 2) {
        // Reset scroll to start for infinite loop
        scrollPos = 0
      }
      container.scrollLeft = scrollPos
      scrollRef.current = requestAnimationFrame(step)
    }

    scrollRef.current = requestAnimationFrame(step)

    return () => {
      if (scrollRef.current) {
        cancelAnimationFrame(scrollRef.current)
      }
    }
  }, [])

  return (
    <>
      <style>{`
        /* Hide scrollbar but maintain scrolling */
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}</style>

      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl sm:text-2xl font-semibold text-gray-800 mb-6">
            Used by Companies Worldwide
          </h2>
          <p className="text-md text-gray-600 mb-10">
            Startups to global enterprises use Exellius for strategic Amazon seller intelligence
          </p>

          <div
            ref={containerRef}
            className="flex items-center gap-10 overflow-x-auto hide-scrollbar whitespace-nowrap"
            style={{ scrollBehavior: "auto", padding: "0 2rem" }}
          >
            {Array.from({ length: 18 }).map((_, i) => (
              <div
                key={i}
                className="flex-shrink-0 grayscale hover:grayscale-0 transition duration-300 inline-block"
                style={{ paddingLeft: i === 0 ? 0 : "1.5rem", paddingRight: i === 17 ? 0 : "1.5rem" }}
              >
                <Image
                  src={`/logos/company-${i + 1}.png`}
                  alt={`Company ${i + 1}`}
                  width={100}
                  height={60}
                  className="object-contain w-[100px] h-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
