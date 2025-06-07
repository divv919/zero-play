-- CreateTable
CREATE TABLE "games" (
    "id" SERIAL NOT NULL,
    "steam_app_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL DEFAULT 'game',
    "required_age" INTEGER NOT NULL,
    "is_free" BOOLEAN NOT NULL,
    "detailed_description" TEXT,
    "about_the_game" TEXT,
    "short_description" TEXT,
    "supported_languages" TEXT,
    "header_image" TEXT,
    "capsule_image" TEXT,
    "capsule_image_v5" TEXT,
    "website" TEXT,
    "background" TEXT,
    "background_raw" TEXT,
    "release_date" TIMESTAMP(3),
    "coming_soon" BOOLEAN NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "games_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "system_requirements" (
    "id" SERIAL NOT NULL,
    "minimum" TEXT,
    "recommended" TEXT,
    "game_pc_id" INTEGER,
    "game_mac_id" INTEGER,
    "game_linux_id" INTEGER,

    CONSTRAINT "system_requirements_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "platforms" (
    "id" SERIAL NOT NULL,
    "windows" BOOLEAN NOT NULL DEFAULT false,
    "mac" BOOLEAN NOT NULL DEFAULT false,
    "linux" BOOLEAN NOT NULL DEFAULT false,
    "game_id" INTEGER NOT NULL,

    CONSTRAINT "platforms_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "price_overview" (
    "id" SERIAL NOT NULL,
    "currency" TEXT NOT NULL,
    "initial" INTEGER,
    "final" INTEGER NOT NULL,
    "discount_percent" INTEGER NOT NULL,
    "initial_formatted" TEXT,
    "final_formatted" TEXT NOT NULL,
    "game_id" INTEGER NOT NULL,

    CONSTRAINT "price_overview_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "developers" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "developers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "publishers" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "publishers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "categories" (
    "id" SERIAL NOT NULL,
    "steam_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "game_categories" (
    "game_id" INTEGER NOT NULL,
    "category_id" INTEGER NOT NULL,

    CONSTRAINT "game_categories_pkey" PRIMARY KEY ("game_id","category_id")
);

-- CreateTable
CREATE TABLE "genres" (
    "id" SERIAL NOT NULL,
    "steam_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "genres_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "game_genres" (
    "game_id" INTEGER NOT NULL,
    "genre_id" INTEGER NOT NULL,

    CONSTRAINT "game_genres_pkey" PRIMARY KEY ("game_id","genre_id")
);

-- CreateTable
CREATE TABLE "screenshots" (
    "id" SERIAL NOT NULL,
    "steam_id" INTEGER NOT NULL,
    "path_thumbnail" TEXT NOT NULL,
    "path_full" TEXT NOT NULL,
    "game_id" INTEGER NOT NULL,

    CONSTRAINT "screenshots_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "movies" (
    "id" SERIAL NOT NULL,
    "steam_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "thumbnail" TEXT NOT NULL,
    "webm_480" TEXT,
    "webm_max" TEXT,
    "mp4_480" TEXT,
    "mp4_max" TEXT,
    "highlight" BOOLEAN NOT NULL DEFAULT false,
    "game_id" INTEGER NOT NULL,

    CONSTRAINT "movies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "achievements" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "path" TEXT NOT NULL,
    "game_id" INTEGER NOT NULL,

    CONSTRAINT "achievements_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "packages" (
    "id" SERIAL NOT NULL,
    "steam_id" INTEGER NOT NULL,

    CONSTRAINT "packages_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "package_groups" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "selection_text" TEXT NOT NULL,
    "save_text" TEXT,
    "display_type" INTEGER NOT NULL,
    "is_recurring_subscription" BOOLEAN NOT NULL,
    "game_id" INTEGER NOT NULL,

    CONSTRAINT "package_groups_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "package_group_subscriptions" (
    "id" SERIAL NOT NULL,
    "package_id" INTEGER NOT NULL,
    "percent_savings_text" TEXT,
    "percent_savings" INTEGER NOT NULL,
    "option_text" TEXT NOT NULL,
    "option_description" TEXT,
    "can_get_free_license" TEXT NOT NULL,
    "is_free_license" BOOLEAN NOT NULL,
    "price_in_cents_with_discount" INTEGER NOT NULL,
    "package_group_id" INTEGER NOT NULL,

    CONSTRAINT "package_group_subscriptions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "content_descriptors" (
    "id" SERIAL NOT NULL,
    "ids" INTEGER[],
    "notes" TEXT,
    "game_id" INTEGER NOT NULL,

    CONSTRAINT "content_descriptors_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ratings" (
    "id" SERIAL NOT NULL,
    "system" TEXT NOT NULL,
    "rating" TEXT NOT NULL,
    "descriptors" TEXT,
    "use_age_gate" BOOLEAN NOT NULL,
    "required_age" TEXT,
    "banned" TEXT,
    "game_id" INTEGER NOT NULL,

    CONSTRAINT "ratings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "support_info" (
    "id" SERIAL NOT NULL,
    "url" TEXT,
    "email" TEXT,
    "game_id" INTEGER NOT NULL,

    CONSTRAINT "support_info_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_GameToPublisher" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_GameToPublisher_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_GameToPackage" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_GameToPackage_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_DeveloperToGame" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_DeveloperToGame_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "games_steam_app_id_key" ON "games"("steam_app_id");

-- CreateIndex
CREATE UNIQUE INDEX "system_requirements_game_pc_id_key" ON "system_requirements"("game_pc_id");

-- CreateIndex
CREATE UNIQUE INDEX "system_requirements_game_mac_id_key" ON "system_requirements"("game_mac_id");

-- CreateIndex
CREATE UNIQUE INDEX "system_requirements_game_linux_id_key" ON "system_requirements"("game_linux_id");

-- CreateIndex
CREATE UNIQUE INDEX "platforms_game_id_key" ON "platforms"("game_id");

-- CreateIndex
CREATE UNIQUE INDEX "price_overview_game_id_key" ON "price_overview"("game_id");

-- CreateIndex
CREATE UNIQUE INDEX "developers_name_key" ON "developers"("name");

-- CreateIndex
CREATE UNIQUE INDEX "publishers_name_key" ON "publishers"("name");

-- CreateIndex
CREATE UNIQUE INDEX "categories_steam_id_key" ON "categories"("steam_id");

-- CreateIndex
CREATE UNIQUE INDEX "genres_steam_id_key" ON "genres"("steam_id");

-- CreateIndex
CREATE UNIQUE INDEX "packages_steam_id_key" ON "packages"("steam_id");

-- CreateIndex
CREATE UNIQUE INDEX "content_descriptors_game_id_key" ON "content_descriptors"("game_id");

-- CreateIndex
CREATE UNIQUE INDEX "support_info_game_id_key" ON "support_info"("game_id");

-- CreateIndex
CREATE INDEX "_GameToPublisher_B_index" ON "_GameToPublisher"("B");

-- CreateIndex
CREATE INDEX "_GameToPackage_B_index" ON "_GameToPackage"("B");

-- CreateIndex
CREATE INDEX "_DeveloperToGame_B_index" ON "_DeveloperToGame"("B");

-- AddForeignKey
ALTER TABLE "system_requirements" ADD CONSTRAINT "system_requirements_game_pc_id_fkey" FOREIGN KEY ("game_pc_id") REFERENCES "games"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "system_requirements" ADD CONSTRAINT "system_requirements_game_mac_id_fkey" FOREIGN KEY ("game_mac_id") REFERENCES "games"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "system_requirements" ADD CONSTRAINT "system_requirements_game_linux_id_fkey" FOREIGN KEY ("game_linux_id") REFERENCES "games"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "platforms" ADD CONSTRAINT "platforms_game_id_fkey" FOREIGN KEY ("game_id") REFERENCES "games"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "price_overview" ADD CONSTRAINT "price_overview_game_id_fkey" FOREIGN KEY ("game_id") REFERENCES "games"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "game_categories" ADD CONSTRAINT "game_categories_game_id_fkey" FOREIGN KEY ("game_id") REFERENCES "games"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "game_categories" ADD CONSTRAINT "game_categories_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "game_genres" ADD CONSTRAINT "game_genres_game_id_fkey" FOREIGN KEY ("game_id") REFERENCES "games"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "game_genres" ADD CONSTRAINT "game_genres_genre_id_fkey" FOREIGN KEY ("genre_id") REFERENCES "genres"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "screenshots" ADD CONSTRAINT "screenshots_game_id_fkey" FOREIGN KEY ("game_id") REFERENCES "games"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "movies" ADD CONSTRAINT "movies_game_id_fkey" FOREIGN KEY ("game_id") REFERENCES "games"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "achievements" ADD CONSTRAINT "achievements_game_id_fkey" FOREIGN KEY ("game_id") REFERENCES "games"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "package_groups" ADD CONSTRAINT "package_groups_game_id_fkey" FOREIGN KEY ("game_id") REFERENCES "games"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "package_group_subscriptions" ADD CONSTRAINT "package_group_subscriptions_package_group_id_fkey" FOREIGN KEY ("package_group_id") REFERENCES "package_groups"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "content_descriptors" ADD CONSTRAINT "content_descriptors_game_id_fkey" FOREIGN KEY ("game_id") REFERENCES "games"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ratings" ADD CONSTRAINT "ratings_game_id_fkey" FOREIGN KEY ("game_id") REFERENCES "games"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "support_info" ADD CONSTRAINT "support_info_game_id_fkey" FOREIGN KEY ("game_id") REFERENCES "games"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GameToPublisher" ADD CONSTRAINT "_GameToPublisher_A_fkey" FOREIGN KEY ("A") REFERENCES "games"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GameToPublisher" ADD CONSTRAINT "_GameToPublisher_B_fkey" FOREIGN KEY ("B") REFERENCES "publishers"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GameToPackage" ADD CONSTRAINT "_GameToPackage_A_fkey" FOREIGN KEY ("A") REFERENCES "games"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GameToPackage" ADD CONSTRAINT "_GameToPackage_B_fkey" FOREIGN KEY ("B") REFERENCES "packages"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DeveloperToGame" ADD CONSTRAINT "_DeveloperToGame_A_fkey" FOREIGN KEY ("A") REFERENCES "developers"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DeveloperToGame" ADD CONSTRAINT "_DeveloperToGame_B_fkey" FOREIGN KEY ("B") REFERENCES "games"("id") ON DELETE CASCADE ON UPDATE CASCADE;
