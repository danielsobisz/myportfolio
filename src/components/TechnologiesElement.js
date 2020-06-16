import React from 'react';
import SVGIcon from "./SVGicon";


const TechnologiesElement = (props) => {

    return (<div className={'technologies__item ' + (props.className)}  >
        <div className={"show-block" + (props.active ? " show-block--active" : "")} >
            <div className="show-block--svg-container" onClick={props.onClick}>
                <SVGIcon name={props.iconName} width={50} className="technologies__item__image" />
            </div>
            <p className={"technologies__item__name" + (props.active ? " technologies__item__name--active" : "")} >{props.name}</p>
        </div>
        {props.active ? (<div className="show-hidden">
            {props.attributes.map((el, i) => <p key={i} className={"show-hidden__text" + (props.active ? " show-hidden__text--active" : "")} >{el}</p>)}
        </div>) : null}

    </div>
    );
}

export default TechnologiesElement;

