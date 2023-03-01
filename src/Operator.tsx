import React from "react";

export const Operator = (props) => {
  const onClick = (event) => {
    props.onOperatorChange(event.target.value);
  };

  return (
    <div>
      <label>
        <input
          type="radio"
          name={props.name}
          value="plus"
          onClick={onClick}
        />
        +
      </label>
      <label>
        <input type="radio" name={props.name} value="minus" onClick={onClick} />
        -
      </label>
      <label>
        <input
          type="radio"
          name={props.name}
          value="multiply"
          onClick={onClick}
        />
        *
      </label>
      <label>
        <input
          type="radio"
          name={props.name}
          value="divide"
          onClick={onClick}
        />
        /
      </label>
    </div>
  );
};
