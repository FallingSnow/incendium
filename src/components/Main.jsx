import React from 'react';
import {createDevTools} from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {green100, green500, green700, cyan500} from 'material-ui/styles/colors';
const muiTheme = getMuiTheme({
    palette: {
        primary1Color: 'transparent',
        primary2Color: 'transparent',
        primary3Color: 'transparent',
        accent1Color: 'transparent',
        accent2Color: 'transparent',
        accent3Color: 'transparent',
        textColor: 'white',
        alternateTextColor: '#FAAF40',
        // canvasColor: white,
        // borderColor: grey300,
        // disabledColor: fade(darkBlack, 0.3),
        // pickerHeaderColor: cyan500,
        // clockCircleColor: fade(darkBlack, 0.07),
        // shadowColor: fullBlack
    }
});

import {createBrowserHistory, useBasename} from 'history';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {Router, Route, IndexRedirect} from 'react-router';
import {routerMiddleware, syncHistoryWithStore, routerReducer} from 'react-router-redux';
import * as reducers from '../reducers';
const reducer = combineReducers({
    ...reducers,
    routing: routerReducer
});

// History v4
const initializedHistory = createBrowserHistory({
    basename: window.location.pathname.substr(0, window.location.pathname.lastIndexOf('/'))
});

// HACK to use history v4 with react-router v3
initializedHistory.getCurrentLocation = () => (initializedHistory.location);
// END HACK

const middleware = routerMiddleware(initializedHistory);

let store = createStore(reducer, applyMiddleware(middleware));
let DevTools,
    stats,
    disableDevTools = true;
if (process.env.NODE_ENV === 'development') {
    DevTools = createDevTools(
        <DockMonitor toggleVisibilityKey="ctrl-h" changePositionKey="ctrl-q">
            <LogMonitor theme="tomorrow" preserveScrollTop={false}/>
        </DockMonitor>
    );
    store = createStore(reducer, DevTools.instrument(), applyMiddleware(middleware));
} else {}

const history = syncHistoryWithStore(initializedHistory, store);

import App from './App.jsx';
import Home from './Home.jsx';
import NotFound from './NotFound.jsx';

export default class Main extends React.PureComponent {
    constructor(props) {
        super(props);
        console.debug('Main loaded.', this.props);
    }
    devtools() {
        if (process.env.NODE_ENV === 'development' && !disableDevTools)
            return <DevTools/>;
        else
            return null;
        }
    render() {
        return (
            <Provider store={store}>
                <div>
                    <MuiThemeProvider muiTheme={muiTheme}>
                        <Router history={history}>
                            <Route path="/" component={App}>
                                <IndexRedirect to="home"/>
                                <Route path="home" component={Home}/>
                            </Route>
                            <Route path='*' component={NotFound}/>
                        </Router>
                    </MuiThemeProvider>
                    {this.devtools()}
                </div>
            </Provider>
        );
    }
}
