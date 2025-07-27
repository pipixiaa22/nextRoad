import { Separator } from "./ui/separator"
type headType = {
    title:string,
    description?:string
}

const Heading = ({title,description}:headType) => {
    return (
        <>
          <div>
                <h2 className="text-6xl font-bold tracking-tight">{title}</h2>
                {description && (<p className="text-sm text-muted-foreground">
                    {description}
                </p>)}
            </div> 
            <Separator/>
        </>
    )
}

export default Heading