import * as React from 'react';
import { render } from '@testing-library/react';
import Dashboard from './Dashboard';

describe('Dashboard Page', () => {
    it('should display Dashboard text', () => {
        const { getAllByText } = render(
            <Dashboard />
        );

        const elements = getAllByText('Dashboard');
        expect(elements).not.toBeNull();
    });
});