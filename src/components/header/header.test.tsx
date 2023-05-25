import { render } from "@testing-library/react";
import { resizeScreenSize } from "../../utils/numbers";
import Header from "./Header";

describe('Header component', () => {
    it("renders correctly on mobiles screens", () => {
        resizeScreenSize(768);
        const { container } = render(<Header mobile={true} />);
        const menuElement = container.getElementsByClassName("menu")
        const profileElement = container.getElementsByClassName("profile-menu")
        expect(menuElement.length).toEqual(1);
        expect(profileElement.length).toEqual(0);
    });

    it("renders correctly on non-mobile screens", () => {
        const { container } = render(<Header mobile={false} />);
        const menuElement = container.getElementsByClassName("menu")
        const profileElement = container.getElementsByClassName("profile-menu")
        expect(menuElement.length).toEqual(0);
        expect(profileElement[0] as HTMLElement).toBeInTheDocument();
    });

})