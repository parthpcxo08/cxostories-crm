import countries from "../data/contries";
import useWithTag from "../util/useWithTag";
export default {
  name: "location",
  title: "Location",
  type: "document",
  fields: [
    {
      name: "city",
      title: "City",
      type: "string",
      validation: (Rule) => [
        Rule.required().error("Please enter city"),
        Rule.max(100).error("City name must be less than 100 characters long"),
      ],
    },
    {
      name: "country",
      title: "Country",
      type: "tag",
      validation: (Rule) => Rule.required().error("Please select the country."),
      options: {
        predefinedTags: useWithTag(countries),
        allowCreate: false,
      },
    },
    {
      name: "image",
      type: "image",
      title: "Image",
      description: "OPTIONAL",
    },
  ],
  preview: {
    select: {
      title: "city",
      subtitle: "country",
      media: "image.asset",
    },
    prepare(selection) {
      const { title, subtitle, media } = selection;
      let location = subtitle? subtitle.label : ""
      return {
        title: title,
        subtitle: location,
        media: media,
      };
    },
  },
};
