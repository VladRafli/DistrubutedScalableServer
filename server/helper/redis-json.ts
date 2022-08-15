import JSONCache from "redis-json";
import redis from "./redis";

const redisJson = new JSONCache(redis)

export default redisJson