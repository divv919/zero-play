import { insertIntoFreeGames } from "./route";
import { PrismaClient } from "../../../../../generated/prisma";

const prisma = new PrismaClient();

// async function getSteamFreeGames() {
//     setInterval(async () => {
//         insertIntoFreeGames(385770);
//     }, 10000);
// }

// getSteamFreeGames();

// function id() {}

try {
    async function getGameIds() {
        const result = await prisma.steamFreeGamesIds.findFirst({
            where: {
                id: 1,
            },
        });
        console.log(result?.gameIds.length);
    }
    getGameIds();
} catch (error) {
    console.log("error");
}
