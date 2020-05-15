import React from 'react';

function Count(props){
    return <h3 className='Counter'>{`${props.currentIndex + 1}/25`} </h3>
}

export default Count;



//making counter a prop and passing down state info to it in this way helps free up lines of code so that is more simplified, streamlined etc