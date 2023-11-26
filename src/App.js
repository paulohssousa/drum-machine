import { useEffect } from 'react';
import DrumMachine from './components/DrumMachine';
import { useDispatch } from 'react-redux';
import { displayDrumPad } from './redux/drum';
import "./App.scss"


function App() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    const keys = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C']
    const handleKeyDown = (event) => {
      const id = event.key.toUpperCase();
      if(keys.includes(id)) {
        // select the audio base on the id, wich is the same of the key pressed (uppercase)
        const audio = document.querySelector(`#${id}`);
        const button = audio.parentElement;
        button.classList.add("active");
        audio.currentTime = 0;
        button.click();
        dispatch(displayDrumPad(button.id));
      }
    }

    const handleKeyUp = (event) => {
        const id = event.key.toUpperCase();
        if(keys.includes(id)) {
          const button = document.querySelector(`#${id}`).parentElement;
          button.classList.remove("active");
        }
    }

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    }
  }, [dispatch]);

  
  return (
    <div className="App" >
      <DrumMachine />
    </div>
  );
}

export default App;
