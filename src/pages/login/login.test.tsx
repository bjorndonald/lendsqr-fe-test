import * as React from 'react';
import {
    BrowserRouter,
} from "react-router-dom";
import { render } from '@testing-library/react';
import Login from './index';

describe('Login Page', () => {
    it('should display Welcome! text', () => {
        const { getByText } = render(<BrowserRouter>
            <Login />
        </BrowserRouter>);
        const element = getByText('Welcome!');
        expect(element).not.toBeNull();
        expect(element.tagName).toEqual('H2');
    });

    it('left side and right side should be side by side and equal width', () => {
        const result = render(<BrowserRouter>
            <Login />
        </BrowserRouter>);
        const leftElement = result.container.querySelector('#left-side');
        const rightElement = result.container.querySelector('#right-side');

        expect(leftElement).not.toBeNull();
        expect(rightElement).not.toBeNull();
        expect(leftElement?.clientWidth).toEqual(rightElement?.clientWidth);
    });

    it('Using snapshot testing', () => {
        const { asFragment } = render(<BrowserRouter><Login /></BrowserRouter>);
        expect(asFragment()).toMatchSnapshot();
    });


});