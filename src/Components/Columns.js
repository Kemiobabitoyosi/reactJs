import React from "react";

function Columns() {
  return (
    <React.Fragment>
      {/* {Items.map((item) => (
        <React.Fragment>
          <h1>Title</h1>
          <p>{item.title}</p>
        </React.Fragment>
      ))} */}
      <td>Name</td>
      <td>Toyosi</td>
    </React.Fragment>

    // You can use empty tag elements in place of React.Fragment However the limitation is that you cannot use the key element when you do that
  );
}

export default Columns;
