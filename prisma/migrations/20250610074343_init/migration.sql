-- CreateTable
CREATE TABLE "free_games" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "thumbnail" TEXT NOT NULL,
    "worth" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "instructions" TEXT NOT NULL,
    "open_giveaway_url" TEXT NOT NULL,
    "published_date" TIMESTAMP(3) NOT NULL,
    "type" TEXT NOT NULL,
    "platform" TEXT NOT NULL,
    "end_date" TIMESTAMP(3) NOT NULL,
    "users" TEXT NOT NULL,
    "status" TEXT NOT NULL,

    CONSTRAINT "free_games_pkey" PRIMARY KEY ("id")
);
