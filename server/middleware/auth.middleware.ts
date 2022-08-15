import dayjs from "dayjs"
import { NextFunction, Request, Response } from "express"
import redisJson from "../helper/redis-json"
import AuthProvider from "../provider/auth.provider"

export default function auth(req: Request, res: Response, next: NextFunction) {
  const sessionId: String = req.cookies.session

  // redis.hSet(sessionId, ['test'], ['test'])
  redisJson.set(`hacommerce:session:${sessionId}`, AuthProvider, { expire: dayjs().add(1, 'day').valueOf() })

  next()
}
