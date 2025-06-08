-- CreateTable
CREATE TABLE "steam_free_games" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "steam_appid" INTEGER NOT NULL,
    "slug" TEXT NOT NULL,
    "short_description" TEXT NOT NULL,
    "image_tall" TEXT NOT NULL,
    "image_wide" TEXT NOT NULL,
    "date" TEXT,

    CONSTRAINT "steam_free_games_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "steam_free_games_steam_appid_key" ON "steam_free_games"("steam_appid");

-- CreateIndex
CREATE UNIQUE INDEX "steam_free_games_slug_key" ON "steam_free_games"("slug");
