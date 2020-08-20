var express = require("express");
var router = express.Router();

var elastic = require("../elasticsearch");

//request body should have index field and query field
/**
 * @param body format:
 * {
 * 		index: "indexName"
 * 		busySlots:[
 * 			{
 * 				day: "M"|"T"|"W"|"R"|"F",
 * 				gte: 4 digit int time
 * 				lte: 4 digit int time
 * 			}
 * 		]
 * }
 */
router.post("/search", function (req, res) {
  let arrayOfShouldJsons = [];
  for (var json of req.body.busySlots) {
    let day = json.day;
    pushList = [
      {
        bool: {
          must: [
            {
              multi_match: {
                query: true,
                // fields: ['M', 'T', 'W', 'R', 'F'],
                fields: [day],
              },
            },
            {
              nested: {
                path: "times",
                query: {
                  range: {
                    "times.time": {
                      gte: json.gte,
                      lte: json.lte,
                    },
                  },
                },
              },
            },
          ],
        },
      },
      {
        bool: {
          must: [
            {
              multi_match: {
                query: true,
                // fields: [
                // 	'discussionA[0].M',
                // 	'discussionA[0].T',
                // 	'discussionA[0].W',
                // 	'discussionA[0].R',
                // 	'discussionA[0].F',
                // ],
                fields: [`discussionA[0].${day}`],
              },
            },
            {
              nested: {
                path: "discussionA",
                query: {
                  range: {
                    "discussionA.time": {
                      gte: json.gte,
                      lte: json.lte,
                    },
                  },
                },
              },
            },
          ],
        },
      },
      {
        bool: {
          must: [
            {
              multi_match: {
                query: true,
                // fields: [
                // 	'discussionB[0].M',
                // 	'discussionB[0].T',
                // 	'discussionB[0].W',
                // 	'discussionB[0].R',
                // 	'discussionB[0].F',
                // ],
                fields: [`discussionB[0].${day}`],
              },
            },
            {
              nested: {
                path: "discussionB",
                query: {
                  range: {
                    "discussionB.time": {
                      gte: json.gte,
                      lte: json.lte,
                    },
                  },
                },
              },
            },
          ],
        },
      },
      {
        bool: {
          must: [
            {
              multi_match: {
                query: true,
                // fields: [
                // 	'discussionC[0].M',
                // 	'discussionC[0].T',
                // 	'discussionC[0].W',
                // 	'discussionC[0].R',
                // 	'discussionC[0].F',
                // ],
                fields: [`discussionC[0].${day}`],
              },
            },
            {
              nested: {
                path: "discussionC",
                query: {
                  range: {
                    "discussionC.time": {
                      gte: json.gte,
                      lte: json.lte,
                    },
                  },
                },
              },
            },
          ],
        },
      },
      {
        bool: {
          must: [
            {
              multi_match: {
                query: true,
                // fields: [
                // 	'discussionD[0].M',
                // 	'discussionD[0].T',
                // 	'discussionD[0].W',
                // 	'discussionD[0].R',
                // 	'discussionD[0].F',
                // ],
                fields: [`discussionD[0].${day}`],
              },
            },
            {
              nested: {
                path: "discussionD",
                query: {
                  range: {
                    "discussionD.time": {
                      gte: json.gte,
                      lte: json.lte,
                    },
                  },
                },
              },
            },
          ],
        },
      },
      {
        bool: {
          must: [
            {
              multi_match: {
                query: true,
                // fields: [
                // 	'discussionE[0].M',
                // 	'discussionE[0].T',
                // 	'discussionE[0].W',
                // 	'discussionE[0].R',
                // 	'discussionE[0].F',
                // ],
                fields: [`discussionE[0].${day}`],
              },
            },
            {
              nested: {
                path: "discussionE",
                query: {
                  range: {
                    "discussionE.time": {
                      gte: json.gte,
                      lte: json.lte,
                    },
                  },
                },
              },
            },
          ],
        },
      },
      {
        bool: {
          must: [
            {
              multi_match: {
                query: true,
                // fields: [
                // 	'discussionF[0].M',
                // 	'discussionF[0].T',
                // 	'discussionF[0].W',
                // 	'discussionF[0].R',
                // 	'discussionF[0].F',
                // ],
                fields: [`discussionF[0].${day}`],
              },
            },
            {
              nested: {
                path: "discussionF",
                query: {
                  range: {
                    "discussionF.time": {
                      gte: json.gte,
                      lte: json.lte,
                    },
                  },
                },
              },
            },
          ],
        },
      },
      {
        bool: {
          must: [
            {
              multi_match: {
                query: true,
                // fields: [
                // 	'discussionG[0].M',
                // 	'discussionG[0].T',
                // 	'discussionG[0].W',
                // 	'discussionG[0].R',
                // 	'discussionG[0].F',
                // ],
                fields: [`discussionG[0].${day}`],
              },
            },
            {
              nested: {
                path: "discussionG",
                query: {
                  range: {
                    "discussionG.time": {
                      gte: json.gte,
                      lte: json.lte,
                    },
                  },
                },
              },
            },
          ],
        },
      },
      {
        bool: {
          must: [
            {
              multi_match: {
                query: true,
                // fields: [
                // 	'discussionH[0].M',
                // 	'discussionH[0].T',
                // 	'discussionH[0].W',
                // 	'discussionH[0].R',
                // 	'discussionH[0].F',
                // ],
                fields: [`discussionH[0].${day}`],
              },
            },
            {
              nested: {
                path: "discussionH",
                query: {
                  range: {
                    "discussionH.time": {
                      gte: json.gte,
                      lte: json.lte,
                    },
                  },
                },
              },
            },
          ],
        },
      },
      {
        bool: {
          must: [
            {
              multi_match: {
                query: true,
                // fields: [
                // 	'discussionI[0].M',
                // 	'discussionI[0].T',
                // 	'discussionI[0].W',
                // 	'discussionI[0].R',
                // 	'discussionI[0].F',
                // ],
                fields: [`discussionI[0].${day}`],
              },
            },
            {
              nested: {
                path: "discussionI",
                query: {
                  range: {
                    "discussionI.time": {
                      gte: json.gte,
                      lte: json.lte,
                    },
                  },
                },
              },
            },
          ],
        },
      },
      {
        bool: {
          must: [
            {
              multi_match: {
                query: true,
                // fields: [
                // 	'discussionJ[0].M',
                // 	'discussionJ[0].T',
                // 	'discussionJ[0].W',
                // 	'discussionJ[0].R',
                // 	'discussionJ[0].F',
                // ],
                fields: [`discussionJ[0].${day}`],
              },
            },
            {
              nested: {
                path: "discussionJ",
                query: {
                  range: {
                    "discussionJ.time": {
                      gte: json.gte,
                      lte: json.lte,
                    },
                  },
                },
              },
            },
          ],
        },
      },
    ];
    arrayOfShouldJsons = [...arrayOfShouldJsons, ...pushList];
  }
  elastic
    .searchDoc({
      index: req.body.index,
      body: {
        query: {
          bool: {
            must: [
              {
                match: {
                  subjectName: req.body.searchString,
                },
              },
            ],
            must_not: [
              {
                bool: {
                  should: arrayOfShouldJsons,
                },
              },
            ],
          },
        },
      },
    })
    .then(function (result) {
      res.json(result);
    })
    .catch((err) => console.log(err));
});

// router.get("/searchOpen", function (req, res) {
//   elastic.searchOpen(req.body).then(function (result) {
//     res.json(result);
//   });
// });

router.delete("/:index", function (req, res) {
  elastic
    .deleteIndex(req.params.index)
    .then(res.send("Deleted index if it existed!"))
    .catch(res.send("Error deleting index"));
});

router.post("/createIndex/:index", function (req, res) {
  elastic
    .createIndex(req.params.index)
    .then(res.send("Created index!"))
    .catch(res.send("Error creating index"));
});

router.post("/putMapping/:index", function (req, res) {
  elastic
    .putMapping(req.params.index)
    .then(res.send("Mapped!"))
    .catch(res.send("Error mapping"));
});

module.exports = router;
