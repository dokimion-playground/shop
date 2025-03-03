"use client";

import { selectCustomerSchemaType } from "@/lib/zod-schemas/customer";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import {
  insertTicketSchema,
  insertTicketSchemaType,
  selectTicketSchemaType,
} from "@/lib/zod-schemas/ticket";
import { InputWithLabel } from "@/components/inputs/InputWithLabel";
import { TextAreaWithLabel } from "@/components/inputs/TextAreaWithLabel";
import { CheckboxWithLabel } from "@/components/inputs/CheckboxWithLabel";
import { Button } from "@/components/ui/button";

type Props = {
  customer: selectCustomerSchemaType;
  ticket?: selectTicketSchemaType;
};

export default function TicketForm({ customer, ticket }: Props) {
  const defaultValues: insertTicketSchemaType = {
    id: ticket?.id ?? "(New)",
    customerId: ticket?.customerId ?? customer.id,
    title: ticket?.title ?? "",
    description: ticket?.description ?? "",
    completed: ticket?.completed ?? false,
    tech: ticket?.tech ?? "new-ticket@example.com",
  };

  const form = useForm<insertTicketSchemaType>({
    mode: "onBlur",
    resolver: zodResolver(insertTicketSchema),
    defaultValues,
  });

  const submitForm = async (data: insertTicketSchemaType) => {
    console.log("data", data);
  };

  return (
    <div className="flex flex-col gap-1 sm:px-8">
      <div>
        <h2 className="text-2xl font-bold">
          {ticket?.id ? "Edit" : "New"} Ticket
          {ticket?.id ? `# ${ticket.id}` : "Form"}
        </h2>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(submitForm)}
            className="flex flex-col md:flex-row gap-4 md:gap-8"
          >
            <div className="flex flex-col gap-4 w-full max-w-xs">
              <InputWithLabel<insertTicketSchemaType>
                fieldTitle="Title"
                nameInSchema="title"
              />
              <InputWithLabel<insertTicketSchemaType>
                fieldTitle="Tech"
                nameInSchema="tech"
                disabled={true}
                readOnly={true}
              />
              <CheckboxWithLabel<insertTicketSchemaType>
                fieldTitle="Completed"
                nameInSchema="completed"
                message="예"
              />
              <div className="mt-4 space-y-2">
                <h3 className="text-lg">Customer Info</h3>
                <hr className="w-4/5"></hr>
                <p>
                  {customer.firstName} {customer.lastName}
                </p>
                <p>{customer.address1}</p>
                {customer.address2 ? <p>{customer.address2}</p> : null}
                <p>
                  {customer.city}, {customer.state} {customer.zip}
                </p>
                <hr className="w-4/5" />
                <p>{customer.email}</p>
                <p>{customer.phone}</p>
              </div>
            </div>

            <div className="flex flex-col gap-4 w-full max-w-xs">
              <TextAreaWithLabel<insertTicketSchemaType>
                fieldTitle="Description"
                nameInSchema="description"
                className="h-96"
              />

              <div className="flex gap-2">
                <Button
                  className="w-3/4"
                  type="submit"
                  variant="default"
                  title="Save"
                >
                  저장
                </Button>

                <Button
                  type="button"
                  variant="destructive"
                  title="Reset"
                  onClick={() => form.reset(defaultValues)}
                >
                  초기화
                </Button>
              </div>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
