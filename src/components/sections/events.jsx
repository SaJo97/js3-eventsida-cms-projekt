import { getEvents } from "@/sanity/lib/api";
import EventsFilter from "@/components/EventsFilter";

const EventsPage = async ({ title = "Events" }) => {
  const events = await getEvents();

  return (
    <section className="wrapper">
      <h2 className="text-4xl mb-10 font-bold">{title}</h2>
      {/* Pass events to client-side filter component */}
      <EventsFilter events={events} />
    </section>
  );
};

export default EventsPage;

