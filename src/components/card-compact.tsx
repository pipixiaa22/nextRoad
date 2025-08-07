import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {ReactNode} from "react";

type CardCompactProps = {
    title: string,
    content: ReactNode,
    description?: string,
    className?: string,
    footer?: ReactNode
}


const CardCompact = ({title,content,description,className,footer}:CardCompactProps) => {
    return (
        <Card className={className}>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent>
                {content}
            </CardContent>
            {footer && <CardFooter>{footer}</CardFooter>}
        </Card>
    )
}

export {CardCompact}