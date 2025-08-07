"use server"
import {prisma} from "@/lib/prisma";
import {redirect} from "next/navigation";
import {ticketPath} from "@/paths";
import {revalidatePath} from "next/cache";

export const createTicket = async (formdate: FormData) => {

    const data = {
        title:  formdate.get('title'),
        content: formdate.get('content')
    }

   await prisma.ticket.create({
        data:{
            title:data.title as string,
            content:data.content as string
        }

    })
    //因为是开发环境，所以不存在缓存，直接重定向即可，如果是生产环境，需要加上revalidatePath
    //清除特定路径上的缓存
    revalidatePath(ticketPath())
    redirect(ticketPath())

}