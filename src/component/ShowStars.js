import { react } from 'react';
import { utils } from '../utils/utils';
import '../App.css';


export const ShowStars = (props) => (
    <>
        {utils.range(1, props.count).map(starId => (<div key={starId} className="star" />))}
    </>
);

