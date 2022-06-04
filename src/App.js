import {useState} from "react";
import {nanoid} from "nanoid";
import PlayingField from "./components/PlayingField/PlayingField";

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

  const playingFieldComponent = <PlayingField cells={cells}/>;


  return (
    <div className="Container">
      <div className="Field">
        {playingFieldComponent}
      </div>
    </div>
  );
}

export default App;


