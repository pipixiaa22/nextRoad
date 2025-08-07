import Heading from '@/components/heading';
import {Suspense} from "react";
import {TicketList} from "@/features/ticket/component/ticket-list";
import {Spinner} from "@/components/spinner";
import {ErrorBoundary} from 'react-error-boundary';
import {Placeholder} from '@/components/Placeholder';
import {CardCompact} from "@/components/card-compact";
import {TicketUpsertForm} from "@/features/ticket/component/ticket-upsert-form";

export const dynamic = "force-dynamic"

const TicketsPage = () => {

    return (
        <div className="flex-1 flex flex-col gap-y-8">
            <Heading title='Tickets' description='all your tickets at one place'/>
            <CardCompact
                content={<TicketUpsertForm/>} title="Create Ticket"
                description="A new ticket will be created"
                className="w-full max-w-[420px] self-center"
            />
            {/*<Card className="w-full max-w-[420px] self-center">*/}
            {/*    <CardHeader>*/}
            {/*        <CardTitle>Create Ticket</CardTitle>*/}
            {/*        <CardDescription>A new ticket will be created</CardDescription>*/}
            {/*    </CardHeader>*/}
            {/*    <CardContent><TicketCreateForm/></CardContent>*/}
            {/*</Card>*/}

            <ErrorBoundary fallback={<Placeholder label='something is wrong'/>}>
                <Suspense fallback={<Spinner/>}>
                    <TicketList/>
                </Suspense>
            </ErrorBoundary>
        </div>
    )
}

export default TicketsPage;