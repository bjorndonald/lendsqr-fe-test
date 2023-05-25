import { fireEvent, render } from "@testing-library/react";
import { screen } from '@testing-library/dom'
import AppContextProvider from "../../contexts/app.context";
import PageLayout from "../../layouts/Page.layout";
import { resizeScreenSize } from "../../utils/numbers";
import Header from "../header/Header";
import SideBar from "./SideBar";

describe('Sidebar component', () => {
    test("renders correctly on mobile screens when open", () => {
        const { container } = render(<SideBar isMenuOpen={true} mobile={true} />)
        const profileMenu = container.querySelectorAll("a")
        expect(profileMenu.length).toEqual(1)
    });

    test("renders correctly on mobile screens when not open", () => {
        const { container } = render(<SideBar isMenuOpen={false} mobile={true} />)
        const profileMenu = container.querySelectorAll("a")
        expect(profileMenu.length).toEqual(0)
    });

    it("renders correctly on non-mobile screens", () => {

    });

})