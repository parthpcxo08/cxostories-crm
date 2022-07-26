import audience from "../data/audience";
import panel from "../data/panel";
import useWithTag from "../util/useWithTag";

export default {
  name: "panelist",
  title: "Panelist",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required().error("Please enter panelist name"),
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
        Rule.required().error("Please enter panelist title"),
    },
    {
      name: "company",
      title: "Company",
      type: "string",
      validation: (Rule) => Rule.required().error("Please enter company"),
    },
    {
      name: "linkedin",
      title: "LINKEDIN",
      type: "url",
      validation: (Rule) => [
        Rule.required().error("Please enter linkedin url"),
        Rule.uri().error("Please enter valid url"),
      ],
    },
    {
      name: "industry",
      title: "Industry",
      type: "string",
      description: "OPTIONAL",
    },
    {
      name: "region",
      title: "Region",
      type: "string",
    },
    {
      name: "audience",
      title: "Audience",
      description: "OPTIONAL",
      type: "tags",
      options: {
        predefinedTags: useWithTag(audience),
        allowCreate: false,
      },
    },

    {
      name: "panel",
      title: "Panel",
      description: "OPTIONAL",
      type: "tag",
      options: {
        predefinedTags: useWithTag(panel),
        allowCreate: false,
      },
    },
    {
      name: "diverse",
      title: "Diverse",
      description: "OPTIONAL",
      type: "boolean",
      initialValue: false,
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
      title: "name",
      post: "company",
      email : 'email',
      media: "image.asset",
    },
    prepare(selection) {
      const { title, post, email, media } = selection
      
      return {
        title: title,
        subtitle: (`${post}-${email}`),
        media : media
      }
    }
  },
};
