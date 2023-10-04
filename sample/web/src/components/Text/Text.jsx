import React from 'react';
import './Text.css';

const Text = (props) => {
    return (
        <p {...props} className={'text ' + props.className}/>
    );
};

export default Text;
