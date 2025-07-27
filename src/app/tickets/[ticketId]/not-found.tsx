import { Placeholder } from "@/components/Placeholder";
import { Button } from "@/components/ui/button";
import { ticketPath } from "@/paths";
import Link from "next/link";


export default function NotFound() {

     return <Placeholder label="ticket not found" button={
            <Button asChild variant='outline'>
                <Link href={ticketPath()}>go Back to tickets</Link>
            </Button>
        }/>


}