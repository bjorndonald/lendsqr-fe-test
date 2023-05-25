import { fireEvent, render, screen } from "@testing-library/react";
import { resizeScreenSize } from "../../utils/numbers";
import Dropdown from "./Dropdown";

describe('Dropdown component', () => {
    it('renders correctly with a particular prop selectedValue', () => {
        const value = "Weight"
        const list = ["Weight", "Pound", "Kilograms"]
        const { getByText } = render(<Dropdown id="test" setValue={() => { }} selectedValue={value} list={list} />);
        const element = getByText(value);
        expect(element).not.toBeNull();
        expect(element.tagName).toEqual('SPAN');
    });

    it('renders list correctly with a particular prop list when open', () => {
        const value = "Weight"
        const list = ["Weight", "Pound", "Kilograms"]
        const { getByText, container } = render(<Dropdown id="test" setValue={() => { }} selectedValue={value} list={list} />);
        const btn = container.querySelector(".dropdown-btn")
        fireEvent.click(btn as Element)
        const element = getByText(list[1]);
        expect(element?.className).toEqual('dropdown-item');
    });

})