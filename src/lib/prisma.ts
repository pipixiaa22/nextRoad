
import { PrismaClient } from "@/generated/prisma";

const globalForPrisma = globalThis as unknown as {prisma: PrismaClient}

export const prisma = globalForPrisma.prisma || new PrismaClient()
//类比单例模式，如果全局不存在，则创建一个新的，如果存在，则直接返回，不存在的同时会将global设置为新的prisma
if(process.env.NODE_ENV !=="production") globalForPrisma.prisma = prisma