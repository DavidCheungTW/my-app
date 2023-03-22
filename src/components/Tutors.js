import React from "react";
const Tutors = ({ tutorsArray }) => {
  // const tutorsArray  = props.tutorsArray;
  // const tutorsArray  = props.tutorsArray;
  return (
    <ul>
      {tutorsArray.map((tutor, index) => (
        <li key={`tutor${index}`}>
          <p>{tutor}</p>
        </li>
      ))}
    </ul>
  );
};

export default Tutors;
