import fetch from "node-fetch";

const playerId = "Martinlen@uia.no";
const GAME_API = "https://alchemy-kd0l.onrender.com/";



(async function () {
  try {
    const startUrl = `${GAME_API}start?player=${encodeURIComponent(playerId)}`;
    const startResponse = await fetch(startUrl);
    const startData = await startResponse.json();
    console.log("Challenge started:", startData);




  
  //#endregion

} catch (error) {
    console.error("Error:", error);
  }
})();