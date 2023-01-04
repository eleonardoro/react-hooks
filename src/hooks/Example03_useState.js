import React, { useState } from "react";

function Example02_useState() {
  const [gradeOne, setGradeOne] = useState(0);
  const [gradeTwo, setGradeTwo] = useState(0);

  let average = (gradeOne + gradeTwo) / 2;

  let situation = average > 7 ? "APROVADO!" : "REPROVADO!";

  return (
    <div>
      <input
        type="number"
        onChange={(e) => setGradeOne(parseFloat(e.target.value))}
        placeholder="Insert first grade"
      />
      <input
        type="number"
        onChange={(e) => setGradeTwo(parseFloat(e.target.value))}
        placeholder="Insert second grade"
      />
      <br />
      <br />
      <br />
      {gradeOne && gradeTwo ? (
        <div>
          <p>
            Grade One is: {gradeOne} - Grade Two is: {gradeTwo}
          </p>
          <p>His Average is {average}</p>
          <p>The Student is: {situation}</p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Example02_useState;
