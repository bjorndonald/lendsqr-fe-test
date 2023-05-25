import { render } from "@testing-library/react";
import Metrics from "./Metrics";

describe("Metrics component", () => {
    it('Using snapshot testing', () => {
        const { asFragment } = render(<Metrics />);

        expect(asFragment()).toMatchSnapshot();
    });
})