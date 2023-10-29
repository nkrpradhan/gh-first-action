import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";

import App from "./App";

describe("App", () => {
  it("renders app", () => {
    render(<App></App>);

    // eslint-disable-next-line no-undef
    expect(screen.getByText(/Vite/i)).toBeInTheDocument();
  });
});
