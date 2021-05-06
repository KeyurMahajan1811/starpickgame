import { react } from 'react';
import colors from '../utils/colors';
import '../App.css';


export const PressButtons = (props) => (
    <button className="number"
        style={{ backgroundColor: colors[props.status] }}
        onClick={() => props.onClicked(props.buttonId, props.status)}>{props.buttonId}</button>
);