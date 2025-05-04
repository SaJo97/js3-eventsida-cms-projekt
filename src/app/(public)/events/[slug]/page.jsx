import { getEventBySlug } from "@/sanity/lib/api"
import { client } from "@/sanity/lib/client"
import { GET_EVENT_QUERY } from "@/sanity/lib/queries"
import { PortableText } from "next-sanity"
import Image from "next/image"
import { notFound } from "next/navigation"

export const generateMetadata = async ({params}) => {
  const {slug} = await params

  const event = await client.fetch(GET_EVENT_QUERY, {slug})

  return {
    title: event.title
  }
}

const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', hour12: false };
  return new Date(dateString).toLocaleString('en-US', options);
}


const EventDetails = async ({params}) => {

  const {slug} = await params

  const event = await getEventBySlug({slug})

  if(!event) return notFound()


  return (
    <div className="wrapper" aria-label={`Details for event: ${event.title}`}>
      <div className="w-full relative max-w-full">
        <Image 
        className="object-cover rounded-xl max-h-140" 
        src={event.image.url} 
        alt={event.image.alt} 
        layout="responsive"
        width={1080}
        height={900}
        aria-label={`Image for event: ${event.title}`}
        /> 
        <h1 className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold bg-black/30 p-4 rounded-xl">{event.title}</h1>
      </div>
      <div className="mt-4">
        <p className="text-lg font-medium">{formatDate(event.date)}</p>
        <p className="text-lg">{event.location}</p>
      </div>
      <div className="prose prose-lg text-slate-300 prose-ul:list-disc break-words mt-4">
        <PortableText value={event.description}/>
      </div>
      
    </div>
  )
}
export default EventDetails