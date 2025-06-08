-- CreateTable
CREATE TABLE "free_games" (
    "source" TEXT NOT NULL,
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "short_description" TEXT NOT NULL,
    "image_tall" TEXT NOT NULL,
    "image_wide" TEXT NOT NULL,
    "release_date" TEXT,

    CONSTRAINT "free_games_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "free_games_slug_key" ON "free_games"("slug");
