"use client"
import {Label} from "@/components/ui/label";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Ticket} from "@prisma/client";
import {upsertTicket} from "@/features/ticket/actions/upsert-ticket";
import {useActionState} from "react";
import {FieldError} from "@/features/ticket/component/field-error";
import {EMPTY_ACTION_STATE} from "@/components/form/utils/to-actions-state";
import {Form} from "@/components/form/form";

type TicketUpsertFormProps = {
    ticket?: Ticket
}

//使用一个统一的表进行创建或者修改，判断依据就是是否传过来ticket，而在数据处理函数那里，则根据id是否存在进行插入或者更新
const TicketUpsertForm = ({ticket}: TicketUpsertFormProps) => {
    //第一个就是是否渲染完成的一个flag，第二个就是开始进行转换的一个函数
    // const [isPending,startTransition] = useTransition()

    const [state, formAction, isPending] = useActionState(upsertTicket.bind(null, ticket?.id),
        EMPTY_ACTION_STATE
    )




    // console.log(state)
    //相当于，我创建一张票到发送请求这段时间内，不应该堵塞主线程，应在后台执行操作，所以使用startTrasition包裹起来

    // const upsertTicketAction =(formData:FormData) =>{
    //     startTransition(async () => {
    //        await upsertTicket.bind(null,ticket?.id)(formData)
    //     })
    // }


    return (

        <Form action={formAction} state={state}>
            {/*<input type="hidden" defaultValue={ticket.id} name="id"/>*/}
            <Label htmlFor="title">Title</Label>
            <Input id="title" name="title" type="text" defaultValue={
                (state.payload?.get('title') as string ?? ticket?.title)
            }/>
            <FieldError actionState={state} name="title"/>
            <Label htmlFor="content">content</Label>
            <Textarea id="content" name="content"
                      defaultValue={(state.payload?.get('content')) as string ?? ticket?.content}/>
            <FieldError actionState={state} name="content"/>
            <Button type="submit" disabled={isPending}>
                {/*{isPending && <LucideLoaderCircle className="mr-2 h-4 w-4 animate-spin"/>}*/}
                {ticket ? "edit" : "Create"}
                {/*{state.message}*/}
            </Button>
        </Form>
    )
}

export {TicketUpsertForm}