-- CreateTable
CREATE TABLE "steamFreeGames" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "steam_app_id" INTEGER NOT NULL,
    "slug" TEXT NOT NULL,
    "short_description" TEXT NOT NULL,
    "header_image" TEXT NOT NULL,
    "capsule_image" TEXT NOT NULL,
    "start_date" TEXT,

    CONSTRAINT "steamFreeGames_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "steamFreeGames_steam_app_id_key" ON "steamFreeGames"("steam_app_id");

-- CreateIndex
CREATE UNIQUE INDEX "steamFreeGames_slug_key" ON "steamFreeGames"("slug");
