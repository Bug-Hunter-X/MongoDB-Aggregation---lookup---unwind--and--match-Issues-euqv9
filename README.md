# MongoDB Aggregation Error: Handling Missing Lookup Results

This repository demonstrates an uncommon error that can occur when using MongoDB's aggregation framework with the `$lookup`, `$unwind`, and `$match` stages.  The issue arises when `$lookup` doesn't find a matching document and the pipeline attempts to `$unwind` a nonexistent array field, leading to unexpected behavior.

## Problem Description

The provided code uses `$lookup` to join two collections. If a document in the primary collection doesn't have a match in the secondary collection,  the `$unwind` operation will fail. The subsequent `$match` stage will also not execute correctly. This can lead to silent data loss or pipeline errors.

## Solution

The solution involves adding an `$ifNull` or `$addFields` stage before `$unwind` to handle cases where the `results` array is empty. This ensures that the pipeline continues gracefully even when no matches are found.