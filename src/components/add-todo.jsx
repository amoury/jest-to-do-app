import React, { useRef } from "react";
import { uuid } from "uuidv4";

const AddTodo = ({ add }) => {
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    add({ id: uuid(), content: inputRef.current.value });
    inputRef.current.value = "";
  };

  return (
    <form className="ui form" onSubmit={handleSubmit}>
      <label aria-hidden htmlFor="new-item" style={{ display: "none" }}>
        Add To do
      </label>
      <div className="ui fluid action input">
        <input ref={inputRef} id="new-item" type="text" />
        <button className="ui button" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default AddTodo;
