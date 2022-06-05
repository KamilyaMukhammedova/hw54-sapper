import {nanoid} from "nanoid";

export const generateCells = () => {
  const cellsArray = [];
  for (let i = 0; i < 36; i++) {
    cellsArray.push({
      id: nanoid(),
      hasItem: false,
      isClicked: false,
    });
  }
  cellsArray[Math.floor(Math.random() * cellsArray.length)].hasItem = true;
  return cellsArray;
};