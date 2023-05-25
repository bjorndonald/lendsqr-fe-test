import * as React from 'react';
import {
    RouterProvider,
    createMemoryRouter,
    BrowserRouter,
} from "react-router-dom";
import userEvent from '@testing-library/user-event'
import { fireEvent, screen, render, act } from '@testing-library/react';
import Dashboard from './Dashboard';
import RightSide from '../../features/login/rightside/RightSide';

describe('Dashboard Page', () => {
    it('should display Dashboard text', () => {
        const { getAllByText } = render(
            <Dashboard />
        );

        const elements = getAllByText('Dashboard');
        expect(elements).not.toBeNull();
    });
});