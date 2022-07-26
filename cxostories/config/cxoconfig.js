export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "netlify",
      options: {
        description:
          "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
        sites: [
          {
            buildHookId: "62dfebb55ef7452727610773",
            title: "CXOstories CMS",
            name: "cxostories-cms",
            apiId: "1e44c071-3da5-442d-8dcb-03164f5dbde8",
          },
          {
            buildHookId: "62dff1e14e30c20075c24a7b",
            title: "CXOstories Web",
            name: "cxostories-v2",
            apiId: "b0f52460-072d-4bb2-8f42-88e5a939514e",
          },
        ],
      },
      layout: {
        width: 'medium',
        height : 'small'
      }
    },
    {
      name: "document-list",
      options: {
        title: "  Last edited webinars",
        order: "_createdAt desc",
        types: [
          "webinar",
          // "location",
          // "moderator",
          // "keynote",
          // "sponsor",
          // "panelist",
          // "speaker",
        ],
      },
      layout: { width: "medium",height : 'medium' },
    },
  ],
};
