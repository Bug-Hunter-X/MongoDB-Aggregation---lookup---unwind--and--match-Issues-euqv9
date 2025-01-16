```javascript
const pipeline = [
  {
    $lookup: {
      from: "collection2",
      localField: "_id",
      foreignField: "foreignKey",
      as: "results",
    },
  },
  {
    $unwind: "$results",
  },
  {
    $match: {
      "results.someField": "someValue",
    },
  },
];

// ... other stages

const cursor = db.collection('collection1').aggregate(pipeline);
//This will cause an error if collection2 does not have an entry matching the foreignKey
```