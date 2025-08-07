"use server"
import {prisma} from "@/lib/prisma";
import {redirect} from "next/navigation";
import {ticketPath} from "@/paths";
import {revalidatePath} from "next/cache";

export const updateTicket = async (id:string,formdate: FormData) => {

    const data = {
        // id: formdate.get('id'),
        id,
        title:  formdate.get('title'),
        content: formdate.get('content')
    }

    await prisma.ticket.update({
        where:{
            id:data.id as string
        },
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