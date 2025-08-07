import {z, ZodError} from "zod";

export type ActionState = {
    status?: 'SUCCESS' | 'ERROR',
    message: string,
    payload: FormData
    fieldErrors: Record<string, string[]>,
    timeStamp: number
}

export const EMPTY_ACTION_STATE:ActionState = {
    message: "",
    fieldErrors: {},
    payload: new FormData(),
    timeStamp: Date.now()
}


export const formErrorToActionState = (error: unknown, formData: FormData): ActionState => {
    if (error instanceof ZodError) {
        // console.log(z.flattenError(error).fieldErrors)
        return {
            status: "ERROR",
            message: error.message,
            payload: formData,
            fieldErrors: z.flattenError(error).fieldErrors,
            timeStamp: Date.now()
        }
    } else if (error instanceof Error) {
        return {
            status: "ERROR",
            message: error.message,
            payload: formData,
            fieldErrors: {},
            timeStamp: Date.now()
        }
    } else {
        return {
            status: "ERROR",
            message: "unknow error occurred",
            payload: formData,
            fieldErrors: {},
            timeStamp: Date.now()
        }

    }

}

export const toActionState = (status: ActionState['status'], message: string): ActionState => {
    return {
        status,
        message,
        payload: new FormData(),
        fieldErrors: {},
        timeStamp: Date.now()
    }

}