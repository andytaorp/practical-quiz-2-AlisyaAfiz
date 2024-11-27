import React, { useState } from "react";

export default function Form({ onAddTask }) {
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    // TODO: write code to handle form submission
    e.preventDefault();
    setDescription(e.target.value);
  };

  return (
    /*TODO: add a form to add a new task*/
    <form onSubmit={handleSubmit}>
      <input type="text" value={description}></input>
      <button type="submit">Add</button>
    </form>
  );
}
