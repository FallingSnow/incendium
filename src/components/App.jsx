import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

const muiTheme = getMuiTheme({});

class App extends React.PureComponent {
    constructor(props) {
        super(props);
        console.debug('App loaded.', this.props);
    }
    render() {
        let segment = this.props.location.pathname.split('/')[1] || 'root';
        return (
            <div id="app">
                <AppBar className="navbar"/>
                <ReactCSSTransitionGroup id="transition-container" transitionName={{
                    enter: 'fadeIn'
                }} transitionEnterTimeout={1000} transitionEnter={true} transitionLeave={false}>
                    {React.cloneElement(this.props.children, {key: segment})}
                </ReactCSSTransitionGroup>
            </div>
        );
    }
}

export default App;
