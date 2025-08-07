"use server"
import {prisma} from "@/lib/prisma";
import {revalidatePath} from "next/cache";
import {ticketPath} from "@/paths";
import {redirect} from "next/navigation";
import {z} from 'zod'
import {ActionState, formErrorToActionState, toActionState} from "@/components/form/utils/to-actions-state";

const upsertTicketSchema = z.object({
    title: z.string().min(1).max(191),
    content: z.string().min(1).max(1024),
})


export const upsertTicket = async (
    id: string | undefined,
    _actionState: ActionState,
    formData: FormData) => {

    //如果存在id这个选项，则代表已经存在，是更新，如果不存在，则是创建
    // const id = formData.get('id') as string;


    try {
        const data = upsertTicketSchema.parse({
            title: formData.get('title'),
            content: formData.get('content')
        })


        //数据如果存在，则更新，不存在则直接插入 upsert
        await prisma.ticket.upsert({
            where: {
                id: id || ""
            },
            update: data,
            create: data
        })
    } catch (error) {
        const res = formErrorToActionState(error, formData);
        console.log(error)
        return res
    }

    //如果id存在，则需要从edit路径跳转到具体的ticketid路径，同时清除缓存
    // revalidatePath(ticketPath(id))
    // if (id) {
    //     //如果id存在的话，就是编辑
    //     redirect(ticketPath(id))
    // }


    //不存在直接返回创建
    // console.log("已经抵达redirect之后")
    return toActionState('SUCCESS',id ? 'ticket edited' : 'ticket created')


}