const AWS = require("aws-sdk");
const awsHttpClient = require("http-aws-es");
const es = require("elasticsearch");

const esClient = new es.Client({
  host:
    "https://search-classes-dmedmstgnztit6v2b5anubrp3m.us-west-1.es.amazonaws.com/",
  // log: 'trace'
});

const createIndex = async function (indexName) {
  return await esClient.indices.create({
    index: indexName,
  });
};
exports.createIndex = createIndex;

const putMapping = async function (indexName) {
  return await esClient.indices.putMapping({
    index: indexName,
    body: {
      properties: {
        times: {
          type: "nested",
          properties: {
            time: {
              type: "integer_range",
            },
          },
        },
        discussionA: {
          type: "nested",
          properties: {
            time: {
              type: "integer_range",
            },
          },
        },
        discussionB: {
          type: "nested",
          properties: {
            time: {
              type: "integer_range",
            },
          },
        },
        discussionC: {
          type: "nested",
          properties: {
            time: {
              type: "integer_range",
            },
          },
        },
        discussionD: {
          type: "nested",
          properties: {
            time: {
              type: "integer_range",
            },
          },
        },
        discussionE: {
          type: "nested",
          properties: {
            time: {
              type: "integer_range",
            },
          },
        },
        discussionF: {
          type: "nested",
          properties: {
            time: {
              type: "integer_range",
            },
          },
        },
        discussionG: {
          type: "nested",
          properties: {
            time: {
              type: "integer_range",
            },
          },
        },
        discussionH: {
          type: "nested",
          properties: {
            time: {
              type: "integer_range",
            },
          },
        },
        discussionI: {
          type: "nested",
          properties: {
            time: {
              type: "integer_range",
            },
          },
        },
        discussionJ: {
          type: "nested",
          properties: {
            time: {
              type: "integer_range",
            },
          },
        },
      },
    },
  });
};
exports.putMapping = putMapping;

const deleteIndex = async function (indexName) {
  esClient.indices.delete({ index: indexName }, function (error, response) {
    console.log("delete", response);
  });
};
exports.deleteIndex = deleteIndex;

const insertDoc = async function (data) {
  return await esClient.index({
    index: "planner",
    body: data,
  });
};
exports.insertDoc = insertDoc;

var indexall = function (bigJson, index, callback) {
  esClient.bulk(
    {
      maxRetries: 5,
      index: index,
      body: bigJson,
    },
    function (err, res) {
      if (err) {
        console.log(err);
      } else {
        callback(res.items);
      }
    }
  );
};
exports.indexall = indexall;

const searchDoc = async function (payload) {
  return await esClient.search({
    size: 100,
    index: payload.index,
    body: payload.body,
  });
};
exports.searchDoc = searchDoc;

// const searchOpen = async function (payload) {
//   return await esClient.search({
//     index: payload.index,
//     body: {
//       query: {
//         bool: {
//           must_not: [
//             {
//               nested: {
//                 path: "times",
//                 query: {
//                   range: {
//                     "times.time": {
//                       gte: 1100,
//                       lte: 1150,
//                     },
//                   },
//                 },
//               },
//             },
//             {
//               nested: {
//                 path: "times",
//                 query: {
//                   range: {
//                     "times.time": {
//                       gte: 1000,
//                       lte: 1050,
//                     },
//                   },
//                 },
//               },
//             },
//           ],
//         },
//       },
//     },
//   });
// };
// exports.searchDoc = searchOpen;
