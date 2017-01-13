import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Awards from './Home/Awards.jsx';
import WineSlider from './Home/WineSlider.jsx';

class Home extends React.PureComponent {
    constructor(props) {
        super(props);
        console.debug('Home loaded.', this.props);
    }
    render() {
        return (
            <div id="home">
                <div className="drop-shadow-container">
                    <header className="header flex flex-center" style={{
                        backgroundImage: 'url(' + require('../static/header-bg.jpg') + ')'
                    }}>
                        <img id="header-logo" className="drop-shadow-container" src={require('../static/logo.svg')}/>
                        <h2 id="header-tagline" className="drop-shadow-container">Incendium Wines</h2>
                    </header>
                </div>
                <Awards/>
                <WineSlider />
            </div>
        );
    }
}

export default Home;
