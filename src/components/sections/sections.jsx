import EventsPage from "./events"
import { Hero } from "./hero"

export const Sections = ({sections}) => {

  console.log(sections)

  return (
    <div className="space-y-20">
      {
        sections && sections.map(section => {
          switch(section._type) {
            case "heroSection":
              return <Hero  key={section._key} headline={section.headline} subtitle={section.subtitle} image={section.image}/>
            case "eventsSection":
              return <EventsPage key={section._key} title={section.title}/>
              default:
                return null
          }
        })
      }
    </div>
  )
}