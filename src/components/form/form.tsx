import {useActionFeedback} from "@/components/form/hook/use-action-feedback";
import {toast} from "sonner";
import {ActionState} from "@/components/form/utils/to-actions-state";

type FormProps = {
    action: (formData: FormData) => void
    state: ActionState
    children: React.ReactNode
}


const Form = ({action,state,children}: FormProps) => {
    useActionFeedback(state, {
        onSuccess: ({state}) => {
            // console.log(state.message)
            if (state.message) {
                toast.success(state.message)
            }
        },
        onError: ({state}) => {
            // console.log(state.message)
            if (state.message) {

                toast.error(state.message)
            }
        }
    })
    return (
        <form action={action} className="flex flex-col gap-y-2">
            {children}
        </form>
    )
}
export {Form}