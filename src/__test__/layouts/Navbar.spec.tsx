import Navbar from "@/app/_layouts/Navbar";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Navbar", () => {
  it("Logo render correctly", () => {
    render(<Navbar />);
    const logo = screen.getByAltText("NextTopUpLogo");
    expect(logo).toBeInTheDocument();
  });
  it("Link render correctly and have 2 links", () => {
    render(<Navbar />);
    const links = screen.getAllByRole("listitem");
    expect(links).toHaveLength(2);
  });

  it("Button Search render correctly", () => {
    render(<Navbar />);
    const buttonSearch = screen.getByRole("button", { name: /search/i });
    expect(buttonSearch).toBeInTheDocument();
  });

  it("Button Masuk render correctly", () => {
    render(<Navbar />);
    const buttonMasuk = screen.getByRole("button", { name: /masuk/i });
    expect(buttonMasuk).toBeInTheDocument();
  });

  it("Button Daftar render correctly", () => {
    render(<Navbar />);
    const buttonDaftar = screen.getByRole("button", { name: /daftar/i });
    expect(buttonDaftar).toBeInTheDocument();
  });

  it("Menu Button render correctly and change icon if clicked", async () => {
    const user = userEvent.setup();
    render(<Navbar />);
    const buttonMenu = screen.getByRole("button", { name: /menu-btn/i });
    const menu = screen.getByLabelText("menu-icon");
    const close = screen.queryByLabelText("close-icon");
    expect(buttonMenu).toBeInTheDocument();
    expect(menu).toBeInTheDocument();
    expect(close).not.toBeInTheDocument();
    await user.click(buttonMenu);
    expect(menu).not.toBeInTheDocument();
    screen.logTestingPlaygroundURL();
  });
});
