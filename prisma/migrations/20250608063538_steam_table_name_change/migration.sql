/*
  Warnings:

  - You are about to drop the `steam_free_games` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "steam_free_games";

-- CreateTable
CREATE TABLE "steamgames01" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "steam_app_id" INTEGER NOT NULL,
    "slug" TEXT NOT NULL,
    "short_description" TEXT NOT NULL,
    "image_tall" TEXT NOT NULL,
    "image_wide" TEXT NOT NULL,
    "date" TEXT,

    CONSTRAINT "steamgames01_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "steamgames01_steam_app_id_key" ON "steamgames01"("steam_app_id");

-- CreateIndex
CREATE UNIQUE INDEX "steamgames01_slug_key" ON "steamgames01"("slug");
