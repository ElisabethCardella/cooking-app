import { render, screen } from "@testing-library/react";
import Login from "../components/Authentification/Login/Login.js";
import SignUp from "../components/Authentification/Signup/SignUp.js";

jest.mock("react-router-dom", () => ({
  useNavigate: () => {},
  Link: () => <div></div>,
}));

describe("login", () => {
  it("title should show", async () => {
    render(<Login />);

    await screen.findByText("Log in to your account");
  });

  it("options should show", async () => {
    render(<Login />);

    expect(screen.getByPlaceholderText("hello")).toBeInTheDocument();

    expect(screen.getByRole("button", { name: /Log in/ })).toBeInTheDocument();
  });
});

describe("signup", () => {
  it("should show also", async () => {
    render(<SignUp />);
    expect(
      screen.getByRole("button", { name: /Create your account/ })
    ).toBeInTheDocument();
  });
});
