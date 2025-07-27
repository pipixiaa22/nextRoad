
import Heading from '@/components/heading';
import { Suspense } from "react";
import { TicketList } from "@/features/ticket/component/ticket-list";
import { Spinner } from "@/components/spinner";
import { ErrorBoundary } from 'react-error-boundary';
import { Placeholder } from '@/components/Placeholder';

const TicketsPage = () => {

    return (
        <div className="flex-1 flex flex-col gap-y-8">
            <Heading title='Tickets' description='all your tickets at one place' />

            <ErrorBoundary fallback={<Placeholder label='something is wrong' />}>
                <Suspense fallback={<Spinner />}>
                    <TicketList />
                </Suspense>
            </ErrorBoundary>
        </div>
    )
}

export default TicketsPage;