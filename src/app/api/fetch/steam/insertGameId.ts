import axios from "axios";
import {  STEAM_FREE_GAMES_IDS } from "../../apiConfig";
import { PrismaClient } from "../../../../../generated/prisma";

const prisma = new PrismaClient();


async function getGameIds() {
const response = await axios.get(STEAM_FREE_GAMES_IDS, {
    headers: {
        "Content-Type": "application/json",
    },
    params: {
        l: "english",
    },
});

// console.log(response.data);

const data = (response.data as any).appids;

console.log(data);
return data;
}


async function insertIntoGameIds() {
    const gameIds = await getGameIds();
    const result = await prisma.steamFreeGamesIds.create({
        data: {
            gameIds: gameIds,
        },
    });
    return result;
}


insertIntoGameIds().then((result) => {
    console.log(result);
});

