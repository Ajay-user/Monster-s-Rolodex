import React from 'react';
import Card from '../Card/Card.component' ;
import './Card-List.style.css';

const CardList = ({monsters}) => {
    return (
        <div className="Card-List">
            {monsters.map((monster)=><Card key={monster.id} monster={monster}/>)}
        </div>
    );
};

export default CardList;