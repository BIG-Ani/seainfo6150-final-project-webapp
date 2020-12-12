import React from 'react'
import {render} from "@testing-library/react";
import HtmlText from "./HtmlText";

describe('html text test', () => {

    it('render successfully ', () => {

        const text = '<p>hello</p><p>world</p>';

        const {container} = render(<HtmlText content={text} />);
        expect(container).toMatchSnapshot();
    });

})