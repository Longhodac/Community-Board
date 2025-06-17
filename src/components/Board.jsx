import React from 'react';
import Card from './Card';

const Board = ({items}) => {
    return(
        <div className='board-container'>
            <div className='board-grid'>
                {items.map(item => (
                    <Card key={item.id} data={item} />
                ))}
            </div>     
        </div>
    );
}

export default Board;