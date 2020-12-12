import React from 'react'

const HtmlText = (props) => {

    return <div dangerouslySetInnerHTML={{ __html: props.content }} />;

}

export default HtmlText;