import { describe, it, expect } from "vitest";
import { screen } from "@testing-library/react";
import { render } from "@/tests/setup";
import { Footer } from "@/components/Footer/Footer";

describe("Footer", () => {
  it("renders the footer", () => {
    render(<Footer />);
    expect(screen.getByText("Footer")).toBeInTheDocument();
  });
});
