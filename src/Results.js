import React from "react";

export default function Results(props) {
  console.log(props.results);
  if (props.results) {
    return <div className="Results">Hi from Results</div>;
  } else {
    return null;
  }
}