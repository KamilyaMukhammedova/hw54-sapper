import {useState} from "react";
import {nanoid} from "nanoid";
import PlayingField from "./components/PlayingField/PlayingField";
import Try from "./components/Try/Try";
import ResetBtn from "./components/ResetBtn/ResetBtn";

const App = () => {
  const generateCells = () => {
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

  const [cells, setCells] = useState(generateCells);
  const [tries, setTries] = useState(0);

  const onClick = cellId => {
    const cellsCopy = cells.map(cell => {
      if (cell.id === cellId) {
        setTries( tries + 1);
        return {
          ...cell,
          isClicked: true,
        };
      }

      return cell;
    });

    setCells(cellsCopy);
  };

  const onResetGame = () => {
     setCells(generateCells);
     setTries(0);
  };

  const playingFieldComponent = <PlayingField cells={cells} onCellClick={onClick}/>;
  const triesComponent = <Try tries={tries}/>;
  const resetBtnComponent = <ResetBtn onReset={onResetGame}/>;

  return (
    <div className="Container">
      <div className="Field">
        {playingFieldComponent}
      </div>
      <div className="CenterDiv">
        {triesComponent}
        {resetBtnComponent}
      </div>
    </div>
  );
}

export default App;


