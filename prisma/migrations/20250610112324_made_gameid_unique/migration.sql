/*
  Warnings:

  - A unique constraint covering the columns `[game_id]` on the table `free_games` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "free_games_game_id_key" ON "free_games"("game_id");
