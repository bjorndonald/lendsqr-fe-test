import { render } from "@testing-library/react"
import UsersTable from "./UsersTable"

jest.mock("axios")

describe("Metrics component", () => {
    it('Using snapshot testing', () => {
        const { asFragment } = render(<UsersTable users={[]} />);

        expect(asFragment()).toMatchSnapshot();
    });
})