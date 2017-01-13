import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {TextContainer, SlideTab} from '../utilities';
class Awards extends React.PureComponent {
    constructor(props) {
        super(props);
        console.debug('Awards loaded.', this.props);
    }
    render() {
        return (
            <div id="awards" className="flex flex-stretch-row">
                <div style={{textAlign: 'center'}}>
                    <img src={require('../../static/beer.png')} style={{height:240}}/>
                    <h4>2013 Soviegn Blaunk</h4>
                </div>
                <TextContainer>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id placerat magna. Ut scelerisque eros vitae velit porttitor luctus. Curabitur hendrerit, risus et dapibus varius, neque erat rhoncus eros, a tincidunt velit massa eu orci. Vestibulum tempor, lectus at feugiat accumsan, dui velit lobortis lacus, non bibendum mi nibh ultrices dolor. Etiam eros ligula, venenatis vel eros in, pretium pulvinar tortor. Nulla mattis ullamcorper gravida. Morbi suscipit enim in quam condimentum vestibulum. Vestibulum ut neque at mauris pharetra venenatis nec vitae nunc. Sed ultrices nunc a leo tincidunt euismod.</TextContainer>
            </div>
        );
    }
}

export default Awards;
