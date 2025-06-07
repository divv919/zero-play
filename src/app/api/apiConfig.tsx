

// import axios from 'axios';

// const queryURL = 'https://store.epicgames.com/graphql';

// const params = {
//   operationName: 'primarySearchAutocomplete',
//   variables: {
//     allowCountries: 'IN',
//     category:
//       'games/edition/base|bundles/games|games/edition|editors|addons|games/demo|software/edition/base|games/experience|subscription',
//     count: 4,
//     country: 'IN',
//     keywords: 'f',
//     locale: 'en-US',
//     sortBy: null,
//     sortDir: 'DESC'
//   },
//   extensions: {
//     persistedQuery: {
//       version: 1,
//       sha256Hash: 'be4fe909f9a35f9704db7fed06fc4a47fc798ec0a6cbfa24d737aec2465904fa'
//     }
//   }
// };

// async function fetchEpicData() {
//   try {
//     const response = await axios.get(queryURL, {
//       params: {
//         operationName: params.operationName,
//         variables: JSON.stringify(params.variables),
//         extensions: JSON.stringify(params.extensions)
//       }
//     });

//     console.log(response.data);
//   } catch (err) {
//     console.error('Failed to fetch:', err);
//   }
// }

// fetchEpicData();


// import axios from 'axios';


// // https://store.epicgames.com/graphql?operationName=storefrontDiscover&variables=%7B%22country%22:%22IN%22,%22layoutSlug%22:%22free-games%22,%22layoutType%22:%22discover%22,%22locale%22:%22en-US%22%7D&extensions=%7B%22persistedQuery%22:%7B%22version%22:1,%22sha256Hash%22:%22b76477b1cebb9090b6f4c783b79d7ee736981f8e7299a92c0533f8373a5f638c%22%7D%7D
// const url = 'https://store.epicgames.com/graphql';

// const variables = {
//   country: 'IN',
//   layoutSlug: 'free-games',
//   layoutType: 'discover',
//   locale: 'en-US'
// };

// const extensions = {
//   persistedQuery: {
//     version: 1,
//     sha256Hash: 'b76477b1cebb9090b6f4c783b79d7ee736981f8e7299a92c0533f8373a5f638c'
//   }
// };

// async function getFreeEpicGames() {
//   try {
//     const response = await axios.get(url, {
//       params: {
//         operationName: 'storefrontDiscover',
//         variables: JSON.stringify(variables),
//         extensions: JSON.stringify(extensions)
//       }
//     });

//     console.log(response.data.data);
//   } catch (error) {
//     console.error('Error fetching free Epic games:', error);
//   }
// }

// getFreeEpicGames();



// const EPIC_LIMITED_ED_FREE_GAMES_URL = 'https://store-site-backend-static-ipv4.ak.epicgames.com/freeGamesPromotions?locale=en-US&country=IN&allowCountries=IN';


// // steam


// import axios from 'axios';

// const url = 'https://store.steampowered.com/saleaction/ajaxgetsaledynamicappquery';

// const params = {
//   cc: 'IN',
//   l: 'english',
//   rgExcludedContentDescriptors: [3, 4, 1],
//   clanAccountID: 41316928,
//   clanAnnouncementGID: '3128313422564004283',
//   flavor: 'contenthub_popular',
//   strFacetFilter: JSON.stringify({
//     type: 1,
//     rgSubexpressions: [
//       {
//         type: 0,
//         rgSubexpressions: [
//           { type: 2, value: 19 },
//           { type: 2, value: 597 },
//         ],
//       },
//       {
//         type: 4,
//         value: 'english',
//       },
//     ],
//   }),
//   start: 0,
//   count: 50,
//   tabuniqueid: 8,
//   sectionuniqueid: 377601,
//   return_capsules: true,
//   origin: 'https://store.steampowered.com',
//   strContentHubType: 'freetoplay',
//   strTabFilter: '',
//   bRequestFacetCounts: true,
// };

// axios.get(url, { params })
//   .then(response => {
//     console.log(response.data);
//   })
//   .catch(error => {
//     console.error('Error fetching data:', error);
//   });



const STEAM_ALL_GAME_LIST_URL = 'https://api.steampowered.com/ISteamApps/GetAppList/v2';
const STEAM_GAME_DETAILS_URL = 'https://store.steampowered.com/api/appdetails?appids=';

// https://store.steampowered.com/saleaction/ajaxgetsaledynamicappquery?cc=IN&l=english&rgExcludedContentDescriptors[]=3&rgExcludedContentDescriptors[]=4&rgExcludedContentDescriptors[]=1&clanAccountID=41316928&clanAnnouncementGID=3128313422564004283&flavor=contenthub_popular&strFacetFilter=&start=0&count=500000&tabuniqueid=8&sectionuniqueid=377601&return_capsules=true&origin=https:%2F%2Fstore.steampowered.com&strContentHubType=freetoplay&strTabFilter=&bRequestFacetCounts=true

// name": "Counter-Strike 2",
//       "steam_appid": 730,
// "is_free": true,
// "header_image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/730/header.jpg?t=1749053861",
// short_description": "Addictive text-based Military MMO RPG where you team up with other players for TOTAL DOMINATION of the world. Join now, make alliances, build the greatest military force, crush your enemies, defend allies and rule the world!",
// "genres": [
//         {
//           "id": "1",
//           "description": "Action"
//         },
//         {
//           "id": "25",
//           "description": "Adventure"
//         },
//         {
//           "id": "4",
//           "description": "Casual"
//         },
//         {
//           "id": "23",
//           "description": "Indie"
//         },
//         {
//           "id": "29",
//           "description": "Massively Multiplayer"
//         },
//         {
//           "id": "28",
//           "description": "Simulation"
//         },
//         {
//           "id": "2",
//           "description": "Strategy"
//         },
//         {
//           "id": "37",
//           "description": "Free To Play"
//         }
//       ],
// "release_date": {
//         "coming_soon": false,
//         "date": "2 Oct, 2018"
//       },




// epic games

// "title": "Trackmania Starter Access",
// "description": "Trackmania, the racing franchise from Ubisoft Nadeo, is back with the most compelling remake of Trackmania Nations.",
                  

// ],
// "catalogNs": {
//   "mappings": [
//     {
//       "pageSlug": "trackmania",
//       "pageType": "productHome"
//     }
//   ]
// },

// {
//     "type": "DieselStoreFrontTall",
//     "url": "https://cdn1.epicgames.com/salesEvent/salesEvent/Trackmania_Royal_KeyArt_1200x1600_1200x1600-baf0e1c64be7ae2fefa18ba9e845f4c2"
//   },
//   {
//     "type": "DieselStoreFrontWide",
//     "url": "https://cdn1.epicgames.com/salesEvent/salesEvent/TM_StarterEd_Store_Landscape_2560x1440_2560x1440-0208bfc8d824b707130420b61249d4f5"
//   },

// "releaseDate": "2020-07-01T15:00:00.000Z",







// imp

// https://store.steampowered.com/saleaction/ajaxgetsaledynamicappquery?cc=IN&l=english&rgExcludedContentDescriptors[]=3&rgExcludedContentDescriptors[]=4&rgExcludedContentDescriptors[]=1&clanAccountID=41316928&clanAnnouncementGID=3128313422564004283&flavor=contenthub_popular&strFacetFilter=%7B%22type%22:1,%22rgSubexpressions%22:[%7B%22type%22:0,%22rgSubexpressions%22:[%7B%22type%22:2,%22value%22:19%7D,%7B%22type%22:2,%22value%22:597%7D]%7D,%7B%22type%22:4,%22value%22:%22english%22%7D]%7D&start=0&count=5000&tabuniqueid=8&sectionuniqueid=377601&return_capsules=true&origin=https:%2F%2Fstore.steampowered.com&strContentHubType=freetoplay&strTabFilter=&bRequestFacetCounts=true