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
    //const task2Answer = riddleHiddenMeaning;
    //taskAnswers(task2Answer);
    //#endregion

    //TASK 3
    //#region
    const numberSequence =
      "17 20   20 29 17 24 4 34   24 127 127 1 8 8   17 20   17 10 1   34 1 46 17   48 24 45 12 17 ,   4 34 9 45 17   17 10 1   2 20 23 38 45 12 24   2 20 23   17 10 1   2 20 45 23 17 10   1 12 1 38 1 34 17 ;   127 20 38 29 4 34 1   38 1 23 127 45 23 108 ,   127 20 9 9 1 23   24 34 131   8 45 12 2 45 23   20 48 1 23   10 1 24 17 ,   24 131 131   8 24 12 17   24 34 131   270 24 17 1 23 ,   4 34 2 45 8 1   5 20 12 131   17 10 23 20 45 5 10   24 4 23";

    const numberToLetter = {
      "   ": " ",
      1: "E",
      2: "F",
      4: "I",
      5: "G",
      8: "S",
      9: "P",
      10: "H",
      12: "L",
      17: "T",
      20: "O",
      23: "R",
      24: "A",
      29: "B",
      34: "N",
      38: "M",
      45: "U",
      46: "X",
      48: "V",
      108: "Y",
      127: "C",
      131: "D",
      270: "W",
    };

    const alchemySymbolsExtended = {
        "silver": "☽" ,
        "gold": "☉",
        "mercury": "☿",
        "copper": "♀",
        "iron": "♂",
        "tin": "♃",
        "lead": "♄",
        "air": "🜁",
        "earth": "🜃",
        "fire": "🜂",
        "water": "🜄",
        "sulfur": "🜍",
        "salt": "🜔"
      };

    function decodeNumberSequence(sequence, mapping) {
        return sequence
        .split(/(\s+)/) 
        .map(item => mapping[item.trim()] || item)
        .join(""); 
      }

      const decodedMessage = decodeNumberSequence(numberSequence, numberToLetter);
      console.log(decodedMessage);

      const decodedMessageManuallyShortened = "MERCURY COPPER SULFUR FIRE SALT WATER GOLD AIR";

      const convertedDecodedMessage = decodedMessageManuallyShortened.toLowerCase()
    .split(/\s+/)
    .map(word => alchemySymbolsExtended[word] || word)
    .join("");
  console.log(convertedDecodedMessage);

      const task3Answer = convertedDecodedMessage;
      taskAnswers(task3Answer);

    //#endregion


  } catch (error) {
    console.error("Error:", error);
  }
})();
