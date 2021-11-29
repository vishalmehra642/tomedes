// const path = require(`path`);
// const crypto = require("crypto");
// const elasticsearch = require("elasticsearch");

// const client = new elasticsearch.Client({
//   host: "https://elastic:WJAGmUtouXDXqvkfAjMxb2Pq@tomedes.es.us-central1.gcp.cloud.es.io:9243",
//   log: "trace",
//   ssl: { rejectUnauthorized: false, pfx: [] },
// });

// const translator_hub = client.search({
//   index: "translator_hub",
//   type: "_doc",
//   body: {
//     query: {
//       match_all: {},
//     },
//   },
// });

// exports.sourceNodes = async ({ actions }) => { 
//   const { createNode } = actions;
//   const result = await translator_hub;

//   result.hits.hits.map((d, i) => {
//     const translateNode = {
//       id: `${i}`,
//       parent: `__SOURCE__`,
//       internal: {
//         type: `translateHub`,
//       },
//       children: [],
//       data: d._source,
//     };

//     const contentDigest = crypto
//       .createHash(`md5`)
//       .update(JSON.stringify(translateNode))
//       .digest(`hex`);
//     translateNode.internal.contentDigest = contentDigest;
//     createNode(translateNode);
//   });
//   return;
// };
