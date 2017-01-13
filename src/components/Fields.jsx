import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
// <img id="header-logo" src={require('../static/logo.svg')}/>
// <h2 id="header-tagline">Incendium Wines</h2>
class Informationals extends React.PureComponent {
    constructor(props) {
        super(props);
        console.debug('Informationals loaded.', this.props);
    }
    render() {
        return (
            <div id="informationals">
                <div className="drop-shadow-container">
                    <div className="diamond diamond-left" style={{
                        backgroundImage: 'url(' + require('../static/grapes.jpg') + ')'
                    }}></div>
                </div>
                <div className="drop-shadow-container">
                    <div className="diamond diamond-right" style={{
                        backgroundImage: 'url(' + require('../static/grapes.jpg') + ')'
                    }}></div>
                </div>
            </div>
        );
    }
}

export default Informationals;
