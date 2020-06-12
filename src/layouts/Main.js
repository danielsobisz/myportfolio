import React from 'react';
import quoteImage from '../images/quote-icon.png';
import PortfolioElement from '../components/PortfolioElement';
import PortfolioData from '../data/portfolioData';
import TechnologiesElement from '../components/TechnologiesElement';
import TechnologiesData from '../data/technologiesData';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = { activeIndex: null };
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
        const portfolioItems = PortfolioData.map(el => <PortfolioElement key={el.id} className={el.className} text={el.text} linkGithub={el.linkGithub} linkLive={el.linkLive} />)
        const technologiesItems = TechnologiesData.map((el, i) => <TechnologiesElement key={el.id} className={el.className} name={el.name} attributes={el.attributes} active={activeIndex === i} onClick={this.handleItemClick.bind(this, i)} />)

        return (
            <main className="main">
                <div className="quote__container">
                    <figure className="quote">
                        <blockquote className="quote__text">
                            If you don’t love it, you’re going to fail.
                </blockquote>
                        <figcaption className="quote__author">
                            &mdash; Steve Jobs
                 </figcaption>
                        <div className="quote__icon"><img className="quote__icon__image" src={quoteImage} alt="" /></div>
                    </figure>
                </div>

                <div className="about">
                    <h2 className="about__heading">Cześć, jestem Daniel</h2>
                    <p className="about__text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad necessitatibus animi accusantium magnam iusto doloremque quidem illum, non vitae voluptatem culpa officiis quod fuga molestias ab velit odit excepturi quaerat.</p>
                </div>
                <div className="technologies">
                    <h2 className="technologies__heading"><span className="span_text"> Technologie</span></h2>
                    {technologiesItems}
                </div>
                <div className="portfolio">{portfolioItems}</div>
            </main>);
    }
}

export default Main;