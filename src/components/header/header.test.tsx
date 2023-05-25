import { render, screen } from "@testing-library/react";
import { resizeScreenSize } from "../../utils/numbers";
import Header from "./Header";

describe('Header component', () => {
    it("renders correctly on mobiles screens", () => {
        // Set the screen size to a smaller value
        resizeScreenSize(768);

        // Render the component
        const { container } = render(<Header mobile={true} />);

        // Verify that the component styles are correct for the default screen size
        const menuElement = container.getElementsByClassName("menu")
        const profileElement = container.getElementsByClassName("profile-menu")
        expect(menuElement.length).toEqual(1);
        expect(profileElement.length).toEqual(0);
    });

    it("renders correctly on non-mobile screens", () => {
        // Render the component
        const { container } = render(<Header mobile={false} />);

        // Verify that the component styles are correct for the default screen size
        const menuElement = container.getElementsByClassName("menu")
        const profileElement = container.getElementsByClassName("profile-menu")
        expect(menuElement.length).toEqual(0);
        expect(profileElement[0] as HTMLElement).toBeInTheDocument();
    });

})