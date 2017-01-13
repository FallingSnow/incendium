import React from 'react';
import classNames from 'classnames';
import {TextContainer} from '../utilities';

let wines = [];
for (let i = 0; i < 8; i++) {
    wines.push({
        year: 2011 + i,
        type: 'Cabernet Sauvignon',
        awards: [],
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mattis, metus id finibus facilisis, tortor nisi eleifend justo, vel blandit nisl lacus ut mauris. Aenean egestas sapien pulvinar lacus maximus, at interdum lacus scelerisque. Morbi maximus lorem ac congue laoreet. Duis accumsan quam eget erat mattis, accumsan feugiat lacus rutrum. Ut ut facilisis nunc. Nam imperdiet condimentum mauris vel porta. Praesent nulla odio, ultricies vitae mollis vel, ullamcorper id felis. Ut ullamcorper enim massa, gravida hendrerit ante rutrum vitae. Ut consequat faucibus sagittis. Morbi tincidunt nunc sit amet blandit condimentum. Maecenas ut quam ullamcorper, commodo metus eu, tempus lectus.'
    });
}

class WineSlider extends React.PureComponent {
    constructor(props) {
        super(props);
    }
    selectWine(selectedWine) {
        return function() {
            this.setState({selectedWine, selectorPosition: selectedWine});
        }.bind(this);
    }
    state = {
        selectedWine: 0,
        selectorPosition: 0
    }
    generateWineSelectors() {
        this.WineSelectors = [];
        for (let bottleIndex in wines) {
            let bottle = wines[bottleIndex];
            let selector = <div key={bottle.year + ' ' + bottle.type} className={classNames('selectable-container', {
                active: bottleIndex === this.state.selectorPosition
            })} onTouchTap={this.selectWine(bottleIndex)}>
                <a className="selectable"><img src={require('../../static/bottle.png')}/></a>
            </div>;
            this.WineSelectors.push(selector);
        }
    }
    scrollTo(poition) {
        this.setState({
            selectorPosition: Math.min(position, wines.length - 5)
        });
    }
    render() {
        this.generateWineSelectors();
        return (
            <div className="WineSlider" style={{
                backgroundImage: 'url(' + require('../../static/field.jpg') + ')'
            }}>
                <div className="display">
                    <svg>
                        <defs>
                            <linearGradient id="fadeTopToBottom" x1="0%" y1="0%" x2="0%" y2="100%" spreadMethod="pad">
                                <stop offset="0%" stopColor="#000000" stopOpacity="1"/>
                                <stop offset="15%" stopColor="#ffffff" stopOpacity="1"/>
                                <stop offset="85%" stopColor="#ffffff" stopOpacity="1"/>
                                <stop offset="100%" stopColor="#000000" stopOpacity="1"/>
                            </linearGradient>
                            <mask id="fade" x="0" y="0" width="100%" height="100%">
                                <rect x="0" y="0" width="100%" height="100%" style={{
                                    stroke: 'none',
                                    fill: 'url(#fadeTopToBottom)'
                                }}/>
                            </mask>
                        </defs>
                        <image xlinkHref={require('../../static/bottle.png')} width="100%" y="-65%" height="200%"/>
                    </svg>
                    <div className="description">
                        <h1 className="title">
                            <span className="year">{wines[this.state.selectedWine].year}</span>
                            <span className="type">{wines[this.state.selectedWine].type}</span>
                        </h1>
                        <p>{wines[this.state.selectedWine].description}</p>
                    </div>
                </div>
                <div className="selector-menu-wrapper">
                    <div className="arrow arrow-left" onTouchTap={() => this.scrollTo(this.state.selectorPosition - 5)}>
                        <a className="fa fa-angle-left"/>
                    </div>
                    <div className="selector-wrapper">
                        <div className="selector-inner-wrapper" style={{
                            transform: 'translateX(-' + 20 * Math.max(this.state.selectorPosition - 2, 0) + '%)'
                        }}>
                            {this.WineSelectors}
                        </div>
                    </div>
                    <div className="arrow arrow-right" onTouchTap={() => this.scrollTo(this.state.selectorPosition + 5)}>
                        <a className="fa fa-angle-right"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default WineSlider;
