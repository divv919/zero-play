import { PrismaClient } from "../../../../../generated/prisma";


const prisma = new PrismaClient();

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const steamAppId = parseInt(params.id);
    
    const game = await prisma.game.findUnique({
      where: { steamAppId },
      include: {
        developers: true,
        publishers: true,
        categories: {
          include: {
            category: true
          }
        },
        genres: {
          include: {
            genre: true
          }
        },
        screenshots: true,
        movies: true,
        achievements: true,
        priceOverview: true,
        platforms: true,
        contentDescriptors: true,
        ratings: true,
        packages: true,
        packageGroups: {
          include: {
            subscriptions: true
          }
        },
        supportInfo: true,
        // systemRequirements: true
      }
    });

    if (!game) {
      return Response.json({ message: 'Game not found' }, { status: 404 });
    }

    // Transform the data to match your original Steam API format
    const transformedGame = {
      [game.steamAppId]: {
        success: true,
        data: {
          type: game.type,
          name: game.name,
          steam_appid: game.steamAppId,
          required_age: game.requiredAge,
          is_free: game.isFree,
          detailed_description: game.detailedDescription,
          about_the_game: game.aboutTheGame,
          short_description: game.shortDescription,
          supported_languages: game.supportedLanguages,
          header_image: game.headerImage,
          capsule_image: game.capsuleImage,
          capsule_imagev5: game.capsuleImageV5,
          website: game.website,
          background: game.background,
          background_raw: game.backgroundRaw,
          pc_requirements: {
            // minimum: game.systemRequirements?.find((req: any) => req.minimum)?.minimum || "",
            // recommended: game.systemRequirements?.find((req: any) => req.recommended)?.recommended || "",
          },
          mac_requirements: {
            minimum: "",
            recommended: "",
          },
          linux_requirements: {
            minimum: "",
            recommended: "",
          },
          developers: game.developers.map((dev: any) => dev.name),
          publishers: game.publishers.map((pub: any) => pub.name),
          price_overview: game.priceOverview ? {
            currency: game.priceOverview.currency,
            initial: game.priceOverview.initial,
            final: game.priceOverview.final,
            discount_percent: game.priceOverview.discountPercent,
            initial_formatted: game.priceOverview.initialFormatted,
            final_formatted: game.priceOverview.finalFormatted,
          } : null,
          platforms: {
            windows: game.platforms?.windows || false,
            mac: game.platforms?.mac || false,
            linux: game.platforms?.linux || false,
          },
          categories: game.categories.map((cat: any) => ({
            id: cat.category.steamId,
            description: cat.category.description,
          })),
          genres: game.genres.map((genre: any) => ({
            id: genre.genre.steamId,
            description: genre.genre.description,
          })),
          screenshots: game.screenshots.map((screenshot: any) => ({
            id: screenshot.steamId,
            path_thumbnail: screenshot.pathThumbnail,
            path_full: screenshot.pathFull,
          })),
          movies: game.movies.map((movie: any) => ({
            id: movie.steamId,
            name: movie.name,
            thumbnail: movie.thumbnail,
            webm: {
              "480": movie.webm480 || "",
              max: movie.webmMax || "",
            },
            mp4: {
              "480": movie.mp4480 || "",
              max: movie.mp4Max || "",
            },
            highlight: movie.highlight,
          })),
          achievements: {
            total: game.achievements.length,
            highlighted: game.achievements.map((achievement: any) => ({
              name: achievement.name,
              path: achievement.path,
            })),
          },
          release_date: {
            coming_soon: game.comingSoon,
            date: game.releaseDate?.toLocaleDateString('en-US', {
              day: 'numeric',
              month: 'short',
              year: 'numeric'
            }) || "",
          },
          support_info: {
            url: game.supportInfo?.url || "",
            email: game.supportInfo?.email || "",
          },
          content_descriptors: game.contentDescriptors ? {
            ids: game.contentDescriptors.ids,
            notes: game.contentDescriptors.notes || "",
          } : {
            ids: [],
            notes: ""
          },
          ratings: game.ratings.reduce((acc: any, rating: any) => {
            acc[rating.system] = {
              rating: rating.rating,
              descriptors: rating.descriptors || "",
              use_age_gate: rating.useAgeGate ? "true" : "false",
              required_age: rating.requiredAge || "",
              banned: rating.banned || "false",
            };
            return acc;
          }, {} as any),
          packages: game.packages.map((pkg: any) => pkg.steamId),
          package_groups: game.packageGroups.map((group: any) => ({
            name: group.name,
            title: group.title,
            description: group.description || "",
            selection_text: group.selectionText,
            save_text: group.saveText || "",
            display_type: group.displayType,
            is_recurring_subscription: group.isRecurringSubscription ? "true" : "false",
            subs: group.subscriptions.map((sub: any) => ({
              packageid: sub.packageId,
              percent_savings_text: sub.percentSavingsText,
              percent_savings: sub.percentSavings,
              option_text: sub.optionText,
              option_description: sub.optionDescription || "",
              can_get_free_license: sub.canGetFreeLicense,
              is_free_license: sub.isFreeLicense,
              price_in_cents_with_discount: sub.priceInCentsWithDiscount,
            })),
          })),
        }
      }
    };

    return Response.json(transformedGame);
  } catch (error) {
    console.error('Error fetching game:', error);
    return Response.json({ message: 'Internal server error' }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}