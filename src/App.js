import './App.css';
import { StarPick } from './component/StarPick';
import Particles from 'react-particles-js';
import { useState } from 'react';

function App() {
  const [startGame, setStartGame] = useState(false)
  return (
    <div className="App" style={{ backgroundColor: '#212121' }}>
      <button onClick={() => setStartGame(true)}>Play Game</button>
      {startGame === true ?
        <div>
          <StarPick />
        </div> : null
      }
      <div style={{ backgroundColor: '#212121' }}>
        <Particles id="particles-js"

          height="95%"
          width="95%"
          style={{
            position: 'relatice',

          }}
          params={{
            particles: {

              speed: {
                value: 0.5
              },
              color: {
                value: "#eceff1"
              },
              line_linked: {
                color: {
                  value: "#eceff1"
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



      <div style={{ backgroundColor: '#212121' }} >
        <Particles id="particles-js"

          height="95%"
          width="95%"
          style={{
            position: 'relative',
          }}
          params={{
            particles: {

              speed: {
                value: 0.5
              },
              color: {
                value: "#eceff1"
              },
              line_linked: {
                color: {
                  value: "#eceff1"
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
