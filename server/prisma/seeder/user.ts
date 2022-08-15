import { PrismaClient } from '@prisma/client'
import { hashSync, genSaltSync } from 'bcrypt'

const prisma = new PrismaClient()

export default async function User() {
    prisma.user.createMany({
        data: [
            {
                username: 'admin',
                password: hashSync('123', genSaltSync()),
                role: 'admin'
            },
            {
                username: 'user',
                password: hashSync('123', genSaltSync()),
                role: 'user'
            }
        ]
    })
}