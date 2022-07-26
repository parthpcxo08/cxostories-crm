import audience from "../data/audience";
import useWithTag from "../util/useWithTag";
export default {
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    {
      name: "markdown",
      type: "markdown",
      title: "Testimonial",
    },
    // {
    //   name: "testimonial",
    //   type: "array",
    //   title: "Testimonial",
    //   of: [
    //     {
    //       type: "block",
    //     },
    //     {
    //       name: "testimonial-content-image",
    //       title: "Image",
    //       type: "image",
    //     },
    //   ],
    // },
    {
      name: "name",
      title: "Name",
      type: "string",
      //   validation: (Rule) => Rule.required().error(`Please enter name`),
    },
    {
      name: "email",
      title: "Email",
      type: "email",
      validation: (Rule) => Rule.required().error("Plase enter email address"),
    },
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required().error("Please enter title"),
    },
    {
      name: "linkedin",
      title: "User Linkedin",
      type: "url",
      validation: (Rule) => [
        Rule.required().error("Please enter user linkedin"),
        Rule.uri().error("Please enter valid url"),
      ],
    },
    {
      name: "company",
      title: "Company",
      type: "string",
      validation: (Rule) => Rule.required().error("Please enter company"),
    },
    {
      name: "industry",
      title: "Industry",
      description: "OPTIONAL",
      type: "string",
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
};
