import React from 'react'
import About from './About'
import {render} from "@testing-library/react";

describe("About test", () => {

    it('about render correctly ', () => {
        const { container } = render(<About />);

        expect(container).toMatchSnapshot();
    });

});