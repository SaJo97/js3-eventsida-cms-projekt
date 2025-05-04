import { cn } from "@/lib/utils"
import { urlFor } from "@/sanity/lib/image"
import Image from "next/image"

export const Hero = ({headline, subtitle, image}) => {
  const opacityValue = image?.darken ? image.darken / 100 : 0
  return (
    <header className="h-96 flex flex-col justify-center items-center text-center relative" aria-label={`Hero section with headline: ${headline}`}>
      <h1 className={cn("text-4xl md:text-6xl font-bold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent py-2 relative z-20",
        image && "text-white"
      )}>{headline}</h1>
      {
        image && (
          <>
            <Image className="absolute w-full h-full object-cover z-0" src={urlFor(image.asset).url()} alt={image.alt} width={1080} height={900}/>
            <div className="bg-black absolute z-10 inset-0" style={{opacity: opacityValue}}/>
          </>
        )
      }
      {subtitle && (
        <h2 className="text-xl md:text-2xl font-semibold text-white relative z-20">{subtitle}</h2>
      )}
    </header>
  )
}