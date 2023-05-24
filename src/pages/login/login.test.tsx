import * as React from 'react';
import {
    RouterProvider,
    createMemoryRouter,
    BrowserRouter,
} from "react-router-dom";
import userEvent from '@testing-library/user-event'
import { fireEvent, screen, render, act } from '@testing-library/react';
import Login from './index';
import RightSide from '../../features/login/rightside/RightSide';

describe('Login Page', () => {

    it('should display Welcome! text', () => {
        // Act
        const { getByText } = render(<BrowserRouter>
            <Login />
        </BrowserRouter>);

        // Assert
        const element = getByText('Welcome!');
        expect(element).not.toBeNull();
        expect(element.tagName).toEqual('H2');
    });

    it('left side and right side should be side by side and equal width', () => {
        // Act
        const result = render(<BrowserRouter>
            <Login />
        </BrowserRouter>);

        // Assert
        const leftElement = result.container.querySelector('#left-side');
        const rightElement = result.container.querySelector('#right-side');

        expect(leftElement).not.toBeNull();
        expect(rightElement).not.toBeNull();
        expect(leftElement?.clientWidth).toEqual(rightElement?.clientWidth);
    });

    it('should display login page using snapshot testing', () => {
        // Act
        const { asFragment } = render(<BrowserRouter><Login /></BrowserRouter>);

        // Assert
        expect(asFragment()).toMatchSnapshot();
    });


});