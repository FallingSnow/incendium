import React from 'react';
class TextContainer extends React.PureComponent {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="TextContainer" style={this.props.style}>
                {this.props.children}
            </div>
        );
    }
}

export default TextContainer;
