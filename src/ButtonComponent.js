import React from "react";

function ButtonComponent() {
  function mostrarAlert() {
    alert("hola mundo");
  }

  return <button onClick={mostrarAlert}>hace click</button>;
}

export default ButtonComponent;
