import useWithTag from "../util/useWithTag";
import language from "../data/language";
import webinarTypes from "../data/webinar_type";
import region from "../data/region";
import panel from "../data/panel";
import industry from "../data/industry";
import { MdOutlineWeb } from "react-icons/md";
import { format } from "date-fns";
import audience from "../data/audience";
import brands from "../data/brands";
export default {
  name: "webinar",
  title: "Webinar",
  type: "document",
  icon: MdOutlineWeb,
  fields: [
    {
      name: "published",
      title: "Published (OPTIONAL)",
      description: "Show on site?",
      type: "boolean",
      initialValue: false,
    },
    {
      name: "language",
      title: "Language (OPTIONAL)",
      type: "tag",
      options: {
        predefinedTags: [{label : '--NA--', value: ""},...useWithTag(language)],
        allowCreate: false,
        reactSelectOptions: {
          // isClearable: true,
        },
      },
    },
    {
      name: "vanity",
      title: "Vanity (OPTIONAL)",
      description: "vanity url?",
      type: "boolean",
      initialValue: false,
    },
    {
      name: "title",
      title: "Title",
      description: "CXOonline {LOCATION}",
      type: "string",
      validation: (Rule) => Rule.required().error("Please enter webinar title"),
    },
    {
      name: "type",
      title: "Type",
      type: "tag",
      description:
        "CXOonline, CIOonline, CISOonline, CFOonline, CMOonline, CXuncut, HRuncut",
      options: {
        predefinedTags: useWithTag(webinarTypes),
        allowCreate: false,
      },
    },
    {
      name: "region",
      title: "Region",
      type: "tag",

      options: {
        predefinedTags: useWithTag(region),
        allowCreate: false,
      },
    },
    {
      name: "industry",
      title: "Industry (OPTIONAL)",
      type: "tag",
      options: {
        predefinedTags: [{label : '--NA--', value: ""},...useWithTag(industry)],
        allowCreate: false,
        reactSelectOptions: {
          // isClearable: true,
        },
      },
    },
    {
      name: "location",
      title: "Location (OPTIONAL)",
      type: "reference",
      to: [{ type: "location"}],
      options: {
        // disableNew: true,
        layout: "tags",
      },
    },
    {
      name: "moderator",
      title: "Moderator",
      description: "OPTIONAL",
      type: "reference",

      to: [{ type: "moderator" }],
      options: {
        // disableNew: true,
      },
    },
    //   {
    //     name: "poll",
    //     title: "Poll",
    //     description: "OPTIONAL",
    //     type: "reference",

    //     to: [{ type: "poll" }],
    //     options: {
    //       // disableNew: true,
    //     },
    //   },
    {
      name: "keynote",
      title: "Keynote",
      description: "OPTIONAL",
      type: "KeynoteControl",
    },
    // {
    //   name: "keynote",
    //   title: "Keynote",
    //   description: "OPTIONAL",
    //   type: "reference",

    //   to: [{ type: "keynote" }],
    //   options: {
    //     // disableNew: true,
    //   },
    // },
    {
      name: "sponsors",
      title: "Sponsors",
      description: "OPTIONAL",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "sponsor" }],
          options: {
            // disableNew: true,
          },
        },
      ],
      validation: (Rule) => Rule.unique(),
    },
    {
      name: "brought_by",
      title: "Brought By",
      description: "OPTIONAL",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "sponsor" }],
          options: {
            // disableNew: true,
          },
        },
      ],
      validation: (Rule) => Rule.unique(),
    },
    {
      name: "sponsored_by",
      title: "Sponsors By",
      description: "OPTIONAL",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "sponsor" }],
          options: {
            // disableNew: true,
          },
        },
      ],
      validation: (Rule) => Rule.unique(),
    },
    {
      name: "panelists",
      title: "Panelists",
      description: "OPTIONAL",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "panelist" }],
          options: {
            // disableNew: true,
          },
        },
      ],
      validation: (Rule) => Rule.unique(),
    },
    {
      name: "speakers",
      title: "Speakers",
      description: "OPTIONAL",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "speaker" }],
          options: {
            // disableNew: true,
          },
        },
      ],
      validation: (Rule) => Rule.unique(),
    },
    {
      name: "date",
      title: "Webinar Date",
      type: "datetime",
      validation: (Rule) =>
        Rule.required().error("Please select the webinar date"),
      options: {
        dateFormat: "MM-DD-YYYY",
        timeFormat: "HH:mm",
      },
    },
    {
      name: "landing_page",
      title: "Landing Page",
      description: "OPTIONAl",
      type: "url",
    },
    {
      name: "vimeo_id",
      title: "Vimeo Id",
      description: "OPTIONAL",
      type: "number",
    },
    {
      name: "vimeo_link",
      title: "Private Link",
      description: "OPTIONAL",
      type: "url",
    },
    {
      name: "description",
      title: "Description (OPTIONAL)",
      type: "markdown",
      description: "Main content goes here..",
    },
    {
      name: "resources",
      title: "Resources (OPTIONAL)",
      type: "markdown",
      description: "Links to files",
    },
    {
      name: "panel",
      title: "Panel (OPTIONAL)",
      description: "Prediction Panel, WIT Panel, ...",
      type: "tag",
      options: {
        predefinedTags: [{label : '--NA--', value: ""},...useWithTag(panel)],
        allowCreate: false,
        reactSelectOptions: {
          // isClearable: true,
        },
      },
    },
    {
      name: "topic",
      title: "Topic (OPTIONAL)",
      type: "string",
    },
    {
      name: "audience",
      title: "Audience (OPTIONAL)",
      description: "CIO, CISO, CFO, CMO, ...",
      type: "tags",
      options: {
        predefinedTags: useWithTag(audience),
        allowCreate: false,
      },
    },
    {
      name: "brand",
      title: "Brand",
      type: "tag",
      options: {
        predefinedTags: brands,
        allowCreate: false,
      },
    },
  ],
  preview: {
    select: {
      title: "title",
      date: "date",
      city: "location.city",
      country: "location.country",
    },
    prepare(selection) {
      const { title, date, city, country } = selection;
      // console.log(selection);
      let name =
        (date ? format(new Date(date), "MM-dd-yyyy") + " - " : "") + title
          ? title
          : "Untitled";
      let location = city ? city + (country ? " - " + country.label : "") : "";
      return {
        title: name,
        subtitle: location,
      };
    },
  },
};
