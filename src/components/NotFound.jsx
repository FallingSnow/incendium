import React from 'react';

export default class NotFound extends React.PureComponent {
    constructor(props) {
        super(props);
        console.log(props)
    }
    render() {
        return (
            <h2 style={{color: 'red'}}>Page not found!</h2>
        );
    }
}
