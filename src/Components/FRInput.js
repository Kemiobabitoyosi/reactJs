import React from "react";

// function FRInput() {
//   return (
//     <div>
//       <input type="text" />
//     </div>
//   );
// }

const FRInput = React.forwardRef( (props, ref) => {
  return (
    <div>
      <input type="text" ref={ref} />
    </div>
  );
})

export default FRInput;

// Every functional component receives prop as its parameter but when a component is passed as a parameter to the create ref method, it receives the ref attribute as its second parameter