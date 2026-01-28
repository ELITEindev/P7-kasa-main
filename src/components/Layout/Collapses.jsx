import React from 'react';
import Collapse from './Collapse';

function Collapses({ data }) {
    return (
        <div className='collapses'>
            {data.map((item, index) => {
                    return (
                        <Collapse 
                            // Guarantee a unique key for each item in the list
                            key={
                                `${index}` +
                                `${Object.values(item)}`.split(" ").join("").slice(10, 20)
                            }
                            title={Object.keys(item)}
                            content={Object.values(item)}
                        />
                    )
                }
            )}
        </div>
    );
};

export default Collapses;

