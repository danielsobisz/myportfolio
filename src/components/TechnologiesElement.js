import React from 'react';
import SVGIcon from "./SVGicon";






class TechnologiesElement extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (<div className={'technologies__item ' + (this.props.className)}  >
            <div className={"show-block" + (this.props.active ? " show-block--active" : "")} ><span className="show-block--svg-container" onClick={this.props.onClick}><SVGIcon name={this.props.iconName} width={100} className="technologies__item__image" /></span>
                <p className={"technologies__item__name" + (this.props.active ? " technologies__item__name--active" : "")}>{this.props.name}</p>
            </div>
            <div className={"show-hidden" + (this.props.active ? " show-hidden--active" : "")}>
                {this.props.attributes.map(el => <p className="show-hidden__text">{el}</p>)}
            </div>
        </div>);
    }
}

export default TechnologiesElement;