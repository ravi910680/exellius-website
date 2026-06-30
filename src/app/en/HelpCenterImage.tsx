import Image from "next/image"

interface HelpCenterImageProps {
  src: string
  alt: string
  caption?: string
  className?: string
}

export default function HelpCenterImage({
  src,
  alt,
  caption,
  className = "",
}: HelpCenterImageProps) {
  return (
    <div className="mt-8">
      <Image
        src={src}
        alt={alt}
        width={1}
        height={1}
        sizes="100vw"
        className={`h-auto w-auto rounded-xl border border-[#ECE6FF] ${className}`}
      />

      {caption && (
        <p className="mt-3 text-center text-sm italic text-gray-500">
          {caption}
        </p>
      )}
    </div>
  )
}