import React from 'react'
import {render} from "@testing-library/react";
import SubToggleButton from "./SubToggleButton";

describe('toggle button test', () => {

    it('button toggle successfully ', () => {
        const onClick = jest.fn();
        const { container } = render(<SubToggleButton buttonText={"Show more"} onClick={onClick}/>);
        expect(container).toMatchSnapshot();
    });

})