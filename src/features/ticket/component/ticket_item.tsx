"use client"
import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
} from '@/components/ui/card'
import {ticketEditPath, ticketPath} from '@/paths'
import Link from 'next/link'
import {TICKET_ICONS} from '@/features/constants'
import {Ticket} from "@prisma/client";
import {LucidePencil, LucideSquareArrowOutUpRight, LucideTrash} from 'lucide-react'
import {Button} from '@/components/ui/button'
import clsx from 'clsx'
import {deleteTicket} from "@/features/ticket/actions/delete-ticket";
import {useActionState} from "react";
import {getTicket} from "@/features/ticket/queries/get-ticket";

type TicketProps = {
    ticket: Ticket
    isDetail?: boolean
}
const TicketItem = ({ticket, isDetail}: TicketProps) => {



    const handlerDeleteTicket =async ()=>{
        await deleteTicket(ticket.id)

        return true
    }
    //pending意思就是在等待中，结果还没出来
    // console.log(isDetail)
    if (!ticket) {
        return null;
    }
    //一个是导航，一个是普通按钮附带事件处理能力
    const detailButton = (<Button  variant="outline" asChild size="icon">
        <Link prefetch href={ticketPath(ticket.id)}>
            <LucideSquareArrowOutUpRight className='h-4 w-4'/>
        </Link>
    </Button>)
    //事件处理程序，服务端不负责交互，所以不能处理事件，而客户端可以，但是只能在组件内部定义，不能由父组建传递参数
    // 所以只能客户端才能用



    const deleteButton = (
           <Button variant="outline" size="icon" onClick={() => handlerDeleteTicket()}>
               <LucideTrash className="h-4 w-4"/>
           </Button>
    )

    const editButton = (
        <Button asChild variant="outline" size="icon">
            <Link prefetch href={ticketEditPath(ticket.id)}>
                <LucidePencil className="h-4 w-4"/>
            </Link>
        </Button>
    )


    return (
        <div className={clsx("w-full  flex gap-x-1", {
            "max-w-[580px]": isDetail,
            "max-w-[420px]": !isDetail
        })}>
            <Card key={ticket.id} className='w-full '>
                <CardHeader>
                    <CardTitle className='flex gap-x-2'>
                        <span>{TICKET_ICONS[ticket.status]}</span>
                        <span className='truncate'>{ticket.title}</span>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    {/* 不并不是详情页面的话,就要限制文本行数,最多三行,之后用省略号表示,而whitespace则是保证超出边界自动换行     */}
                    <span className={clsx("whitespace-break-spaces", {
                        "line-clamp-3 ": !isDetail
                    })}>{ticket.content}</span>
                </CardContent>
            </Card>
            <div className='flex flex-col gap-y-1'>
                {isDetail ? (
                    <>
                        {detailButton}
                        {deleteButton}
                    </>
                    ) : (
                    <>
                        {detailButton}
                        {editButton}
                    </>
                )}
            </div>

        </div>
    )
}

export {TicketItem}