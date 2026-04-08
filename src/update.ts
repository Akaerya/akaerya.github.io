import { StarRail } from "starrail.js";

const client = new StarRail({ showFetchCacheLog: true, cacheDirectory: "./cache" }); // showFetchCacheLog is true by default

client.cachedAssetsManager.fetchAllContents(); // returns promise
