import React from "react";
import quoteImage from "../images/quote-icon.png";
import PortfolioElement from "../components/PortfolioElement";
import PortfolioData from "../data/portfolioData";
import TechnologiesElement from "../components/TechnologiesElement";
import TechnologiesData from "../data/technologiesData";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: null,
    };
  }

  handleItemClick(index) {
    if (this.state.activeIndex !== index) {
      this.setState({ activeIndex: index });
    }

    if (this.state.activeIndex === index) {
      this.setState({ activeIndex: null });
    }
  }

  render() {
    let activeIndex = this.state.activeIndex;
    const portfolioItems = PortfolioData.map((el) => (
      <PortfolioElement
        key={el.id}
        className={el.className}
        name={el.name}
        text={el.text}
        linkGithub={el.linkGithub}
        linkLive={el.linkLive}
        disabledGithub={el.disabledGithub}
        disabledLive={el.disabledLive}
      />
    ));
    const technologiesItems = TechnologiesData.map((el, i) => (
      <TechnologiesElement
        key={el.id}
        className={"direction-" + (i % 2 ? "r" : "l")}
        iconName={el.iconName}
        name={el.name}
        attributes={el.attributes}
        active={activeIndex === i}
        onClick={this.handleItemClick.bind(this, i)}
      />
    ));

    return (
      <main className="main">
        <div className="quote">
          <figure className="quote__figure">
            <blockquote className="quote__figure__text">
              If you don’t love it, you’re going to fail.
            </blockquote>
            <figcaption className="quote__figure__author">
              &mdash; Steve Jobs
            </figcaption>
            <div className="quote__figure__icon">
              <img className="icon__image" src={quoteImage} alt="" />
            </div>
          </figure>
        </div>
        <div className="about">
          <h2 className="about__heading">Cześć, jestem Daniel</h2>
          <p className="about__text">
            Swoją przygodę z programowaniem zacząłem w marcu 2019 roku, przez
            ten czas zrealizowałem kilka komercyjnych projektów. Z dnia na dzień
            rozwijam swoje umiejętności z zakresu front-endu. W swojej pracy
            używam najnowszych technologii oraz przykładam wagę do każdego
            szczegółu.
          </p>
        </div>

        <div className="technologies" id="tech">
          <h2 className="technologies__heading">
            <span className="span_text"> Technologie</span>
          </h2>
          <div className="technologies__container">{technologiesItems}</div>
        </div>

        <div className="portfolio">{portfolioItems}</div>
      </main>
    );
  }
}

export default Main;
