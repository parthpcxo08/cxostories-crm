export default {
  name: "sponsor",
  title: "Sponsor",
  type: "document",
  validation: (Rule) => Rule.required(),
  fields: [
    {
      name: "name",
      nametitle: "Name",
      type: "string",
      validation: (Rule) => Rule.required().error("Please enter sponsor name"),
    },
    {
      name: "website",
      title: "Website",
      type: "url",
      validation: (Rule) => [
        Rule.required().error("Please enter sponsor website"),
        Rule.uri().error("Please enter valid url"),
      ],
    },
    {
      name: "linkedin",
      title: "LinkedIn",
      type: "url",
      validation: (Rule) => [
        Rule.required().error("Please enter sponsor linkedin"),
        Rule.uri().error("Please enter valid url"),
      ],
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      description : "OPTIONAL"
    },
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "website",
      media: "image.asset",
    },
  },
};
