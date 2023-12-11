import React from 'react'

function MemoComp({name}) {
  console.log("Rendering Memo Component");
  return (
    <div>{name}</div>
  )
}

export default React.memo(MemoComp); 

// React.memo accepts a component adds some things to that component and returns a new enhanced components