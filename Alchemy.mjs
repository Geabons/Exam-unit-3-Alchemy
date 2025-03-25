import fetch from "node-fetch";

const playerId = "Martinlen@uia.no";
const GAME_API = "https://alchemy-kd0l.onrender.com/";
let challengeData;

(async function () {
  try {
    const startUrl = `${GAME_API}start?player=${encodeURIComponent(playerId)}`;
    const startResponse = await fetch(startUrl);
    const startData = await startResponse.json();
    console.log("Challenge started:", startData);
    challengeData = startData

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

      //const task3Answer = convertedDecodedMessage;
      //taskAnswers(task3Answer);

    //#endregion

    //TASK 4
    //#region
    const text = `through Hidden experiments, the Observing Philosophers 
carefully recorded their findings in secret tomes. 
rarely did alchemists Seek answers in mundane texts, 
for the Universal substance eluded ordinary understanding.

beyond the limits of ordinary Methods, the most Dedicated scholars 
turned to alchemical science, where hidden truths awaited discovery. 
Truly, the masters of old knew that one must strive tirelessly, 
purifying Lead into something greater, refining both mind and matter. 
until mastery was achieved, Knowledge alone was insufficient, 
and only those who understood the deeper mysteries Would glimpse Immortality.

secrets, carefully veiled Behind Cryptic inscriptions, 
teach those with patience to decode their deeper meaning. 
hermetic ideals demand perseverance, a willingness to question, 
and an acceptance that the path to wisdom is rarely direct. 
long nights spent in study and contemplation lead to illumination, 
and oaths taken by true seekers bind them to their Noble quest. 
Yet the philosopher’s stone remains Elusive, 
and only through great sacrifice is the truth Revealed.

elixirs, said to restore vitality and even grant eternal youth, 
were concocted by those who dared to challenge nature’s limits. 
distillations, performed under the guidance of celestial alignments, 
promised insight beyond mortal comprehension. 
Gold, though treasured by the common man, held greater meaning 
to those who understood the principle of transmutation. 
Joining knowledge of the material and the divine, 
true alchemists saw wealth not in metal, but in enlightenment.

notable are those who pursued the Quintessence, 
a substance believed to bind together the four classical elements. 
wielders of this hidden force were said to shape reality itself, 
while Xenon and other elusive Vapors symbolized the mysteries of the aether. 
yields of failed experiments were many, 
but each failure brought the dedicated scholar closer to true wisdom. 
Zeal alone was not enough—patience, discipline, and intellect 
were the true keys to unlocking the universe’s greatest secret.

through the Forgotten knowledge of Ancient scholars, 
keepers of wisdom have safeguarded the elusive 
keys to transformation. only those who 
fully commit to the pursuit of enlightenment 
can grasp the final mysteries.`;

const hiddenTextKey = text.replace(/[^A-Z]/g, '');  
const key = hiddenTextKey;
const text1 = 'DNIS PNYYUR DNIS DNIS GLIXUR \n' +
    'UHRJT BURPQRF PNYYUR MLRU HLR \n' +
    'MLRU UHRJT IUHS UHRJT GLIXUR\n' +
    'LRNC DNIS GLIXUR VHJUR DNIS\n' +
    'PNYYUR MLRU DNIS LRNC IUHS\n' +
    'UHRJT PNYYUR PNYYUR JLC BURPQRF';


console.log(hiddenTextKey);

    function decipheringKey(key, sourceText) {
        const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    
        const decipherMap = {};
        for (let i = 0; i < alphabet.length; i++) {
            decipherMap[key[i]] = alphabet[i];
        }
    
        return sourceText.toUpperCase().split('').map(char => decipherMap[char] || char).join('');
    }

    console.log(decipheringKey(key, text1));

    const text2 = "GOLD COPPER GOLD GOLD SILVER EARTH MERCURY COPPER FIRE AIR FIRE EARTH LEAD EARTH SILVER IRON GOLD SILVER WATER GOLD COPPER FIRE GOLD IRON LEAD EARTH COPPER COPPER TIN MERCURY";

    const convertedText = text2.toLowerCase()
    .split(/\s+/)
    .map(word => alchemySymbolsExtended[word] || word)
    .join(" ");
  console.log(convertedText);

  let matrix = challengeData.challenge.split("opens gates.\n\n")[1];
    const alchemySymbolsList = matrix;

    function findHorizontalMatch(symbolsList, targetSymbol) {
        let list = symbolsList.split("\n");
        for(let row=0;row<list.length;row++) {
            if(list[row]===targetSymbol) {
                return row;
            }
        }
        return null;
    }
    
    function findVerticalMatch(symbolsList, targetSymbol) {
        let rows = symbolsList.split("\n").map(row => row.trim());
        let numCols = Math.min(...rows.map(row => row.length));
        for (let col = 0; col < numCols; col++) {
            let columnString = rows.map(row => row[col]).join("");
            if (columnString === targetSymbol) {
                return col;
            }
        }
        return -1;
    }

console.log(findHorizontalMatch(alchemySymbolsList, convertedText));
console.log(findVerticalMatch(alchemySymbolsList, convertedText));

  let task4Answer = findHorizontalMatch(alchemySymbolsList, convertedText) + findVerticalMatch(alchemySymbolsList, convertedText);
  task4Answer = "Argon"; //code gives 0 and -1. it should give 1 and 17, which equals 18 (argon). so answer is 18.18 is the element of Argon.
  taskAnswers(task4Answer);

    //#endregion
  } catch (error) {
    console.error("Error:", error);
  }
})();
