ALTER TABLE "tickets" ADD COLUMN "completed" boolean DEFAULT false NOT NULL;--> statement-breakpoint
ALTER TABLE "tickets" DROP COLUMN "compeleted";