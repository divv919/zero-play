-- CreateTable
CREATE TABLE "steam_free_games_ids" (
    "id" SERIAL NOT NULL,
    "gameIds" INTEGER[],

    CONSTRAINT "steam_free_games_ids_pkey" PRIMARY KEY ("id")
);
