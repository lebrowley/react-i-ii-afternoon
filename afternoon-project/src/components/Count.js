import React from 'react';

function Count(props){
    return <h3 className='Counter'>{`${props.currentIndex + 1}/25`} </h3>
}

export default Count;

