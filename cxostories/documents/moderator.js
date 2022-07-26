export default {
  name: "moderator",
  title: "Moderator",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) =>
        Rule.required().error("Please enter moderator name"),
    },
    {
      name: "email",
      title: "Email",
      type: "string",
      validation: (Rule) => [
        Rule.required().error("Please enter email address"),
        Rule.email().error("Please enter valid email address"),
      ],
    },
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) =>
        Rule.required().error("Please enter moderator title"),
    },
    {
      name: "company",
      title: "Company",
      type: "string",
      description: "OPTIONAL",
    },
    {
      name: "bio",
      title: "Bio",
      type: "text",
      description: "OPTIONAL",
    },
    {
      name: "linkedin",
      title: "LINKEDIN",
      type: "url",
      description: "OPTIONAL",
      validation: (Rule) => Rule.uri().error("Please enter valid url"),
    },
    {
      name: "image",
      title: "Image",
      description: "OPTIONAL",
      type: "image",
    },
    ],
    preview: {
        select: {
            title: 'name', 
            subtitle :'title',
            media :'image.asset'
      }
  }
};
