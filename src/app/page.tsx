import Heading from "@/components/heading";
import Link from "next/link";

const HomePage = () =>{
  console.log(process.env.DIRECT_DIR)
  return (
   <div className="flex-1 flex flex-col gap-y-8">
    <Heading title="home page" description="Your home place to start"/>

     <div className="flex-1 flex flex-col items-center">
      <Link href="/tickets" className="underline">go to tickets</Link>
     </div>
   </div>

  )
}

export default HomePage;