import {prisma} from "@/lib/prisma";
import {cache} from "react";

export const getTicket =async (ticketId:string) => {
    console.log("hello")
      return await prisma.ticket.findUnique({
            where: {
                id:ticketId
            }
        })


}
