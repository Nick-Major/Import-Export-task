import {default as DefGame, GameSavingData, readGameSaving as loadGame, readGameSaving, writeGameSaving as saveGame} from './game.js';

const game = new DefGame();
game.start();

console.log(DefGame, GameSavingData, loadGame, saveGame);
