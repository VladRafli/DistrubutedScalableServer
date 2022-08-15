import { createClient } from "redis"

const redis = createClient()

let timeoutCount = 0
if (await redis.ping() !== 'PONG') {
    timeoutCount++
    if (timeoutCount >= 3) {
        throw new Error('Redis is not responding or down, please make sure the Redis server is up and running!')
    }
}

export default redis