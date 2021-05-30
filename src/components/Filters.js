import React from "react";
import { useState } from "react";

function Filters({ onChangeType, onFindPetsClick }) {
  const [option, setOption] = useState("all")
  function handleChange(event) {
    setOption(event.target.value)
    onChangeType(event.target.value)
    onFindPetsClick(event.target.value)
  }
  return (
    <div className="ui form">
      <h3>Animal type</h3>
      <div className="field">
        <select name="type" id="type" value={option} onChange={handleChange} >
          <option value="all">All</option>
          <option value="cat">Cats</option>
          <option value="dog">Dogs</option>
          <option value="micropig">Micropigs</option>
        </select>
      </div>

      <div className="field">
        <button className="ui secondary button">Find pets</button>
      </div>
    </div>
  );
}

export default Filters;
