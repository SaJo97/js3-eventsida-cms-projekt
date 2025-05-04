import { DocumentTextIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";



export const eventType = defineType({
  name: "event",
  title: "Event",
  type: "document",
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: "title",
      type: "string"
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    }),
    defineField({
      name: "description",
      type: "blockContent"
    }),
    defineField({
      name: "date",
      type: "datetime"
    }),
    defineField({
      name: "image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alt text',
        })
      ]
    }),
    defineField({
      name: "location",
      type: "string"
    })
  ]
})