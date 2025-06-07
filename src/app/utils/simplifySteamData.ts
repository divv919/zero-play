export const simplifySteamData = (data: any) => {
    const {
        type,
        // name,
        // steam_appid,
        // is_free,
        required_age,
        dlc,
        detailed_description,
        // short_description,
        about_the_game,
        supported_languages,
        website,
        // header_image,
        // capsule_image,
        capsule_imagev5,
        pc_requirements,
        mac_requirements,
        linux_requirements,
        developers,
        publishers,
        packages,
        package_groups,
        platforms,
        categories,
        genres,
        screenshots,
        movies,
        recommendations,
        achievements,
        background_raw,
        ratings,
        // release_date,
        support_info,
        background,
        content_descriptors,
        ...data1
    } = data;

    return data1;
};

const data = {
    "730": {
        success: true,
        data: {
            type: "game",
            name: "Counter-Strike 2",
            steam_appid: 730,
            required_age: 0,
            is_free: true,
            dlc: [2678630],
            detailed_description:
                'For over two decades, Counter-Strike has offered an elite competitive experience, one shaped by millions of players from across the globe. And now the next chapter in the CS story is about to begin. This is Counter-Strike 2.\u003Cbr\u003E\u003Cbr\u003EA free upgrade to CS:GO, Counter-Strike 2 marks the largest technical leap in Counter-Strike’s history. Built on the Source 2 engine, Counter-Strike 2 is modernized with realistic physically-based rendering, state of the art networking, and upgraded Community Workshop tools.\u003Cbr\u003E\u003Cbr\u003EIn addition to the classic objective-focused gameplay that Counter-Strike pioneered in 1999, Counter-Strike 2 features:\u003Cbr\u003E\u003Cbr\u003E\u003Cul class="bb_ul"\u003E\u003Cli\u003EAll-new CS Ratings with the updated Premier mode\u003Cbr\u003E\u003C/li\u003E\u003Cli\u003EGlobal and Regional leaderboards\u003Cbr\u003E\u003C/li\u003E\u003Cli\u003EUpgraded and overhauled maps\u003Cbr\u003E\u003C/li\u003E\u003Cli\u003EGame-changing dynamic smoke grenades\u003Cbr\u003E\u003C/li\u003E\u003Cli\u003ETick-rate-independent gameplay\u003Cbr\u003E\u003C/li\u003E\u003Cli\u003ERedesigned visual effects and audio\u003Cbr\u003E\u003C/li\u003E\u003Cli\u003EAll items from CS:GO moving forward to CS2\u003C/li\u003E\u003C/ul\u003E',
            about_the_game:
                'For over two decades, Counter-Strike has offered an elite competitive experience, one shaped by millions of players from across the globe. And now the next chapter in the CS story is about to begin. This is Counter-Strike 2.\u003Cbr\u003E\u003Cbr\u003EA free upgrade to CS:GO, Counter-Strike 2 marks the largest technical leap in Counter-Strike’s history. Built on the Source 2 engine, Counter-Strike 2 is modernized with realistic physically-based rendering, state of the art networking, and upgraded Community Workshop tools.\u003Cbr\u003E\u003Cbr\u003EIn addition to the classic objective-focused gameplay that Counter-Strike pioneered in 1999, Counter-Strike 2 features:\u003Cbr\u003E\u003Cbr\u003E\u003Cul class="bb_ul"\u003E\u003Cli\u003EAll-new CS Ratings with the updated Premier mode\u003Cbr\u003E\u003C/li\u003E\u003Cli\u003EGlobal and Regional leaderboards\u003Cbr\u003E\u003C/li\u003E\u003Cli\u003EUpgraded and overhauled maps\u003Cbr\u003E\u003C/li\u003E\u003Cli\u003EGame-changing dynamic smoke grenades\u003Cbr\u003E\u003C/li\u003E\u003Cli\u003ETick-rate-independent gameplay\u003Cbr\u003E\u003C/li\u003E\u003Cli\u003ERedesigned visual effects and audio\u003Cbr\u003E\u003C/li\u003E\u003Cli\u003EAll items from CS:GO moving forward to CS2\u003C/li\u003E\u003C/ul\u003E',
            short_description:
                "For over two decades, Counter-Strike has offered an elite competitive experience, one shaped by millions of players from across the globe. And now the next chapter in the CS story is about to begin. This is Counter-Strike 2.",
            supported_languages:
                "Czech, Danish, Dutch, English\u003Cstrong\u003E*\u003C/strong\u003E, Finnish, French, German, Hungarian, Italian, Japanese, Korean, Norwegian, Polish, Portuguese - Portugal, Portuguese - Brazil, Romanian, Russian, Simplified Chinese, Spanish - Spain, Swedish, Thai, Traditional Chinese, Turkish, Bulgarian, Ukrainian, Greek, Spanish - Latin America, Vietnamese, Indonesian\u003Cbr\u003E\u003Cstrong\u003E*\u003C/strong\u003Elanguages with full audio support",
            header_image:
                "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/730/header.jpg?t=1749053861",
            capsule_image:
                "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/730/capsule_231x87.jpg?t=1749053861",
            capsule_imagev5:
                "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/730/capsule_184x69.jpg?t=1749053861",
            website: "http://counter-strike.net/",
            pc_requirements: {
                minimum:
                    '\u003Cstrong\u003EMinimum:\u003C/strong\u003E\u003Cbr\u003E\u003Cul class="bb_ul"\u003E\u003Cli\u003E\u003Cstrong\u003EOS:\u003C/strong\u003E Windows® 10\u003Cbr\u003E\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003EProcessor:\u003C/strong\u003E 4 hardware CPU threads - Intel® Core™ i5 750 or higher\u003Cbr\u003E\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003EMemory:\u003C/strong\u003E 8 GB RAM\u003Cbr\u003E\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003EGraphics:\u003C/strong\u003E Video card must be 1 GB or more and should be a DirectX 11-compatible with support for Shader Model 5.0\u003Cbr\u003E\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003EDirectX:\u003C/strong\u003E Version 11\u003Cbr\u003E\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003EStorage:\u003C/strong\u003E 85 GB available space\u003C/li\u003E\u003C/ul\u003E',
            },
            mac_requirements: {
                minimum:
                    '\u003Cstrong\u003EMinimum:\u003C/strong\u003E\u003Cbr\u003E\u003Cul class="bb_ul"\u003E\u003Cli\u003E\u003Cstrong\u003EOS:\u003C/strong\u003E MacOS X 10.11 (El Capitan) or later\u003Cbr\u003E\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003EProcessor:\u003C/strong\u003E Intel Core Duo Processor (2GHz or better)\u003Cbr\u003E\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003EMemory:\u003C/strong\u003E 2 GB RAM\u003Cbr\u003E\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003EGraphics:\u003C/strong\u003E ATI Radeon HD 2400 or better / NVIDIA 8600M or better\u003Cbr\u003E\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003EStorage:\u003C/strong\u003E 15 GB available space\u003C/li\u003E\u003C/ul\u003E',
            },
            linux_requirements: {
                minimum:
                    '\u003Cstrong\u003EMinimum:\u003C/strong\u003E\u003Cbr\u003E\u003Cul class="bb_ul"\u003E\u003Cli\u003E\u003Cstrong\u003EOS:\u003C/strong\u003E Ubuntu 20.04\u003Cbr\u003E\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003EProcessor:\u003C/strong\u003E 4 hardware CPU threads - Intel® Core™ i5 750 or higher\u003Cbr\u003E\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003EMemory:\u003C/strong\u003E 8 GB RAM\u003Cbr\u003E\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003EGraphics:\u003C/strong\u003E AMD GCN+ or NVIDIA Kepler+ with up-to-date Vulkan drivers.  Support for VK_EXT_graphics_pipeline_library highly recommended.\u003Cbr\u003E\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003EStorage:\u003C/strong\u003E 85 GB available space\u003Cbr\u003E\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003ESound Card:\u003C/strong\u003E Highly recommended\u003C/li\u003E\u003C/ul\u003E',
            },
            developers: ["Valve"],
            publishers: ["Valve"],
            packages: [329385, 298963, 54029],
            package_groups: [
                {
                    name: "default",
                    title: "Buy Counter-Strike 2",
                    description: "",
                    selection_text: "Select a purchase option",
                    save_text: "",
                    display_type: 0,
                    is_recurring_subscription: "false",
                    subs: [
                        {
                            packageid: 298963,
                            percent_savings_text: " ",
                            percent_savings: 0,
                            option_text: "Counter-Strike 2 - Free",
                            option_description: "",
                            can_get_free_license: "0",
                            is_free_license: true,
                            price_in_cents_with_discount: 0,
                        },
                        {
                            packageid: 54029,
                            percent_savings_text: " ",
                            percent_savings: 0,
                            option_text: "Prime Status Upgrade - ₹ 1,270",
                            option_description: "",
                            can_get_free_license: "0",
                            is_free_license: false,
                            price_in_cents_with_discount: 127000,
                        },
                    ],
                },
            ],
            platforms: {
                windows: true,
                mac: false,
                linux: true,
            },
            categories: [
                {
                    id: 1,
                    description: "Multi-player",
                },
                {
                    id: 27,
                    description: "Cross-Platform Multiplayer",
                },
                {
                    id: 29,
                    description: "Steam Trading Cards",
                },
                {
                    id: 30,
                    description: "Steam Workshop",
                },
                {
                    id: 35,
                    description: "In-App Purchases",
                },
                {
                    id: 8,
                    description: "Valve Anti-Cheat enabled",
                },
                {
                    id: 15,
                    description: "Stats",
                },
                {
                    id: 41,
                    description: "Remote Play on Phone",
                },
                {
                    id: 42,
                    description: "Remote Play on Tablet",
                },
                {
                    id: 43,
                    description: "Remote Play on TV",
                },
                {
                    id: 63,
                    description: "Steam Timeline",
                },
            ],
            genres: [
                {
                    id: "1",
                    description: "Action",
                },
                {
                    id: "37",
                    description: "Free To Play",
                },
            ],
            screenshots: [
                {
                    id: 0,
                    path_thumbnail:
                        "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/730/ss_796601d9d67faf53486eeb26d0724347cea67ddc.600x338.jpg?t=1749053861",
                    path_full:
                        "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/730/ss_796601d9d67faf53486eeb26d0724347cea67ddc.1920x1080.jpg?t=1749053861",
                },
                {
                    id: 1,
                    path_thumbnail:
                        "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/730/ss_d830cfd0550fbb64d80e803e93c929c3abb02056.600x338.jpg?t=1749053861",
                    path_full:
                        "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/730/ss_d830cfd0550fbb64d80e803e93c929c3abb02056.1920x1080.jpg?t=1749053861",
                },
                {
                    id: 2,
                    path_thumbnail:
                        "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/730/ss_13bb35638c0267759276f511ee97064773b37a51.600x338.jpg?t=1749053861",
                    path_full:
                        "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/730/ss_13bb35638c0267759276f511ee97064773b37a51.1920x1080.jpg?t=1749053861",
                },
                {
                    id: 3,
                    path_thumbnail:
                        "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/730/ss_0f8cf82d019c614760fd20801f2bb4001da7ea77.600x338.jpg?t=1749053861",
                    path_full:
                        "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/730/ss_0f8cf82d019c614760fd20801f2bb4001da7ea77.1920x1080.jpg?t=1749053861",
                },
                {
                    id: 4,
                    path_thumbnail:
                        "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/730/ss_ef82850f036dac5772cb07dbc2d1116ea13eb163.600x338.jpg?t=1749053861",
                    path_full:
                        "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/730/ss_ef82850f036dac5772cb07dbc2d1116ea13eb163.1920x1080.jpg?t=1749053861",
                },
                {
                    id: 5,
                    path_thumbnail:
                        "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/730/ss_76f6730dbb911650ba1f41c8e5b4bac638b5beea.600x338.jpg?t=1749053861",
                    path_full:
                        "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/730/ss_76f6730dbb911650ba1f41c8e5b4bac638b5beea.1920x1080.jpg?t=1749053861",
                },
                {
                    id: 6,
                    path_thumbnail:
                        "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/730/ss_808cdd373d78c3cf3a78e7026ebb1a15895e0670.600x338.jpg?t=1749053861",
                    path_full:
                        "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/730/ss_808cdd373d78c3cf3a78e7026ebb1a15895e0670.1920x1080.jpg?t=1749053861",
                },
                {
                    id: 7,
                    path_thumbnail:
                        "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/730/ss_ef98db5d5a4d877531a5567df082b0fb62d75c80.600x338.jpg?t=1749053861",
                    path_full:
                        "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/730/ss_ef98db5d5a4d877531a5567df082b0fb62d75c80.1920x1080.jpg?t=1749053861",
                },
                {
                    id: 8,
                    path_thumbnail:
                        "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/730/ss_2254a50f27951fb9028bc00b93a7f2ed7aac1e13.600x338.jpg?t=1749053861",
                    path_full:
                        "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/730/ss_2254a50f27951fb9028bc00b93a7f2ed7aac1e13.1920x1080.jpg?t=1749053861",
                },
                {
                    id: 9,
                    path_thumbnail:
                        "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/730/ss_54b9c26b028c84d5f8a5316f31ae6203953ed84d.600x338.jpg?t=1749053861",
                    path_full:
                        "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/730/ss_54b9c26b028c84d5f8a5316f31ae6203953ed84d.1920x1080.jpg?t=1749053861",
                },
                {
                    id: 10,
                    path_thumbnail:
                        "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/730/ss_1b3b5fd437939a7ed00a2155269e78994cb998d3.600x338.jpg?t=1749053861",
                    path_full:
                        "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/730/ss_1b3b5fd437939a7ed00a2155269e78994cb998d3.1920x1080.jpg?t=1749053861",
                },
                {
                    id: 11,
                    path_thumbnail:
                        "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/730/ss_352666c1949ce3966bd966d6ea5a1afd532257bc.600x338.jpg?t=1749053861",
                    path_full:
                        "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/730/ss_352666c1949ce3966bd966d6ea5a1afd532257bc.1920x1080.jpg?t=1749053861",
                },
                {
                    id: 12,
                    path_thumbnail:
                        "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/730/ss_63d2733b9b4ace01a41d5ba8afd653245d05d54a.600x338.jpg?t=1749053861",
                    path_full:
                        "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/730/ss_63d2733b9b4ace01a41d5ba8afd653245d05d54a.1920x1080.jpg?t=1749053861",
                },
                {
                    id: 13,
                    path_thumbnail:
                        "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/730/ss_fe70d46859593aef623a0614f4686e2814405035.600x338.jpg?t=1749053861",
                    path_full:
                        "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/730/ss_fe70d46859593aef623a0614f4686e2814405035.1920x1080.jpg?t=1749053861",
                },
                {
                    id: 14,
                    path_thumbnail:
                        "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/730/ss_bb2af3e83ac0385ff2055f2ab9697cdd83e351b7.600x338.jpg?t=1749053861",
                    path_full:
                        "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/730/ss_bb2af3e83ac0385ff2055f2ab9697cdd83e351b7.1920x1080.jpg?t=1749053861",
                },
                {
                    id: 15,
                    path_thumbnail:
                        "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/730/ss_fb8e5e2ae29ce64e2898315c66b5db08989e8f91.600x338.jpg?t=1749053861",
                    path_full:
                        "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/730/ss_fb8e5e2ae29ce64e2898315c66b5db08989e8f91.1920x1080.jpg?t=1749053861",
                },
                {
                    id: 16,
                    path_thumbnail:
                        "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/730/ss_0db84c628a798e38ca57d69abda119bee1358008.600x338.jpg?t=1749053861",
                    path_full:
                        "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/730/ss_0db84c628a798e38ca57d69abda119bee1358008.1920x1080.jpg?t=1749053861",
                },
                {
                    id: 17,
                    path_thumbnail:
                        "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/730/ss_18e9ea2715f0407ee05e206073927a648db60d73.600x338.jpg?t=1749053861",
                    path_full:
                        "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/730/ss_18e9ea2715f0407ee05e206073927a648db60d73.1920x1080.jpg?t=1749053861",
                },
                {
                    id: 18,
                    path_thumbnail:
                        "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/730/ss_2514675f364079b754b820cbc8b2e7c331d56a26.600x338.jpg?t=1749053861",
                    path_full:
                        "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/730/ss_2514675f364079b754b820cbc8b2e7c331d56a26.1920x1080.jpg?t=1749053861",
                },
            ],
            movies: [
                {
                    id: 256972298,
                    name: "Launch Trailer",
                    thumbnail:
                        "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/256972298/movie.293x165.jpg?t=1696005467",
                    webm: {
                        "480": "http://video.akamai.steamstatic.com/store_trailers/256972298/movie480_vp9.webm?t=1696005467",
                        max: "http://video.akamai.steamstatic.com/store_trailers/256972298/movie_max_vp9.webm?t=1696005467",
                    },
                    mp4: {
                        "480": "http://video.akamai.steamstatic.com/store_trailers/256972298/movie480.mp4?t=1696005467",
                        max: "http://video.akamai.steamstatic.com/store_trailers/256972298/movie_max.mp4?t=1696005467",
                    },
                    highlight: true,
                },
                {
                    id: 256970298,
                    name: "Moving Beyond Tick Rate",
                    thumbnail:
                        "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/256970298/movie.293x165.jpg?t=1696005475",
                    webm: {
                        "480": "http://video.akamai.steamstatic.com/store_trailers/256970298/movie480_vp9.webm?t=1696005475",
                        max: "http://video.akamai.steamstatic.com/store_trailers/256970298/movie_max_vp9.webm?t=1696005475",
                    },
                    mp4: {
                        "480": "http://video.akamai.steamstatic.com/store_trailers/256970298/movie480.mp4?t=1696005475",
                        max: "http://video.akamai.steamstatic.com/store_trailers/256970298/movie_max.mp4?t=1696005475",
                    },
                    highlight: true,
                },
                {
                    id: 256969703,
                    name: "Leveling Up",
                    thumbnail:
                        "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/256969703/movie.293x165.jpg?t=1696005483",
                    webm: {
                        "480": "http://video.akamai.steamstatic.com/store_trailers/256969703/movie480_vp9.webm?t=1696005483",
                        max: "http://video.akamai.steamstatic.com/store_trailers/256969703/movie_max_vp9.webm?t=1696005483",
                    },
                    mp4: {
                        "480": "http://video.akamai.steamstatic.com/store_trailers/256969703/movie480.mp4?t=1696005483",
                        max: "http://video.akamai.steamstatic.com/store_trailers/256969703/movie_max.mp4?t=1696005483",
                    },
                    highlight: true,
                },
                {
                    id: 256969690,
                    name: "Responsive Smokes",
                    thumbnail:
                        "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/256969690/movie.293x165.jpg?t=1696005491",
                    webm: {
                        "480": "http://video.akamai.steamstatic.com/store_trailers/256969690/movie480_vp9.webm?t=1696005491",
                        max: "http://video.akamai.steamstatic.com/store_trailers/256969690/movie_max_vp9.webm?t=1696005491",
                    },
                    mp4: {
                        "480": "http://video.akamai.steamstatic.com/store_trailers/256969690/movie480.mp4?t=1696005491",
                        max: "http://video.akamai.steamstatic.com/store_trailers/256969690/movie_max.mp4?t=1696005491",
                    },
                    highlight: true,
                },
            ],
            recommendations: {
                total: 4534641,
            },
            achievements: {
                total: 1,
                highlighted: [
                    {
                        name: "A New Beginning",
                        path: "https://cdn.akamai.steamstatic.com/steamcommunity/public/images/apps/730/f75dd04fa12445a8ec43be65fa16ff1b8d2bf82e.jpg",
                    },
                ],
            },
            release_date: {
                coming_soon: false,
                date: "21 Aug, 2012",
            },
            support_info: {
                url: "",
                email: "",
            },
            background:
                "https://store.akamai.steamstatic.com/images/storepagebackground/app/730?t=1749053861",
            background_raw:
                "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/730/page_bg_raw.jpg?t=1749053861",
            content_descriptors: {
                ids: [2, 5],
                notes: "Includes intense violence and blood.",
            },
            ratings: {
                usk: {
                    rating: "16",
                    descriptors:
                        "Gewalt; In-Game Käufe (+zufällige Objekte); Chats",
                },
                agcom: {
                    rating: "16",
                    descriptors: "Violenza",
                },
                cadpa: {
                    rating: "12",
                },
                dejus: {
                    rating: "16",
                    descriptors: "Violência",
                },
                steam_germany: {
                    rating_generated: "1",
                    rating: "16",
                    required_age: "16",
                    banned: "0",
                    use_age_gate: "0",
                    descriptors: "Drastische Gewalt",
                },
            },
        },
    },
};

console.log(simplifySteamData(data["730"].data));
