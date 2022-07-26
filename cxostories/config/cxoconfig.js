export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId: "629f6511cfb07015fad6696f",
                  title: "CXOstories Admin",
                  name: "admin-cxostories",
                  apiId: "9888dfe8-f5e6-410e-ba7d-5e5cc78dda2f",
                },
                // {
                //   buildHookId: "629f6511be9e18181dd820a1",
                //   title: "CXOstories Web",
                //   name: "sanity-gatsby-blog-web-ihhmnkcw",
                //   apiId: "5a5508c3-7453-407d-b1e6-3668d76b0f02",
                // },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value: "https://github.com/parthpcxo08/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-ihhmnkcw.netlify.app",
            category: "apps",
          },
        ],
      },
    },

    {
      name: "document-list",
      options: {
        title: "Recent Activity",
        order: "_createdAt desc",
        types: [
          "webinar",
          "location",
          "moderator",
          "keynote",
          "sponsor",
          "panelist",
          "speaker",
        ],
      },
      layout: { width: "medium" },
    },
    // {
    //   name: "document-list",
    //   options: {
    //     title: "Recent Activity",
    //     order: "_createdAt desc",
    //     types: [
    //       "webinar",
    //       "location",
    //       "moderator",
    //       "keynote",
    //       "sponsor",
    //       "panelist",
    //       "speaker",
    //     ],
    //   },
    //   layout: { width: "medium" },
    // },
    // { name: "project-users", layout: { height: "medium" } },
  ],
};
