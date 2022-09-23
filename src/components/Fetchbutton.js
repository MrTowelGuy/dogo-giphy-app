import React from "react";

function Fetchbutton(props) {
  const handleSubmit = () => {
    props.handleSubmitFromApp();
  };

  return (
    <button type="button" onClick={handleSubmit}>
      Fetch, buddy!
    </button>
  );
}

export default Fetchbutton;
