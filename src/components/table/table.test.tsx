import { render } from "@testing-library/react";
import { mount } from "enzyme";
import Table from "./Table";

const COLUMNS = [
    {
        title: "Organization",
        key: "organization",
        width: "calc(9ch + 26px)"
    },
]

const ROWS = [
    {
        organization: "Lendsqr"
    }
]

describe('Table component', () => {
    it('Using snapshot testing', () => {

        const { asFragment } = render(<Table rows={ROWS} columns={COLUMNS} />);

        expect(asFragment()).toMatchSnapshot();
    });

    it('columns renders correctly', () => {
        const { asFragment, container } = render(<Table rows={ROWS} columns={COLUMNS} />);
        expect(asFragment()).toMatchSnapshot();
        expect(container.querySelectorAll('.table-header .table-col h6')[0].textContent).toEqual('Organization');
    })

    it('rows renders correctly', () => {
        const { asFragment, container } = render(<Table rows={ROWS} columns={COLUMNS} />);
        expect(asFragment()).toMatchSnapshot();
        expect(container.querySelectorAll('.table-body .table-col span')[0].textContent).toEqual('Lendsqr');
    })
})