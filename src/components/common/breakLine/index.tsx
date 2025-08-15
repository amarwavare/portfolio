import React from 'react';

function Br({times=1}) {
  return (
    [...Array(times)].map((_, index) => (<br key={index} className={`commonBr`}/>))
  )
}

export default Br;