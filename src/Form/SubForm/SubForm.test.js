import React from 'react'
import {render} from "@testing-library/react";
import SubForm from "./SubForm";

describe('sub form test', () => {

    it('render successfully ', () => {
        const {container} = render(<SubForm />);
        expect(container).toMatchSnapshot();
    });

})