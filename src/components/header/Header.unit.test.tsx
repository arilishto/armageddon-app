import '@testing-library/jest-dom';
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { Header } from "./Header";
import { BrowserRouter } from "react-router-dom";



describe("Header", () => {
    beforeEach(() => {
        render(<BrowserRouter><Header/></BrowserRouter>)
    })
    it("should contain header text", () => {
        const headerText = screen.getByText("ARMAGEDDON V");
        expect(headerText).toBeInTheDocument();
    });
    it("should contain links to asteroids and destruction pages", () => {
        const links = screen.getAllByRole("link");
        expect(links[0]).toHaveAttribute("href", "/asteroids");
        expect(links[1]).toHaveAttribute("href", "/destruction");
    });
    it("should contain button, after click should hide button and display input", () => {
        const button = screen.getByText("Unauthorized");
        expect(button).toBeInTheDocument();
        fireEvent.click(button)
        waitFor(() => 
            expect(button).not.toBeInTheDocument());
    });
    
})


