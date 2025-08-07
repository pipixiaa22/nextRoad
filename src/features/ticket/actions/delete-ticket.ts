"use server"
import {prisma} from "@/lib/prisma";
import {redirect} from "next/navigation";
import {ticketPath} from "@/paths";
import {revalidatePath} from "next/cache";
export const deleteTicket = async (id:string) => {
    const deleteTicket = await prisma.ticket.delete({
        where: {
            id
        }
    })
    //删除该路径下的缓存数据
    revalidatePath(ticketPath(id))
    //如果删除成功，应该弹出对应的信息并且重定向
    if (deleteTicket){
        redirect(ticketPath())
    }

}