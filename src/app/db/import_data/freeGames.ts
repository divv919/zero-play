import { CURRENT_FREE_GAMES } from "@/app/api/config/apiRoutes";
import axios from "axios";
import { PrismaClient } from "../../../../generated/prisma";

const prisma = new PrismaClient();

async function fetchFreeGames(){
    const response = await axios.get(CURRENT_FREE_GAMES, {
        headers: {
            "content-type": "application/json"
        }
    })

    return response.data;
}


async function saveFreeGamesToDB(freeGames: any){
    try{
        console.log("inside saveFreeGamesToDB")
        const response = await prisma.freeGames.createMany({
            data: freeGames
        })

        console.log(`Saved ${response.count} free games to the database`)
    } catch (error) {
        console.error("Error saving free games to the database:", error instanceof Error ? error.message : "Unknown error")
    }
}

export async function middleware(){
    const games = await fetchFreeGames();
    const data = games.map((game: any) => {
        const {
            gamerpower_url,
            open_giveaway,
            id,
            ...data2
        } = game;
        return {
            ...data2,
            game_id: game.id,
        }
    })

    await saveFreeGamesToDB(data);

    // console.log("data", data)
}

middleware();


// let games: any;
// fetchFreeGames().then((data) => {
//     games = data;
//     console.log("games", games)
// })

// const data = games.map((game: any) => {
//     const {
//         gamerpower_url,
//         open_giveaway,
//         id,
//         ...data2
//     } = game;
//     return {
//         ...data2,
//         gameId: game.id,
//     }
// })


// console.log(data)
// cmd command to run this file: npx tsx src/app/db/import_data/freeGames.ts