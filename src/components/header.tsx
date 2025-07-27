import { LucideKanban } from "lucide-react"
import Link from "next/link"
import { Button, buttonVariants } from "./ui/button"
import { ticketPath } from "@/paths"
import { ThemeSwitcher } from "./themes/theme-swhicher"

const Header = () => {
    return (
         <nav className="
        supports-backdrop-blur:bg-background/60
        fixed left-0 right-0 top-0 z-10
        border-b bg-background/95 backdrop-blur
        w-full flex py-2.5 px-2.5 justify-between
      ">
          <div className="flex align-items gap-x-2">
              <Link href="/" className={buttonVariants({variant:"ghost"})}>
              <LucideKanban />
              <h1 className="ml-2 text-lg font-semibold">TicketBounty</h1>
              </Link>
          </div>
          <div className="flex align-items gap-x-2">
                <ThemeSwitcher/>
                <Link href={ticketPath()}  className={buttonVariants({variant:"default"})}>Tickets</Link>
    
          </div>
      </nav>
    )
}

export {Header}