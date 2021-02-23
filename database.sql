CREATE TABLE "user" (
	"id" serial NOT NULL,
	"username" TEXT NOT NULL,
	"password" TEXT NOT NULL,
	"join_date" TIMESTAMP NOT NULL,
	"access_level" integer NOT NULL,
	"messages" integer NOT NULL,
	CONSTRAINT "user_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "event" (
	"id" serial NOT NULL,
	"title" TEXT NOT NULL,
	"start_time" TIME NOT NULL,
	"start_date" DATE NOT NULL,
	"description" TEXT NOT NULL,
	"author_id" integer NOT NULL,
	CONSTRAINT "event_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "news" (
	"id" serial NOT NULL,
	"title" TEXT NOT NULL,
	"description" TEXT NOT NULL,
	"author_id" integer NOT NULL,
	CONSTRAINT "news_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "forum_thread" (
	"id" serial NOT NULL,
	"title" TEXT NOT NULL,
	"description" TEXT NOT NULL,
	"views" integer NOT NULL,
	"author_id" integer NOT NULL,
	"timestamp" TIMESTAMP NOT NULL,
	"category_id" integer NOT NULL,
	CONSTRAINT "forum_thread_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "forum_category" (
	"id" serial NOT NULL,
	"title" TEXT NOT NULL,
	"description" TEXT NOT NULL,
	"author_id" integer NOT NULL,
	CONSTRAINT "forum_category_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "forum_comments" (
	"id" serial NOT NULL,
	"text" TEXT NOT NULL,
	"author_id" integer NOT NULL,
	"timestamp" TIMESTAMP NOT NULL,
	"thread_id" integer NOT NULL,
	CONSTRAINT "forum_comments_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "signups" (
	"id" serial NOT NULL,
	"user_id" integer NOT NULL,
	"event_id" integer NOT NULL,
	CONSTRAINT "signups_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);




ALTER TABLE "event" ADD CONSTRAINT "event_fk0" FOREIGN KEY ("author_id") REFERENCES "user"("id");

ALTER TABLE "news" ADD CONSTRAINT "news_fk0" FOREIGN KEY ("author_id") REFERENCES "user"("id");

ALTER TABLE "forum_thread" ADD CONSTRAINT "forum_thread_fk0" FOREIGN KEY ("author_id") REFERENCES "user"("id");
ALTER TABLE "forum_thread" ADD CONSTRAINT "forum_thread_fk1" FOREIGN KEY ("category_id") REFERENCES "forum_category"("id");

ALTER TABLE "forum_category" ADD CONSTRAINT "forum_category_fk0" FOREIGN KEY ("author_id") REFERENCES "user"("id");

ALTER TABLE "forum_comments" ADD CONSTRAINT "forum_comments_fk0" FOREIGN KEY ("author_id") REFERENCES "user"("id");
ALTER TABLE "forum_comments" ADD CONSTRAINT "forum_comments_fk1" FOREIGN KEY ("thread_id") REFERENCES "forum_thread"("id");

ALTER TABLE "signups" ADD CONSTRAINT "signups_fk0" FOREIGN KEY ("user_id") REFERENCES "user"("id");
ALTER TABLE "signups" ADD CONSTRAINT "signups_fk1" FOREIGN KEY ("event_id") REFERENCES "event"("id");
