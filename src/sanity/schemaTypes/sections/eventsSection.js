import { defineField, defineType } from "sanity";


export const eventsSection = defineType({
  name: "eventsSection",
  type: "object",
  fields: [
    defineField({
      name: "title",
      type: "string",
      initialValue: "All Events"
    })
  ]
})