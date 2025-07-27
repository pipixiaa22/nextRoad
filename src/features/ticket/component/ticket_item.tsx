import {
    Card,
    CardHeader,
    CardFooter,
    CardTitle,
    CardContent,
} from '@/components/ui/card'
import { ticketPath } from '@/paths'
import Link from 'next/link'
import { TICKET_ICONS } from '@/features/constants'
import { Ticket } from '@/features/types'
import { LucideSquareArrowOutUpRight, LucideView } from 'lucide-react'
import { Button } from '@/components/ui/button'
import clsx from 'clsx'

type TicketProps = {
    ticket: Ticket,
    isDetail?:boolean
}
const TicketItem = ({ ticket,isDetail }: TicketProps) => {
    console.log(isDetail)
    const detailButton = (<Button variant="outline" asChild size="icon">
        <Link href={ticketPath(ticket.id)}>
            <LucideSquareArrowOutUpRight className='h-4 w-4'/>
        </Link>
    </Button>)

    return (
        <div className={clsx("w-full  flex gap-x-1",{
            "max-w-[580px]" : isDetail,
            "max-w-[420px]" : !isDetail
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
                    <span className={clsx("whitespace-break-spaces",{
                        "line-clamp-3 " : !isDetail
                    })}>{ticket.content}</span>
                </CardContent>
            </Card>
            <div className='flex flex-col gap-y-1'>
                {isDetail ? null : detailButton}
            </div>

        </div>
    )
}

export { TicketItem }