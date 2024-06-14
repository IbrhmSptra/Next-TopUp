import { render, screen } from "@testing-library/react";
import Page from "../../app/page";

describe("index page", () => {
  test("Should render Halo message", () => {
    render(<Page />);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toBeInTheDocument();
  });
});