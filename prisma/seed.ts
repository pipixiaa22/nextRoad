import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const tickets = [
    {
        id: '1',
        title: 'ticket 1',
        content: 'this is the first ticket',
        status: 'DONE' as const //相当于将其变成一个常量，不可修改
    },
    {
        id: '2',
        title: 'ticket 2',
        content: 'this is the second ticket',
        status: 'OPEN' as const
    },
    {
        id: '3',
        title: 'ticket 3',
        content: 'this is the third ticket',
        status: 'IN_PROGRESS' as const
    }
]

const seed = async () => {

    await prisma.ticket.createMany({
        data:tickets
    })
}

seed()


