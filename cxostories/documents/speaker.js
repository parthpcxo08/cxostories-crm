export default {
  name: "speaker",
  title: "Speaker",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "email",
      title: "Email",
      type: "string",
      validation: (Rule) => [Rule.email().error('Please enter valid email'),Rule.required().error("Enter speaker email")],
    },
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required().error("Please enter speaker title"),
    },
    {
      name: "company",
      title: "Company",
      type: "string",
      validation: (Rule) =>
        Rule.required().error("Please enter speaker comnpany"),
    },
    {
      name: "linkedin",
      title: "LinkedIn",
      type: "url",
      validation: (Rule) => Rule.uri().error("Please enter valid url"),
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      description: "OPTION",
    },
  ],
  preview: {
    select: {
      name: "name",
      email: "email",
      company: "company",
      media: "image",
    },
    prepare(selection) {
      const { name, email, company, media } = selection;

      return {
        title: name ? name : email ? email : "Unknown",
        subtitle: company,
        media: media,
      };
    },
  },
};
