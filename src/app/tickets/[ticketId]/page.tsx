
import { TicketItem } from "@/features/ticket/component/ticket_item";
import {getTicket} from "@/features/ticket/queries/get-ticket";
import { notFound } from "next/navigation";
type TicketPageProps = {
    params: {
        ticketId: string
    }
}


const number:number = 1

const TicketPage =async ({params}: TicketPageProps) => {
    // console.log(1 === params.ticketId)
    const {ticketId} = await params
    const ticket =await getTicket(ticketId)
    // throw new Error("ticket is not found")


    // const p = useParams()
    // const ticket = data.find((ticket) =>ticket.id=== p.ticketId)
    if(!ticket){
         notFound() 
    }


    return (
        <div className="flex justify-center animate-fade-in-from-top">
            <TicketItem ticket={ticket} isDetail/>
        </div>
    )
}

export default TicketPage;