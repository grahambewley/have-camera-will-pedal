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
                  buildHookId:
                    "6320c61c4033ea0c8dff7ecd",
                  title: "Sanity Studio",
                  name: "have-camera-will-pedal-studio",
                  apiId: "f9c38855-1a91-4700-b9bf-4c9b89eb5df7",
                },
                {
                  buildHookId: "6320c61c5792ba088e5ee95e",
                  title: "Blog Website",
                  name: "have-camera-will-pedal",
                  apiId: "5d833efa-5136-423d-8996-99b1484b293f",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/grahambewley/have-camera-will-pedal",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://have-camera-will-pedal.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
