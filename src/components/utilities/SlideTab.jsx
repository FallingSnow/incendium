import React from 'react';

class SlideTab extends React.PureComponent {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className={'SlideTab SlideTab-'+this.props.anchor} style={{
                backgroundImage: 'url(' + this.props.background + ')'
            }}>
                {this.props.children}
            </div>
        );
    }
}

export default SlideTab;
