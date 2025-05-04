
import { sanityFetch } from "./live"
import { GET_EVENT_QUERY, GET_EVENTS_QUERY, GET_PAGE_QUERY, GET_PAGES_QUERY } from "./queries"


export const getEvents = async () => {

  const {data} = await sanityFetch({
    query: GET_EVENTS_QUERY // Executes the query to get events
  })
  return data // Returns the fetched data
}

export const getEventBySlug = async ({slug}) => {

  const {data} = await sanityFetch({
    query: GET_EVENT_QUERY, // Executes the query to get a specific event
    params: {slug} // Passes the slug as a parameter
  })
  return data
}

export const getPages = async () => {

  const {data} = await sanityFetch({
    query: GET_PAGES_QUERY
  })
  return data
}

export const getPageBySlug = async (slug) => {

  const {data} = await sanityFetch({
    query: GET_PAGE_QUERY,
    params: {slug}
  })
  return data
}