// Components

import Main from "./Main.js";

// Data

import { MAIN_DATA } from "./data.js";

function Services() {
  return (
    <>
      <Main content={MAIN_DATA[3].content} />
    </>
  );
}

export default Services;