
import { defineArrayMember, defineField, defineType } from "sanity";

export const pageType = defineType({
  name: "page",
  title: "Page",
  type: "document",
 
  groups: [
    {
      name: "seo",
      title: "SEO"
    }
  ],
  fields: [
    defineField({
      name: "title",
      type: "string",
      group: "seo",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title",
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Meta - description",
      type: "string",
      group: "seo",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "sections",
      type: "array",
      of: [
        defineArrayMember({type: "heroSection"}),
        defineArrayMember({type: "eventsSection"}),
      ]
    })
  ]
});
