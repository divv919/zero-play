import { PrismaClient } from "../../../generated/prisma";
// import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

// Your JSON data
const steamData = {
    "1362460": {
        success: true,
        data: {
            type: "game",
            name: "EMBERZONE",
            steam_appid: 1362460,
            required_age: 0,
            is_free: false,
            detailed_description:
                '<p class="bb_paragraph"><strong>EMBERZONE</strong> - This story is about Sarah, a 24-year-old girl. Her life wasn\'t much different from the lives of millions of others Americans. Sarah was interned as a journalist, but there\'s nothing special about it because many girls at her age choose to work in this field. In general, her whole life was quite calm and measured, but one day changed everything.</p><p class="bb_paragraph"></p><p class="bb_paragraph"><strong>Gameplay:</strong></p><p class="bb_paragraph">- Linear horror story with a speaker in the background</p><p class="bb_paragraph">- A short 15-20 minute game that can be completed at a time</p><p class="bb_paragraph">- Walk around locations, talk with NPCs, find out what happened to the main character</p><p class="bb_paragraph"></p>',
            about_the_game:
                '<p class="bb_paragraph"><strong>EMBERZONE</strong> - This story is about Sarah, a 24-year-old girl. Her life wasn\'t much different from the lives of millions of others Americans. Sarah was interned as a journalist, but there\'s nothing special about it because many girls at her age choose to work in this field. In general, her whole life was quite calm and measured, but one day changed everything.</p><p class="bb_paragraph"></p><p class="bb_paragraph"><strong>Gameplay:</strong></p><p class="bb_paragraph">- Linear horror story with a speaker in the background</p><p class="bb_paragraph">- A short 15-20 minute game that can be completed at a time</p><p class="bb_paragraph">- Walk around locations, talk with NPCs, find out what happened to the main character</p><p class="bb_paragraph"></p>',
            short_description:
                "EMBERZONE - is a short, first-person story game. It's a story about loss. You play as a simple girl in whose life happens something horrible.",
            supported_languages:
                "English<strong>*</strong>, Russian, French, Italian, German, Spanish - Spain, Traditional Chinese, Korean, Polish, Portuguese - Portugal, Romanian, Turkish, Japanese<br><strong>*</strong>languages with full audio support",
            header_image:
                "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1362460/header.jpg?t=1744209756",
            capsule_image:
                "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1362460/capsule_231x87.jpg?t=1744209756",
            capsule_imagev5:
                "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1362460/capsule_184x69.jpg?t=1744209756",
            website: null,
            pc_requirements: {
                minimum:
                    '<strong>Minimum:</strong><br><ul class="bb_ul"><li>Requires a 64-bit processor and operating system<br></li><li><strong>OS *:</strong> Windows 7 / 8 / 10 | 64-bits<br></li><li><strong>Processor:</strong> Intel Core i3 / AMD Athlon II X3<br></li><li><strong>Memory:</strong> 4 GB RAM<br></li><li><strong>Graphics:</strong> NVIDIA Geforce GTX 660 / ATI Radeon HD 7850<br></li><li><strong>Storage:</strong> 7900 MB available space</li></ul>',
                recommended:
                    '<strong>Recommended:</strong><br><ul class="bb_ul"><li>Requires a 64-bit processor and operating system<br></li><li><strong>OS *:</strong> Windows 7 / 8 / 10 | 64-bits<br></li><li><strong>Processor:</strong> Intel Core i5 / AMD Ryzen 5 3600X<br></li><li><strong>Memory:</strong> 6 GB RAM<br></li><li><strong>Graphics:</strong> NVIDIA Geforce GTX 1050Ti / AMD Radeon RX560X<br></li><li><strong>Storage:</strong> 7900 MB available space</li></ul>',
            },
            mac_requirements: {
                minimum: '<strong>Minimum:</strong><br><ul class="bb_ul"></ul>',
                recommended:
                    '<strong>Recommended:</strong><br><ul class="bb_ul"></ul>',
            },
            linux_requirements: {
                minimum: '<strong>Minimum:</strong><br><ul class="bb_ul"></ul>',
                recommended:
                    '<strong>Recommended:</strong><br><ul class="bb_ul"></ul>',
            },
            developers: ["VOBL games"],
            publishers: ["VOBL games"],
            price_overview: {
                currency: "INR",
                initial: 4200,
                final: 4200,
                discount_percent: 0,
                initial_formatted: "",
                final_formatted: "₹ 42",
            },
            packages: [477789],
            package_groups: [
                {
                    name: "default",
                    title: "Buy EMBERZONE",
                    description: "",
                    selection_text: "Select a purchase option",
                    save_text: "",
                    display_type: 0,
                    is_recurring_subscription: "false",
                    subs: [
                        {
                            packageid: 477789,
                            percent_savings_text: " ",
                            percent_savings: 0,
                            option_text: "EMBERZONE - ₹ 42",
                            option_description: "",
                            can_get_free_license: "0",
                            is_free_license: false,
                            price_in_cents_with_discount: 4200,
                        },
                    ],
                },
            ],
            platforms: {
                windows: true,
                mac: false,
                linux: false,
            },
            categories: [
                {
                    id: 2,
                    description: "Single-player",
                },
                {
                    id: 22,
                    description: "Steam Achievements",
                },
                {
                    id: 62,
                    description: "Family Sharing",
                },
            ],
            genres: [
                {
                    id: "4",
                    description: "Casual",
                },
                {
                    id: "23",
                    description: "Indie",
                },
            ],
            screenshots: [
                {
                    id: 0,
                    path_thumbnail:
                        "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1362460/ss_812aa2ab5150ff0f22494412ef7883a2bd3f1059.600x338.jpg?t=1744209756",
                    path_full:
                        "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1362460/ss_812aa2ab5150ff0f22494412ef7883a2bd3f1059.1920x1080.jpg?t=1744209756",
                },
                // ... more screenshots
            ],
            movies: [
                {
                    id: 256791345,
                    name: "EMBERZONE - OFFICIAL GAME TRAILER (2020) PC",
                    thumbnail:
                        "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/256791345/movie.293x165.jpg?t=1593801452",
                    webm: {
                        "480": "http://video.akamai.steamstatic.com/store_trailers/256791345/movie480_vp9.webm?t=1593801452",
                        max: "http://video.akamai.steamstatic.com/store_trailers/256791345/movie_max_vp9.webm?t=1593801452",
                    },
                    mp4: {
                        "480": "http://video.akamai.steamstatic.com/store_trailers/256791345/movie480.mp4?t=1593801452",
                        max: "http://video.akamai.steamstatic.com/store_trailers/256791345/movie_max.mp4?t=1593801452",
                    },
                    highlight: true,
                },
            ],
            achievements: {
                total: 4,
                highlighted: [
                    {
                        name: "FINAL",
                        path: "https://cdn.akamai.steamstatic.com/steamcommunity/public/images/apps/1362460/16f95c57f7be47c58d66c298f2984bb9d63c23a9.jpg",
                    },
                    {
                        name: "HOME",
                        path: "https://cdn.akamai.steamstatic.com/steamcommunity/public/images/apps/1362460/edabd9c4c069018ffb44a964390bee191ce81f84.jpg",
                    },
                    {
                        name: "Easter Egg",
                        path: "https://cdn.akamai.steamstatic.com/steamcommunity/public/images/apps/1362460/9c42929c9f806ba0cc3c07c84b55eac44e40f79e.jpg",
                    },
                    {
                        name: "Chatterbox",
                        path: "https://cdn.akamai.steamstatic.com/steamcommunity/public/images/apps/1362460/aa75a4043b3d8d014644aa251cea556c022f40e5.jpg",
                    },
                ],
            },
            release_date: {
                coming_soon: false,
                date: "18 Jul, 2020",
            },
            support_info: {
                url: "",
                email: "vladislav.borovic.games@gmail.com",
            },
            background:
                "https://store.akamai.steamstatic.com/images/storepagebackground/app/1362460?t=1744209756",
            background_raw:
                "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1362460/page_bg_raw.jpg?t=1744209756",
            content_descriptors: {
                ids: [2, 5],
                notes: "The game contains blood",
            },
            ratings: {
                dejus: {
                    rating: "14",
                    descriptors: "Medo\r\nViolência\r\nDrogas ilícitas",
                    use_age_gate: "true",
                    required_age: "14",
                },
                steam_germany: {
                    rating_generated: "1",
                    rating: "16",
                    required_age: "16",
                    banned: "0",
                    use_age_gate: "0",
                    descriptors: "Horror",
                },
            },
        },
    },
};

async function insertSteamGame() {
    try {
        // Extract game data
        const gameId = Object.keys(steamData)[0];
        const gameData = steamData[gameId as keyof typeof steamData].data;

        // Parse release date
        const releaseDate = gameData.release_date?.date
            ? new Date(gameData.release_date.date)
            : null;

        // Insert main game record
        const game = await prisma.game.create({
            data: {
                steamAppId: gameData.steam_appid,
                name: gameData.name,
                type: gameData.type,
                requiredAge: gameData.required_age,
                isFree: gameData.is_free,
                detailedDescription: gameData.detailed_description,
                aboutTheGame: gameData.about_the_game,
                shortDescription: gameData.short_description,
                supportedLanguages: gameData.supported_languages,
                headerImage: gameData.header_image,
                capsuleImage: gameData.capsule_image,
                capsuleImageV5: gameData.capsule_imagev5,
                website: gameData.website,
                background: gameData.background,
                backgroundRaw: gameData.background_raw,
                releaseDate: releaseDate,
                comingSoon: gameData.release_date?.coming_soon || false,
                supportInfo: {
                    create: {
                        url: gameData.support_info?.url,
                        email: gameData.support_info?.email,
                    },
                },
            },
        });

        // Insert system requirements
        if (gameData.pc_requirements?.minimum) {
            await prisma.systemRequirements.create({
                data: {
                    minimum: gameData.pc_requirements.minimum,
                    gamePc: {
                        connect: {
                            id: game.id,
                        },
                    },
                },
            });
        }

        if (gameData.pc_requirements?.recommended) {
            await prisma.systemRequirements.create({
                data: {
                    recommended: gameData.pc_requirements.recommended,
                    gamePc: {
                        connect: {
                            id: game.id,
                        },
                    },
                },
            });
        }

        // Insert developers
        for (const devName of gameData.developers) {
            const developer = await prisma.developer.upsert({
                where: { name: devName },
                update: {},
                create: { name: devName },
            });

            // Connect developer to game
            await prisma.game.update({
                where: { id: game.id },
                data: {
                    developers: {
                        connect: { id: developer.id },
                    },
                },
            });
        }

        // Insert publishers
        for (const pubName of gameData.publishers) {
            const publisher = await prisma.publisher.upsert({
                where: { name: pubName },
                update: {},
                create: { name: pubName },
            });

            // Connect publisher to game
            await prisma.game.update({
                where: { id: game.id },
                data: {
                    publishers: {
                        connect: { id: publisher.id },
                    },
                },
            });
        }

        // Insert categories
        for (const category of gameData.categories) {
            // First check if category exists
            let categoryRecord = await prisma.category.findUnique({
                where: { steamId: category.id },
            });

            // If not, create it
            if (!categoryRecord) {
                categoryRecord = await prisma.category.create({
                    data: {
                        steamId: category.id,
                        name: category.description,
                        description: category.description,
                    },
                });
            }

            // Connect category to game
            await prisma.game.update({
                where: { id: game.id },
                data: {
                    categories: {
                        create: {
                            category: {
                                connect: { id: categoryRecord.id },
                            },
                        },
                    },
                },
            });
        }

        // Insert genres
        for (const genre of gameData.genres) {
            const genreId = parseInt(genre.id);

            // First check if genre exists
            let genreRecord = await prisma.genre.findUnique({
                where: { steamId: genre.id },
            });

            // If not, create it
            if (!genreRecord) {
                genreRecord = await prisma.genre.create({
                    data: {
                        steamId: genre.id,
                        name: genre.description,
                        description: genre.description,
                    },
                });
            }

            // Connect genre to game
            await prisma.game.update({
                where: { id: game.id },
                data: {
                    genres: {
                        create: {
                            genre: {
                                connect: { id: genreRecord.id },
                            },
                        },
                    },
                },
            });
        }

        // Insert screenshots
        for (const screenshot of gameData.screenshots) {
            await prisma.screenshot.create({
                data: {
                    steamId: screenshot.id,
                    pathThumbnail: screenshot.path_thumbnail,
                    pathFull: screenshot.path_full,
                    game: {
                        connect: {
                            id: game.id,
                        },
                    },
                },
            });
        }

        // Insert movies
        for (const movie of gameData.movies) {
            await prisma.movie.create({
                data: {
                    steamId: movie.id,
                    name: movie.name,
                    thumbnail: movie.thumbnail,
                    webm480: movie.webm?.["480"],
                    webmMax: movie.webm?.max,
                    mp4480: movie.mp4?.["480"],
                    mp4Max: movie.mp4?.max,
                    highlight: movie.highlight,
                    game: {
                        connect: {
                            id: game.id,
                        },
                    },
                },
            });
        }

        // Insert achievements
        for (const achievement of gameData.achievements.highlighted) {
            await prisma.achievement.create({
                data: {
                    name: achievement.name,
                    path: achievement.path,
                    game: {
                        connect: {
                            id: game.id,
                        },
                    },
                },
            });
        }

        // Insert pricing
        if (gameData.price_overview) {
            await prisma.priceOverview.create({
                data: {
                    currency: gameData.price_overview.currency,
                    initial: gameData.price_overview.initial,
                    final: gameData.price_overview.final,
                    discountPercent: gameData.price_overview.discount_percent,
                    initialFormatted: gameData.price_overview.initial_formatted,
                    finalFormatted: gameData.price_overview.final_formatted,
                    game: {
                        connect: {
                            id: game.id,
                        },
                    },
                },
            });
        }

        // Insert platform support
        await prisma.platform.create({
            data: {
                windows: gameData.platforms.windows,
                mac: gameData.platforms.mac,
                linux: gameData.platforms.linux,
                game: {
                    connect: {
                        id: game.id,
                    },
                },
            },
        });

        // Insert content descriptors
        if (gameData.content_descriptors?.ids) {
            await prisma.contentDescriptor.create({
                data: {
                    ids: gameData.content_descriptors.ids,
                    notes: gameData.content_descriptors.notes,
                    game: {
                        connect: {
                            id: game.id,
                        },
                    },
                },
            });
        }

        // Insert ratings
        if (gameData.ratings) {
            for (const [ratingSystem, ratingData] of Object.entries(
                gameData.ratings
            )) {
                // Handle potential missing properties
                let banned = "false";
                if ("banned" in ratingData && ratingData.banned === "1") {
                    banned = "true";
                }

                await prisma.rating.create({
                    data: {
                        system: ratingSystem,
                        rating: ratingData.rating,
                        descriptors: ratingData.descriptors,
                        useAgeGate:
                            ratingData.use_age_gate === "true" ||
                            ratingData.use_age_gate === "1",
                        requiredAge: ratingData.required_age || null,
                        banned: banned,
                        game: {
                            connect: {
                                id: game.id,
                            },
                        },
                    },
                });
            }
        }

        // Insert packages
        for (const packageId of gameData.packages) {
            await prisma.package.create({
                data: {
                    steamId: packageId,
                    games: {
                        connect: {
                            id: game.id,
                        },
                    },
                },
            });
        }

        // Insert package groups
        for (const packageGroup of gameData.package_groups) {
            const createdPackageGroup = await prisma.packageGroup.create({
                data: {
                    name: packageGroup.name,
                    title: packageGroup.title,
                    description: packageGroup.description || "",
                    selectionText: packageGroup.selection_text,
                    saveText: packageGroup.save_text || "",
                    displayType: packageGroup.display_type,
                    isRecurringSubscription:
                        packageGroup.is_recurring_subscription === "true",
                    game: {
                        connect: {
                            id: game.id,
                        },
                    },
                },
            });

            // Insert subscriptions for this package group
            for (const sub of packageGroup.subs) {
                await prisma.packageGroupSubscription.create({
                    data: {
                        packageId: sub.packageid,
                        percentSavingsText: sub.percent_savings_text,
                        percentSavings: sub.percent_savings,
                        optionText: sub.option_text,
                        optionDescription: sub.option_description || "",
                        canGetFreeLicense: sub.can_get_free_license,
                        isFreeLicense: sub.is_free_license,
                        priceInCentsWithDiscount:
                            sub.price_in_cents_with_discount,
                        packageGroup: {
                            connect: {
                                id: createdPackageGroup.id,
                            },
                        },
                    },
                });
            }
        }

        console.log("Game inserted successfully!");
        console.log(`Inserted game: ${game.name} (ID: ${game.steamAppId})`);
    } catch (error) {
        console.error("Error inserting game:", error);
    } finally {
        await prisma.$disconnect();
    }
}

// Run the insertion
insertSteamGame();
