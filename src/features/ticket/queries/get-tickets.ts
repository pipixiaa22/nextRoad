import { Ticket } from "@prisma/client"
import { prisma } from "@/lib/prisma";
//表示异步函数返回的为数据,Ticket类数组
export const getTickets = async ():Promise<Ticket[]> =>{
   return await prisma.ticket.findMany({
      orderBy: {
         createTime: "desc"
      }
   })
}
