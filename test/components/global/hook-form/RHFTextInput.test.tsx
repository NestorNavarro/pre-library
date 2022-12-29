/**
 * @jest-environment jsdom
 */
import React from "react";
import { render } from '@testing-library/react';
import Home from "../../../../src/pages/dashboard/Home"

describe("RHFTextInput", () => { 
    test("should pass", () => { 
        const { container } = render(<Home />);
        expect( container ).toMatchSnapshot();
    });
});