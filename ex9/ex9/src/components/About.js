// Components

import Main from "./Main.js";

// Data

import { MAIN_DATA } from "./data.js";

function About() {
  return (
    <>
      <Main content={MAIN_DATA[2].content} />
    </>
  );
}

export default About;