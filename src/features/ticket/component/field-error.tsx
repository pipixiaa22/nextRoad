import {ActionState} from "@/components/form/utils/to-actions-state";

type FieldErrorProps = {
    actionState: ActionState,
    name: string
}

const FieldError = ({actionState, name}:FieldErrorProps) => {
    const message = actionState.fieldErrors[name]?.[0]
    if (!message){
        return null
    }
    return (
        <span className="text-sm text-red-500">{message}</span>
    )
}

export {FieldError}