/*
  Warnings:

  - You are about to drop the `steamFreeGames` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "steamFreeGames";

-- CreateTable
CREATE TABLE "steam_free_games" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "steam_app_id" INTEGER NOT NULL,
    "slug" TEXT NOT NULL,
    "short_description" TEXT NOT NULL,
    "header_image" TEXT NOT NULL,
    "capsule_image" TEXT NOT NULL,
    "start_date" TEXT,

    CONSTRAINT "steam_free_games_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "steam_free_games_steam_app_id_key" ON "steam_free_games"("steam_app_id");

-- CreateIndex
CREATE UNIQUE INDEX "steam_free_games_slug_key" ON "steam_free_games"("slug");
