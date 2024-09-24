import React from "react";
import Entity from "./Entity";

export default function Read({ token }) {
  return (
    <div>
      <Entity entity="Classes" token={token}></Entity>
      <Entity entity="Lists" token={token}></Entity>
      <Entity entity="Interfaces" token={token}></Entity>
    </div>
  );
}
