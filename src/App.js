import './App.css';
import { StarPick } from './component/StarPick';
import Particles from 'react-particles-js';
import { useState } from 'react';

function App() {
  const [startGame, setStartGame] = useState(false)
  let handleClick = (isButtonOn) => {
    if (isButtonOn === true) {
      setStartGame(false);
      document.getElementById('playbutton').innerHTML = "Play Game";

    }
    else {
      setStartGame(true);
      document.getElementById('playbutton').innerHTML = "Exit Game";
    }
  }
  return (
    <div className="App" style={{ backgroundColor: '#0c0b0b' }}>
      <button id="playbutton" className='playbutton' onClick={() => handleClick(startGame)}>Play Game</button>
      {startGame === true ?
        <div>
          <StarPick />
        </div> : null
      }
      <div style={{ backgroundColor: '#0c0b0b' }}>
        <Particles id="particles-js"

          height="95%"
          width="95%"
          style={{
            position: 'relatice',
            backgroundColor: '0000FF'
          }}
          params={{
            particles: {

              speed: {
                value: 0.5
              },
              color: {
                value: "0000FF"
              },
              line_linked: {
                color: {
                  value: "0000FF"
                }
              },
              number: {
                value: 40
              },
              size: {
                value: 3
              }
            }
          }}
        />

      </div>



      {/* <div style={{ backgroundColor: '#0c0b0b' }} >
        <Particles id="particles-js"

          height="95%"
          width="95%"
          style={{
            position: 'relative',
            backgroundColor: '#FFFFFF'

          }}
          params={{
            particles: {

              speed: {
                value: 0.5
              },
              color: {
                value: "#FFFFFF"
              },
              line_linked: {
                color: {
                  value: "#FFFFFF"
                }
              },
              number: {
                value: 40
              },
              size: {
                value: 3
              }
            }
          }}
        />
      </div> */}
      {/* 

      <Particles id="particles-js"

        height="95%"
        width="95%"
        style={{
          position: 'absolute',
          backgroundColor: 'blue'
        }}
        params={{
          particles: {

            speed: {
              value: 0.5
            },
            color: {
              value: "blue"
            },
            line_linked: {
              color: {
                value: "blue"
              }
            },
            number: {
              value: 80
            },
            size: {
              value: 3
            }
          }
        }}
      /> */}
    </div>
  );
}

export default App;
