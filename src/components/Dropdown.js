import React from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";

const animateComponent = makeAnimated();

const Dropdown = (props) => {
  return (
    <Select
      closeMenuOnSelect={false}
      components={animateComponent}
      defaultValue={props.default || []}
      placeholder={"Color selection dropdwn"}
      isMulti
      options={props.options || []}
      styles={props.styles || []}
    />
  );
};

export default Dropdown;
