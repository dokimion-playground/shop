import { BackButton } from "@/components/BackButton";
import { getCustomer } from "@/lib/queries/getCustomer";
import { getTicket } from "@/lib/queries/getTicket";
import * as Sentry from "@sentry/nextjs";

export default async function CustomerFormPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  try {
    const { customerId, ticketId } = await searchParams;

    if (!customerId && !ticketId) {
      return (
        <>
          <h2 className="text-2xl mb-2">
            Customer Id or Ticket Id를 찾을 수 없습니다.
          </h2>
          <BackButton title="뒤로가기" variant="default" />
        </>
      );
    }

    if (customerId) {
      const customer = await getCustomer(parseInt(customerId));

      if (!customer) {
        return (
          <>
            <h2 className="text-2xl mb-2">
              Customer Id #{customerId}를 찾을 수 없습니다
            </h2>
            <BackButton title="뒤로가기" variant="default" />
          </>
        );
      }

      if (!customer.active) {
        return (
          <>
            <h2 className="text-2xl mb-2">
              Customer Id #{customerId}를 찾을 수 없습니다
            </h2>
            <BackButton title="뒤로가기" variant="default" />
          </>
        );
      }
    }

    if (ticketId) {
      const ticket = await getTicket(parseInt(ticketId));

      if (!ticket) {
        return (
          <>
            <h2 className="text-2xl mb-2">
              Ticket Id #{ticketId}를 찾을 수 없습니다
            </h2>
            <BackButton title="뒤로가기" variant="default" />
          </>
        );
      }

      const customer = await getCustomer(ticket.customerId);

      console.log("ticket", ticket);
      console.log("customer", customer);
    }
  } catch (e) {
    if (e instanceof Error) {
      Sentry.captureException(e);
      throw e;
    }
  }
}
