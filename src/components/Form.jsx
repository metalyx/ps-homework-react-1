import React, { useState } from "react";
import HomeLink from "./HomeLink";
import Input from "./Input";
import FancyParagraph from "./FancyParagraph";

const Form = () => {
  const [value, setValue] = useState("");

  return (
    <>
      <HomeLink />
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <FancyParagraph>{value}</FancyParagraph>
        <div>
          <Input value={value} onChange={setValue} />
        </div>
      </form>
    </>
  );
};

export default Form;
