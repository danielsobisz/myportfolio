import React from 'react';
import SVGIcon from "../components/SVGicon";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
class PortfolioELement extends React.Component {
    state = {
        active: false,
    }


    handleClickOpen = prevState => {
        if (this.state.active === false) {
            this.setState({
                active: true

            })
        }



    };

    handleClickClose = () => {
        this.setState({
            active: false,
        })
    }
    render() {


        return (

            <div className={"portfolio__item " + (this.props.className)} key={this.props.id} onClick={this.handleClickOpen}>

                <div className={"portfolio__item--opened" + (this.state.active ? ' active' : '')} >
                    <FontAwesomeIcon icon={faTimes} className="font-awesome__icon" onClick={this.handleClickClose} />
                    <h3 className="portfolio__item__name">{this.props.name}</h3>
                    <p className="portfolio__item__text">{this.props.text}</p>
                    <div className="portfolio__item__svg">
                        {this.props.disabledGithub ?
                            <div className="svg__button--disabled">
                                <SVGIcon name="github" className="button-portfolio" width={50}></SVGIcon>
                            </div>
                            :
                            <div className="svg__button"> <a href={this.props.linkGithub}>  <SVGIcon name="github" className="button-portfolio" width={50}></SVGIcon></a>
                            </div>}
                        {this.props.disabledLive ?
                            <div className="svg__button--disabled">
                                <SVGIcon name="play-button" className="button-portfolio" width={50}></SVGIcon>
                            </div>
                            :
                            <div className="svg__button">  <a href={this.props.linkLive}> <SVGIcon name="play-button" className="button-portfolio" width={50} /></a></div>}



                    </div>
                </div>

            </div >);
    }
}

export default PortfolioELement;


