import React from 'react';
import Collapse from './Collapse';

function Collapses(props) {
    return (
        <div className='collapses'>
            {props.data.map((data, index) => {
                    return (
                        <Collapse 
                            // Guarantee a unique key for each item in the list
                            key={
                                `${index}` +
                                `${Object.values(data)}`.split(" ").join("").slice(10, 20)
                            }
                            title={Object.keys(data)}
                            content={Object.values(data)}
                        />
                    )
                }
            )}
        </div>
    );
};

export default Collapses;

