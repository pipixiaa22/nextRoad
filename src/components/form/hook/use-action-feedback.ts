import {ActionState} from "@/components/form/utils/to-actions-state";
import {useEffect, useRef} from "react";

type onArgs = {
    state: ActionState
}

type UseActionFeedbackOptions = {
    onSuccess?: (onArgs?:onArgs) => void,
    onError?: (onArgs?:onArgs) => void
}





const useActionFeedback = (state: ActionState, options: UseActionFeedbackOptions) => {
    
    const preTimeStamp = useRef(state.timeStamp);

    const isUpdate = preTimeStamp.current !== state.timeStamp
    



    useEffect(() => {

        //如果不需要时间辍相等，则直接返回即可
        if (!isUpdate) {
            return
        }

        // console.log("effect")
        console.log(state)
        if (state.status === 'SUCCESS') {
            options.onSuccess?.({state})

        }

        if (state.status === 'ERROR') {
            options?.onError?.({state})
        }
        //当然需要更新时间辍
        preTimeStamp.current = state.timeStamp
    }, [state, options,isUpdate ])


}

export {useActionFeedback}