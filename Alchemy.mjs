import fetch from "node-fetch";

const playerId = "Martinlen@uia.no";
const GAME_API = "https://alchemy-kd0l.onrender.com/";


(async function () {
  try {
    const startUrl = `${GAME_API}start?player=${encodeURIComponent(playerId)}`;
    const startResponse = await fetch(startUrl);
    const startData = await startResponse.json();
    console.log("Challenge started:", startData);


    async function taskAnswers(taskAnswer) {
      const answerResponse1 = await fetch(`${GAME_API}answer`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ answer: taskAnswer, player: playerId }),
      });
      const answerData1 = await answerResponse1.json();
      console.log("Answer response:", answerData1);
    }
    //TASK 1
    //#region
    const alchemySymbols = {
      "☽": "Silver",
      "☉": "Gold",
      "☿": "Mercury",
      "♀": "Copper",
      "♂": "Iron",
      "♃": "Tin",
      "♄": "Lead",
    };

    //const task1Answer = "Gold Quicksilver Silver Iron Gold";
    //taskAnswers(task1Answer);

    //#endregion

    //TASK 2
    //#region
    const Riddle = "Still flows the Icy Lethe, Veiling all ’neath Eldritch Rime";
    const riddleHiddenMeaning = Riddle.replace(/[^A-Z]/g, '');  
    const task2Answer = riddleHiddenMeaning;
    taskAnswers(task2Answer);
    //#endregion

  } catch (error) {
    console.error("Error:", error);
  }
})();
