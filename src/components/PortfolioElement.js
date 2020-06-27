import React from "react";
import SVGIcon from "../components/SVGicon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
class PortfolioELement extends React.Component {
  state = {
    active: false,
  };

  handleClickOpen = (prevState) => {
    if (this.state.active === false) {
      this.setState({
        active: true,
      });
    }
  };

  handleClickClose = () => {
    this.setState({
      active: false,
    });
  };

  render() {
    const {
      className,
      id,
      name,
      text,
      disabledGithub,
      linkGithub,
      disabledLive,
      linkLive,
    } = this.props;
    const { active } = this.state;
    return (
      <div
        className={"portfolio__item " + className}
        key={id}
        onClick={this.handleClickOpen}
      >
        <div className={"portfolio__item--opened" + (active ? " active" : "")}>
          <FontAwesomeIcon
            icon={faTimes}
            className="font-awesome__icon"
            onClick={this.handleClickClose}
          />
          <h3 className="portfolio__item__name">{name}</h3>
          <p className="portfolio__item__text">{text}</p>
          <div className="portfolio__item__svg">
            {disabledGithub ? (
              <div className="svg__button--disabled">
                <SVGIcon
                  name="github"
                  className="button-portfolio"
                  width={50}
                ></SVGIcon>
              </div>
            ) : (
              <div className="svg__button">
                {" "}
                <a href={linkGithub}>
                  {" "}
                  <SVGIcon
                    name="github"
                    className="button-portfolio"
                    width={50}
                  ></SVGIcon>
                </a>
              </div>
            )}
            {disabledLive ? (
              <div className="svg__button--disabled">
                <SVGIcon
                  name="play-button"
                  className="button-portfolio"
                  width={50}
                ></SVGIcon>
              </div>
            ) : (
              <div className="svg__button">
                {" "}
                <a href={linkLive}>
                  {" "}
                  <SVGIcon
                    name="play-button"
                    className="button-portfolio"
                    width={50}
                  />
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default PortfolioELement;
