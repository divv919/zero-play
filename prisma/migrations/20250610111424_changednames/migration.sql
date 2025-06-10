/*
  Warnings:

  - Changed the type of `game_id` on the `free_games` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "free_games" DROP COLUMN "game_id",
ADD COLUMN     "game_id" INTEGER NOT NULL;
