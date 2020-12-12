import React from 'react'
import {render} from "@testing-library/react";
import NaviBar from "./NaviBar";

describe('test navigation', () => {
    it('test navigation successfully',  () => {
        const {container} = render(<NaviBar />);
        expect(container).toMatchSnapshot();
    });
});