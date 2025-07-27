import { LucideMessageSquareWarning } from "lucide-react"
import React, { cloneElement } from "react"

type PlaceholderProp = {
    label : string,
    icon? : React.ReactElement,
    //相当于element，范围更加宽泛，可以为字符串也可以为数字数组等类型
    button?:React.ReactNode
}
interface WithClassName {
    className?: string;
}
const Placeholder = ({label,icon =<LucideMessageSquareWarning />,button=<div/>} : PlaceholderProp) => {
    return (
        <div className="flex-1 self-center flex flex-col items-center justify-center gap-y-2">
            {cloneElement(icon as React.ReactElement<WithClassName>, {
                className: `w-16 h-16`
            })}
            <h2 className="text-lg text-center">{label}</h2>
            {button && React.isValidElement(button) ? (
                cloneElement(button as React.ReactElement<WithClassName>,{
                    className: "h-10"
                })
            ) : (
                <div>{button}</div>
            )}
        </div>
    )
    }

export {Placeholder}