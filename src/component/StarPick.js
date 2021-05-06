import { react, useState, useEffect } from 'react'
import { PlayAgain } from './PlayAgain';
import { PressButtons } from './PressButtons';
import { ShowStars } from './ShowStars';
import { utils } from '../utils/utils';
import '../App.css';

export const StarPick = () => {
    const [star, setStars] = useState(utils.random(1, 9));
    const [availableNums, setAvailableNums] = useState(utils.range(1, 9));
    const [candidateNums, setCandidateNums] = useState([]);
    const [secondsLeft, setSecondsLeft] = useState(10);

    useEffect(() => {
        if (secondsLeft > 0 && availableNums.length > 0) {
            const timerId = setTimeout(() => {
                setSecondsLeft(secondsLeft - 1);
            }, 1000);
            return () => clearTimeout(timerId);
        }

    });

    const gameStatus = availableNums.length === 0 ? 'Won' : secondsLeft === 0 ? 'Lost' : 'Active'
    // const gameIsWon = secondsLeft === 0;
    // const gameIsDone = availableNums.length === 0;

    const resetGame = () => {
        setStars(utils.random(1, 9));
        setAvailableNums(utils.range(1, 9));
        setCandidateNums([]);
        setSecondsLeft(10);
    }


    const wrongCandidateNums = utils.sum(candidateNums) > star;

    const numberStatus = (number) => {
        if (!availableNums.includes(number)) {
            return 'used';
        }
        if (candidateNums.includes(number)) {
            return wrongCandidateNums ? 'wrong' : 'candidate';
        }
        return 'available'
    };

    const onNumberClick = (number, currentStatus) => {
        if (gameStatus !== 'Active' || currentStatus === 'used') {
            return;
        }
        const newCandidateNums =
            currentStatus === 'available'
                ? candidateNums.concat(number)
                : candidateNums.filter(cn => cn !== number);

        if (utils.sum(newCandidateNums) !== star) {
            setCandidateNums(newCandidateNums);
        }
        else {
            const newAvailableNums = availableNums.filter(
                n => !newCandidateNums.includes(n)
            );
            setStars(utils.randomSumIn(newAvailableNums, 9));
            setAvailableNums(newAvailableNums);
            setCandidateNums([]);
        }
    };
    return (
        <div className="game">
            <div className="help">
                Pick 1 or more numbers that sum to the number of stars
        </div>
            <div className="body">
                <div className="left">
                    {gameStatus !== 'Active' ? (<PlayAgain againPlay={resetGame} gameStatus={gameStatus} />
                    ) : (
                        <ShowStars count={star} />
                    )}
                </div>
                <div className="right">
                    {utils.range(1, 9).map(buttonId => <PressButtons
                        status={numberStatus(buttonId)}
                        onClicked={onNumberClick}
                        key={buttonId}
                        buttonId={buttonId}
                    />)}

                </div>
            </div>
            <div className="timer">Time Remaining: {secondsLeft}</div>
        </div>
    );
};