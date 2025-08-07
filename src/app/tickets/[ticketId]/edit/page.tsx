import {CardCompact} from "@/components/card-compact";
import {getTicket} from "@/features/ticket/queries/get-ticket";
import {notFound} from "next/navigation";
import {TicketUpsertForm} from "@/features/ticket/component/ticket-upsert-form";

type ticketEditPageProps = {
    params : {
        ticketId:string
    }
}

const ticketEditPage = async ({params}:ticketEditPageProps) => {
        const {ticketId} = await  params
        const ticket = await getTicket(ticketId)
        if (!ticket){
            notFound()
        }


    return (
        <div className="flex-1 flex flex-col justify-center items-center">
            <CardCompact content={<TicketUpsertForm ticket={ticket}/>}
                         title="Edit Page"
                         description="Edit an exiting ticket"
                         className="w-full max-w-[420px] animate-fade-in-from-top">
            </CardCompact>
        </div>
    )
}

export default ticketEditPage