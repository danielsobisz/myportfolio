import React from "react";
import SVGIcon from "./SVGicon";

const TechnologiesElement = (props) => {
  const { className, onClick, active, iconName, name, attributes } = props;
  return (
    <div className={"technologies__item " + className}>
      <div className="technologies__item__wrapper">
        <div
          className={
            "technologies__item__content " + (active ? "active" : null)
          }
          onClick={onClick}
        >
          <div className="svg__container">
            <SVGIcon
              name={iconName}
              width={40}
              className="technologies__item__image"
            />
          </div>
          {active ? (
            <div
              className={
                "technologies__item__content--onactive " +
                (active ? "active" : null)
              }
            >
              <p className="technologies__item__name">{name}</p>
              {attributes.map((el, i) => (
                <p key={i} className="technologies__item__content__paragraph">
                  {el}
                </p>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default TechnologiesElement;
