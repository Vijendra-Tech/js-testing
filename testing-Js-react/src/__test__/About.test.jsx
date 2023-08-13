import { expect, test } from "vitest";
import { render } from "@testing-library/react";

import About from "../Components/About";

test("shoud render About page", async () => {
  const about = render(<About />);
  expect(about).toMatchSnapshot();
  about.unmount();
});
