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
    $addFields: {
      results: {
        $ifNull: [ "$results", [{}] ] //Add an empty object if results is null
      }
    }
  },
  {
    $unwind: "$results",
  },
  {
    $match: {
      "results.someField": {
        $exists:true,
        $eq: "someValue",
      },
    },
  },
];

// ... other stages

const cursor = db.collection('collection1').aggregate(pipeline);
```