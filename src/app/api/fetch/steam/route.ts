import { simplifySteamData } from "@/app/utils/simplifySteamData";
import { STEAM_GAME_DETAILS_URL } from "../../apiConfig";
import axios from "axios";
import { PrismaClient } from "../../../../../generated/prisma";

const prisma = new PrismaClient();

export async function insertIntoFreeGames(id:number) {
    async function data() {
        async function getSteamFreeGames(steamAppId: string) {
            const response = await axios.get(
                STEAM_GAME_DETAILS_URL + steamAppId,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                    params: {
                        l: "english",
                    },
                    timeout: 10000
                }
            );

            const data = (response.data as any)[steamAppId].data;

            return data;
        }

        const data = await getSteamFreeGames(id.toString());
        const data2 = await simplifySteamData(data);

        return data2;
    }

    async function insertIntoDb() {
        const data2 = await data();
        const freeGames = await prisma.freeGames.create({
            data: data2,
        });

        console.log(freeGames);
        return freeGames;
    }

    insertIntoDb();
    
}

insertIntoFreeGames(385770);

// D:\code\zero-play\src\app\api\fetch\steam\route.ts
