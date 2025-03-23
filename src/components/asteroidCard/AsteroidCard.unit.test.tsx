import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import { AsteroidCard } from "./AsteroidCard";
import { AsteroidsContext } from "../asteroids-context/AsteroidsContext";

const mockProps = {
    id: "123",
    name: "Test Asteroid",
    date: "2024-03-20",
    distance: {
        kilometers: 1000000,
        lunar: 2.6,
    },
    size: 100,
    isDangerous: false
};

const mockAddAsteroid = jest.fn();

describe("AsteroidCard", () => {
    beforeEach(() => {
        render(
            <AsteroidsContext.Provider value={{ addAsteroid: mockAddAsteroid }}>
                <AsteroidCard {...mockProps} />
            </AsteroidsContext.Provider>
        );
    });

    it("should display asteroid name", () => {
        const asteroidName = screen.getByText(mockProps.name);
        expect(asteroidName).toBeInTheDocument();
    });

    it("should call addAsteroid when action button is clicked", () => {
        const actionButton = screen.getByRole("button");
        actionButton.click();
        expect(mockAddAsteroid).toHaveBeenCalledWith(mockProps);
    });
});
