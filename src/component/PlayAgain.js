import { react } from 'react';
import '../App.css';



export const PlayAgain = props => (
    <div className="game-done">
        <div className="message"
            style={{ color: props.gameStatus === 'Won' ? 'green' : 'red' }}
        >{props.gameStatus === 'Lost' ? 'Game Over' : 'Nice!!'}</div>
        <button onClick={() => props.againPlay()}
        >Play Again</button>
    </div>
);