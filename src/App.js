import {useState} from "react";
import {nanoid} from "nanoid";
import PlayingField from "./components/PlayingField/PlayingField";
import Try from "./components/Try/Try";

const App = () => {
  const cellsArray = [];
  for (let i = 0; i < 36; i++) {
    cellsArray.push({
      id: nanoid(),
      hasItem: false,
      isClicked: false,
    });
  }
  cellsArray[Math.floor(Math.random() * cellsArray.length)].hasItem = true;

  const [cells, setCells] = useState(cellsArray);
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

  const playingFieldComponent = <PlayingField cells={cells} onCellClick={onClick}/>;
  const triesComponent = <Try tries={tries}/>

  return (
    <div className="Container">
      <div className="Field">
        {playingFieldComponent}
      </div>
      {triesComponent}
    </div>
  );
}

export default App;


