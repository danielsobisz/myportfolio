import React from "react";

const getViewBox = (name) => {
  switch (name) {
    case "logo":
      return "0 0 83.99 67.4";
    case "github":
      return "0 0 760.01 760.01";
    case "linkedin":
      return "0 0 760.01 760.01";
    case "email":
      return "0 0 760.01 760.01";
    case "html-icon":
      return "0 0 391.12 281.41";
    case "css-icon":
      return "0 0 267 273";
    case "js-icon":
      return "0 0 147.9 111.52";
    case "react-icon":
      return "0 0 201.4 188.07";
    case "rwd-icon":
      return "0 0 182.43 67.24";
    case "sass-icon":
      return "0 0 263 220";
    case "bs-icon":
      return "0 0 257.52 311.11";
    case "git-icon":
      return "0 0 266 266";
    case "play-button":
      return "0 0 157.71 157.71";
    default:
      return "0 0 32 32";
  }
};

const getPath = (name, props) => {
  switch (name) {
    case "logo":
      return (
        <>
          {" "}
          <path
            {...props}
            className="logo_svg"
            d="M44.9,28.21a26.1,26.1,0,0,0-3.08-12.56A21.56,21.56,0,0,0,33.37,7a24.27,24.27,0,0,0-12.2-3.07H4.68V55.07H21.52a24.84,24.84,0,0,0,6.23-.79l17-20.41a29.6,29.6,0,0,0,.18-3.3ZM32.31,30.57q0,7.45-2.84,11.23a9.61,9.61,0,0,1-8.16,3.78H17V13.41h4.15q5.45,0,8.3,3.77t2.84,11.18Z"
            transform="translate(-4.68 -3.89)"
          />
          <path
            className="logo_svg"
            d="M80.37,43.73a45.84,45.84,0,0,0-8.71-3.68,26.24,26.24,0,0,1-7.42-3.3,4.3,4.3,0,0,1-.2-7.28A8.46,8.46,0,0,1,69.27,28a7.47,7.47,0,0,1,5.18,1.73,6.16,6.16,0,0,1,1.92,4.85h12.3a14.72,14.72,0,0,0-2.42-8.32,15.7,15.7,0,0,0-6.81-5.6,23.73,23.73,0,0,0-9.89-2,29,29,0,0,0-8,1.06l-11.66,14q.4,8,9.92,12.72a64.69,64.69,0,0,0,7.87,3.12,24.21,24.21,0,0,1,6.74,3.13A5.1,5.1,0,0,1,76.33,57a4.35,4.35,0,0,1-1.77,3.71A8,8,0,0,1,69.72,62q-4.78,0-6.91-1.95T60.69,54H48.31a15.93,15.93,0,0,0,2.55,8.95,17,17,0,0,0,7.59,6.12,27.55,27.55,0,0,0,11.27,2.23c5.89,0,10.51-1.28,13.89-3.83a12.52,12.52,0,0,0,5.06-10.55Q88.67,48.51,80.37,43.73Z"
            transform="translate(-4.68 -3.89)"
          />
        </>
      );
    case "github":
      return (
        <path
          {...props}
          className="contact-item__image github-button"
          d="M226.71-113.37h59.34c.82.44,1.59,1.21,2.44,1.28,31.7,2.51,62.59,7.81,92.33,19.66,25.75,10.26,51.36,20.12,74.75,35.23C477.83-42.95,499-27.6,518-9.56a294.16,294.16,0,0,1,23.74,25.21c9.57,11.53,19.19,22.89,27.72,35.23a385.73,385.73,0,0,1,64.08,167.19c.83,5.9-.52,12.21,2.65,17.82v61.28c-1.59.84-1.39,2.35-1.48,3.75a282.06,282.06,0,0,1-8.12,52.91,390.59,390.59,0,0,1-46.33,112.22C569.76,483.35,557,499,544.76,515s-27.62,28.9-42.57,42.16c-12.84,11.4-27.32,21.2-41.73,30.79-23.41,15.57-49.36,26.84-75.66,37-30.56,11.78-62.76,17.57-95.66,20.21-29.34,2.35-58.64,2.29-87.53-2.11-30.76-4.69-61.16-11-89.57-24.81C89.15,607.09,65.26,598,45,582.39,30.12,571,14.74,560.4.66,547.8-20.9,528.52-39.13,506.94-55.71,484c-19.1-26.34-33.24-55.23-44.64-85.42A363.08,363.08,0,0,1-123,291.24a374.49,374.49,0,0,1,.87-59.72,430,430,0,0,1,8.62-52.84A383,383,0,0,1-79,87.47C-62.21,55.54-40.18,27.33-15.82.53c8.44-9.29,18.48-17,27.6-25.54C27.54-40,47-50.93,65.46-62.69c23.47-15,50.17-24.14,76.34-33.78,21-7.72,43.27-11.4,65.63-14.25C213.84-111.59,220.62-110.45,226.71-113.37Zm107,594.3c1.49-1.85,1.27-4,1.27-6.14V391.67c0-2.11.19-4.27-1.22-6.15,0-16.54-3.71-32.14-13.19-46.66,10.56-1.34,19.85-4.47,29.3-7.27,20.77-6.15,40.26-14.65,55-30,19.29-20.07,29-44.45,29.48-71.9.34-18,0-35.89-2.86-53.73-3-18.24-8.06-35.45-22.15-48.91-2.58-2.47-3.21-4.52-2-8.07,6.71-18.91,7.85-38,1.83-57.46C406,51,406.1,50.88,395.34,54.36a57.69,57.69,0,0,0-11.21,5.13c-13.58,7.78-23.9,18.63-32.07,31.36-2.54,4-4.45,3.27-7.42,1.12-8.41-6.08-18.87-7.77-28.5-9.63-22.95-4.44-46.45-3.64-69.72-1.66a89.49,89.49,0,0,0-35.79,10.69c-4.73,2.65-6.95,3.08-9.4-1.71a34.78,34.78,0,0,0-3.34-4.6c-11.39-15-25.55-26.47-44.12-32.49-3.6-1.16-5.74-.16-6.87,3.07-6.41,18.53-8.9,37.21-2.36,56,2.81,8,4.1,14.82-4.57,20.11-1.14.68-1.66,2.27-2.52,3.41-13.79,18.52-16.32,40.3-17.27,61.84-1,21.8-2.27,43.81,5.27,65.35,6.35,18.19,16.41,33.75,31.39,45.92,20.27,16.48,45.19,23.93,70.47,29.8,5.32,1.24,5.26,2.24,3.1,6-6.14,10.67-10.13,22-9.67,34.35.11,3.35-1.81,4.64-4.56,5.46-12.7,3.79-25.66,3.9-38.66,2.19-21.82-2.85-34.42-17.44-45.32-33.82-11.26-16.93-24.91-29.74-47.9-28.09-2,.14-4.17-.21-5.27,1.8-1.27,2.29,1.17,3.23,2.21,4.7,5,7.12,12.82,11.4,18.25,18.23,9.2,11.57,15.29,24.7,22.43,37.32,5.31,9.39,11.53,18.34,20.23,25,23.06,17.51,49.55,18.27,77,13.25,0,16.58,0,33.17.1,49.74,0,2.76-.75,5.7,1.6,8.12H327.49C329.7,482.36,332.09,483,333.7,480.93Z"
          transform="translate(123.85 113.37)"
        />
      );
    case "linkedin":
      return (
        <path
          {...props}
          className="contact-item__image"
          d="M1089.31,386.66a4.15,4.15,0,0,1-.65-1.84.41.41,0,0,0,0-.11v0a4.41,4.41,0,0,1-.11-.88v0c0-.15,0-.29,0-.44v0a4.41,4.41,0,0,1,0-1.81c-1.64-5.43-.89-11.25-1.58-16.74a389.81,389.81,0,0,0-20.39-84.16,370.62,370.62,0,0,0-54-98.07,379.8,379.8,0,0,0-64.07-65.76A371.66,371.66,0,0,0,873.25,69,385.81,385.81,0,0,0,768.67,36.68a378.6,378.6,0,0,0-81.41-4.18,360.59,360.59,0,0,0-92.91,17.25,403.31,403.31,0,0,0-92.06,43.49,362.5,362.5,0,0,0-61.2,49.59A382.68,382.68,0,0,0,334.4,350.06a370.92,370.92,0,0,0-4.56,84.65,383.94,383.94,0,0,0,31.79,130.91,379.38,379.38,0,0,0,46.13,78.06A374.56,374.56,0,0,0,471,708.1a393.22,393.22,0,0,0,71.63,45.82,376.23,376.23,0,0,0,106.64,33.83,20.49,20.49,0,0,0,2.13.21.51.51,0,0,0,.26.1c3,.5,6,1.21,9,1.8a.91.91,0,0,0,.33,0c4.63.7,9.24,1.55,13.94,1.86l4.49.17c6.75.1,13.53-.37,20.27-.26,8.54.15,17.07,0,25.61,0,.83,0,1.68,0,2.53-.07a3.85,3.85,0,0,1,1.61-.34c1.61,0,3.3-.09,5-.08a56.32,56.32,0,0,1,5.95-.08c5.43-1.63,11.26-.78,16.77-1.47a394,394,0,0,0,87.15-21.73,373,373,0,0,0,96.9-54.28,418.94,418.94,0,0,0,53.49-50.34,373.44,373.44,0,0,0,52.84-76.59A352.14,352.14,0,0,0,1070.7,531a409.46,409.46,0,0,0,14.74-61.78c1.12-7.32,1.8-14.74,2.73-22.1a7.54,7.54,0,0,0,.06-1.06,8,8,0,0,0,.34-2.13v-.3a21.43,21.43,0,0,0,.7-3.46v0c0-.05.08-.11.13-.16.1-6,.25-11.91.39-17.86V402.67A138.31,138.31,0,0,1,1089.31,386.66ZM547.44,169v0c29.07,0,51.1,22.5,51.1,52,0,29-22.51,51.06-52.07,51.06-29.12,0-51-22.36-51-51.93C495.46,191.22,518,169,547.44,169Zm51.29,440.16c0,5.86-1.43,7.81-7.58,7.81q-43.87-.54-87.75,0c-6.68.08-8-2.14-8-8.27.21-47.27.11-94.49.11-141.73h.08c0-46.42.15-92.85-.21-139.14,0-6.93,1.56-9.18,8.84-9.07,28.72.37,57.44.24,86.14,0,5.9,0,8.42,1,8.42,7.83Q598.49,467.9,598.73,609.18Zm336.43,7.76q-36.24-.56-72.47,0c-6.56.11-8.06-2.05-8.06-8.23q.24-74.48,0-149a104.53,104.53,0,0,0-8.6-42.6c-10.42-23.61-34.72-27.62-53.57-25.22-11.64,1.5-21.68,5.8-30,14.9s-12.08,19.79-14,31.44c-3.34,20-1.45,40.1-1.61,60.15-.34,36.77-.26,73.54,0,110.31,0,6.19-1.61,8.35-8.06,8.23q-35.43-.62-70.86,0c-7,.13-8.36-2.27-8.36-8.71.24-46.71.13-93.42.13-140.12,0-47,.12-93.95-.29-140.87-.05-6.72,1.85-8.65,8.55-8.52,22,.39,44,.31,66,0,5.85-.08,8.2,1.35,7.85,7.59-.42,8.84,0,17.71,0,26.56,0,1.49-.2,3.43,1.71,4.15s2.73-.53,3.7-2c13.66-21,34.63-30.38,58.08-34.16a173.8,173.8,0,0,1,68.26,2.4c34.53,8.15,54.57,30.28,63.13,63.74a225.61,225.61,0,0,1,6.64,56.15c0,55-.11,110.06.11,165.08C943.56,614.68,942.12,617.05,935.16,616.94Z"
          transform="translate(-329.15 -31.9)"
        />
      );
    case "email":
      return (
        <path
          {...props}
          className="contact-item__image"
          d="M741,927.09H680c-.45-.39-.86-1.07-1.35-1.13-6.36-.76-12.78-1.14-19.1-2.17-11.77-1.93-23.56-3.86-35.2-6.47-8.57-1.91-16.94-4.79-25.33-7.44-11.4-3.59-23-6.82-34-11.25-10.6-4.24-20.8-9.56-30.93-14.88-19-10-37.59-20.48-54-34.47-7-5.94-15-10.76-21.5-17.13-13.1-12.83-26-26-38.06-39.75a370.38,370.38,0,0,1-26.29-34.2,256.51,256.51,0,0,1-19.13-32.09c-7.74-15.72-14.51-31.93-21.19-48.14a230.33,230.33,0,0,1-8.66-26c-2.78-10-5.24-20.23-7.15-30.49-2.46-13.11-4.25-26.35-6.29-39.54-.66-4.28-1.22-8.57-1.82-12.86v-43c.52-.75,1.52-1.52,1.5-2.26-.42-16,1.94-31.8,5.34-47.29,3.56-16.24,8.65-32.16,13.33-48.14,5-16.91,10.67-33.55,19.44-48.94,8.89-15.59,17.3-31.48,27-46.56C404.18,321.1,413,310,422,299.2c6.06-7.3,13.39-13.55,20.07-20.36,3.94-4,7.42-8.52,11.61-12.22,6.15-5.44,12.57-10.61,19.21-15.44,13.41-9.74,26.63-19.83,40.67-28.59,20.74-12.92,42.35-24.35,65.75-31.9,11.35-3.66,22.73-7.23,34.2-10.5,7.53-2.14,15.18-4,22.87-5.44,9.17-1.75,18.41-3.18,27.66-4.37,8-1,16.06-1.51,24.09-2.3.32,0,.58-.66.87-1h43c.62.4,1.2,1.1,1.85,1.17,7.53.74,15.12,1.08,22.6,2.14,11.66,1.65,23.39,3.15,34.83,5.83,14.07,3.31,28,7.45,41.75,11.84a309.87,309.87,0,0,1,29.42,11.18c9.63,4.18,18.94,8.77,28.19,13.58a231.58,231.58,0,0,1,23.42,13.38c12.32,8.39,24.61,16.94,36.11,26.4A397.16,397.16,0,0,1,986,285.3c13.8,14.52,26.95,29.78,37.42,47,9.24,15.2,18.91,30.18,27.2,45.88A281,281,0,0,1,1067,416.51c5.28,15,9.67,30.4,13.53,45.85,2.84,11.4,4.34,23.15,6.2,34.78,1,6,1.36,12.07,2.11,18.1.08.66.77,1.24,1.17,1.85v61a11.34,11.34,0,0,0-1.2,2.85c-1.44,11.39-2,22.95-4.32,34.18a479.27,479.27,0,0,1-20.29,71c-9.7,26.29-23.82,50.24-38.85,73.68a320.57,320.57,0,0,1-49.19,59.1c-10.72,10.21-21.91,20-33.42,29.29a254.9,254.9,0,0,1-27.37,19.23c-11.1,6.78-22.6,13-34.25,18.75S857.68,897.24,845.66,902A325.86,325.86,0,0,1,812.8,913.2c-12.1,3.4-24.4,6.26-36.76,8.5-11.28,2-22.78,2.93-34.17,4.37C741.54,926.11,741.29,926.74,741,927.09ZM714.1,594c-10.6-9.11-20.91-17.86-31.1-26.75-11.69-10.22-23.28-20.55-34.88-30.87-2-1.8-3.16-2-5,.58-7.78,10.79-15.83,21.39-23.85,32-13.76,18.22-27.63,36.36-41.36,54.61-9.47,12.59-18.77,25.32-28.17,38-7.49,10.09-15,20.14-22.67,30.39H901l-23.1-30.8L825.25,591c-13.5-18-27-36-40.39-54.07-1.88-2.56-3-2.33-5-.56-7.55,6.64-15.2,13.19-22.77,19.82C742.81,568.67,728.57,581.2,714.1,594ZM513.49,396.2c6.23,5.61,11.74,10.71,17.4,15.63,11.83,10.28,23.78,20.42,35.61,30.7,8.85,7.7,17.53,15.59,26.38,23.29,11.94,10.4,24,20.64,36,31.05,9.34,8.16,18.47,16.54,27.8,24.7,17.76,15.54,35.68,30.9,53.34,46.56,2.92,2.6,5,2.53,7.62.22l26.73-23.65c8.63-7.63,17.24-15.29,25.93-22.85,12-10.39,24-20.65,36-31.07,9.33-8.15,18.46-16.54,27.8-24.69q22.14-19.33,44.42-38.49C885,422,891.58,416.55,898,410.92c5.37-4.68,10.6-9.51,16.39-14.72Zm-2,293.45L634.9,525,511.52,417.2Zm404.36-.73v-271c-3.86,3.31-7.23,6.15-10.55,9.07-8.8,7.75-17.55,15.57-26.38,23.29-12.55,11-25.17,21.86-37.73,32.82-6.23,5.43-12.32,11-18.57,16.42-8.85,7.66-17.73,15.29-26.72,22.79-2.34,1.94-2.31,3.76-.71,5.9q20.61,27.66,41.26,55.29,28.2,37.68,56.46,75.3c7.39,9.7,14.85,19.4,23,30.08Z"
          transform="translate(-330 -167.08)"
        />
      );
    case "html-icon":
      return (
        <>
          <path
            {...props}
            className="technologies__item__image-1"
            d="M130.58,209.81l79,32.77V297.2l-127.72-64V185.88l127.72-64v54.62Z"
            transform="translate(-81.88 -59.48)"
          />
          <path
            className="technologies__item__image-1"
            d="M256.32,340.89H222L293.59,59.48h34.79Z"
            transform="translate(-81.88 -59.48)"
          />
          <path
            className="technologies__item__image-1"
            d="M424.3,209.29l-78.53-32.77V121.9l127.23,64v47.34l-127.23,64V242.58Z"
            transform="translate(-81.88 -59.48)"
          />
        </>
      );
    case "css-icon":
      return (
        <>
          <path
            {...props}
            className="technologies__item__image-1"
            d="M9,128.36q13.17,0,20.41-5.64a18.74,18.74,0,0,0,7.25-15.66V58q0-23.86,16.16-37T98.42,7.89v30c-8.07,0-14.32,1.88-18.68,5.64s-6.59,9.11-6.59,16v52.18q0,22.56-15.92,32.33T9,153.8ZM52.82,267.8q-16.16-13.07-16.16-36.92V181.66A18.79,18.79,0,0,0,29.41,166Q22.15,160.35,9,160.35V134.91q32.31,0,48.23,10.16t15.92,33.57v50.45q0,10.5,6.59,16.13c4.36,3.76,10.61,5.64,18.68,5.64v30Q68.94,280.85,52.82,267.8Z"
            transform="translate(-9 -7.89)"
          />
          <path
            className="technologies__item__image-1"
            d="M227.82,145q-16-10.11-16-33.32V59.53c0-6.89-2.2-12.24-6.59-16s-10.61-5.64-18.68-5.64v-30q29.47,0,45.6,13.11t16.16,37v47.72a18.76,18.76,0,0,0,7.25,15.66Q262.85,127,276,127v28.06Q243.75,155.13,227.82,145ZM186.63,250.82c8.07,0,14.32-1.88,18.68-5.64s6.54-9.22,6.54-16.13V178.59q0-24,15.92-34.48T276,133.62v28q-13.17,0-20.41,5.64A18.79,18.79,0,0,0,248.34,183v47.83q0,23.87-16.16,36.92t-45.6,13Z"
            transform="translate(-9 -7.89)"
          />
        </>
      );
    case "js-icon":
      return (
        <>
          <path
            {...props}
            className="technologies__item__image-1"
            d="M35.76,155.42a29.16,29.16,0,0,1-10.84-9.92l11.46-9a13.55,13.55,0,0,0,5.56,5.71,17,17,0,0,0,8.43,2q8.18,0,12.66-5.56T67.52,123V48.56h14V123.1q0,11.35-3.64,19.39a26.64,26.64,0,0,1-10.63,12.25q-7,4.22-16.88,4.21A30.75,30.75,0,0,1,35.76,155.42Z"
            transform="translate(-24.92 -47.43)"
          />
          <path
            {...props}
            className="technologies__item__image-1"
            d="M129,159l-6.45-1.5a49.1,49.1,0,0,1-12-4.51A50.85,50.85,0,0,1,100,145.42l8.71-11.72a38.69,38.69,0,0,0,12.56,8.11,40,40,0,0,0,14.88,2.71q10.84,0,16.81-4.4t6-12.43v-.08c0-3.81-.91-6.82-2.71-9a16.08,16.08,0,0,0-7-5,71.71,71.71,0,0,0-11.08-3,1.33,1.33,0,0,0-.45-.08,1.27,1.27,0,0,1-.44-.07l-1-.23A99.63,99.63,0,0,1,120,106a23.15,23.15,0,0,1-10.74-8.65q-4.45-6.27-4.46-17.84v-.08q0-10.14,4.15-17.32A26.81,26.81,0,0,1,121,51.19q8-3.77,19.14-3.76a43.36,43.36,0,0,1,10.53,1.28,49.07,49.07,0,0,1,10.22,3.79,58,58,0,0,1,9.91,6.35l-8,12.17a45.68,45.68,0,0,0-11.36-6.87,30,30,0,0,0-11.35-2.29q-10.21,0-15.88,4.47T118.63,79v.08c0,3.75,1,6.71,2.91,8.86a17.34,17.34,0,0,0,7.28,4.77,100.67,100.67,0,0,0,12.1,3.2,4.06,4.06,0,0,0,.52.11c.16,0,.33.06.51.11s.48.1.76.15l.75.15a78.2,78.2,0,0,1,15.13,4.81,24.14,24.14,0,0,1,10.15,9q4.08,6.19,4.08,16.94v.15q0,10-4.32,17.1A27.5,27.5,0,0,1,156,155.23Q147.79,159,136.19,159Z"
            transform="translate(-24.92 -47.43)"
          />
        </>
      );
    case "react-icon":
      return (
        <>
          <path
            {...props}
            className="technologies__item__image-1"
            d="M206.56,114.09q-3.21-1.16-6.48-2.14c.36-1.54.69-3.09,1-4.64,4.91-25,1.7-45.16-9.26-51.79-10.51-6.36-27.69.27-45,16.13q-2.56,2.34-5,4.83-1.63-1.65-3.33-3.24C120.3,56.29,102.07,49.15,91.13,55.8c-10.5,6.38-13.61,25.32-9.19,49,.44,2.35.93,4.69,1.49,7Q79.56,113,76,114.26C54.65,122.06,41,134.26,41,147c0,13.1,14.62,26.24,36.83,34.21q2.7,1,5.45,1.78c-.6,2.5-1.12,5-1.59,7.55-4.21,23.29-.92,41.78,9.55,48.12,10.81,6.54,29-.19,46.63-16.4q2.1-1.92,4.2-4.07,2.66,2.69,5.45,5.22c17.11,15.46,34,21.7,44.48,15.35,10.8-6.57,14.31-26.43,9.75-50.6-.35-1.84-.75-3.73-1.21-5.65q1.92-.59,3.75-1.23c23.09-8,38.11-21,38.11-34.28,0-12.74-14.06-25-35.81-32.91Z"
            transform="translate(-41.03 -53.13)"
          />
          <g id="Warstwa_1" data-name="Warstwa 1">
            <path
              className="technologies__item__image-2"
              d="M201.6,172.7c-1.1.38-2.23.75-3.38,1.11A215.4,215.4,0,0,0,188,147a214.93,214.93,0,0,0,9.8-26.43c2.06.63,4.06,1.29,6,2,18.65,6.74,30,16.69,30,24.37,0,8.17-12.26,18.78-32.21,25.71Zm-8.27,17.21c2,10.68,2.3,20.34,1,27.9-1.2,6.78-3.6,11.31-6.58,13.12-6.36,3.86-19.92-1.16-34.56-14.38-1.68-1.51-3.37-3.13-5.08-4.84A210.09,210.09,0,0,0,165,189.2a192.11,192.11,0,0,0,27.28-4.41c.41,1.74.78,3.45,1.08,5.12Zm-83.64,40.35c-6.2,2.3-11.14,2.37-14.12.56-6.35-3.84-9-18.69-5.39-38.61.42-2.35.91-4.69,1.47-7a193.91,193.91,0,0,0,27.14,4.12,217,217,0,0,0,17.33,22.41q-1.86,1.9-3.84,3.71c-7.82,7.17-15.65,12.25-22.55,14.81Zm-29-57.61c-9.82-3.52-17.94-8.1-23.5-13.1-5-4.49-7.5-9-7.5-12.56,0-7.7,10.93-17.52,29.17-24.19,2.27-.84,4.6-1.6,6.92-2.29a223.81,223.81,0,0,0,9.81,26.69,228.48,228.48,0,0,0-9.93,27.08q-2.49-.75-5-1.63Zm9.74-69.58c-3.78-20.3-1.27-35.62,5.06-39.46,6.73-4.1,21.63,1.74,37.33,16.37,1,.94,2,1.92,3,2.93a214,214,0,0,0-17.16,22.29,201.43,201.43,0,0,0-26.85,4.4q-.78-3.24-1.39-6.51Zm86.86,22.53q-3-5.35-6.12-10.58a183.53,183.53,0,0,1,18.36,3.37c-1.73,5.84-3.9,12-6.44,18.21Q180.25,131,177.24,125.6ZM141.82,89.37a186.43,186.43,0,0,1,11.85,15q-11.89-.59-23.8,0C133.78,99,137.79,93.92,141.82,89.37Zm-35.7,36.28q-3,5.4-5.68,10.93c-2.51-6.24-4.65-12.37-6.4-18.29,5.75-1.35,11.87-2.45,18.26-3.29Q109.12,120.25,106.12,125.65Zm6.36,54a177.09,177.09,0,0,1-18.56-3.14c1.78-6,4-12.29,6.53-18.66q2.73,5.53,5.71,10.94t6.36,10.81ZM142,205.27c-4.08-4.62-8.15-9.73-12.12-15.22,3.85.16,7.79.24,11.78.24s8.16-.1,12.16-.28a188,188,0,0,1-11.78,15.23Zm41.1-47.77a187.27,187.27,0,0,1,6.76,18.59,174.58,174.58,0,0,1-18.76,3.36c2.12-3.54,4.19-7.12,6.18-10.75s4-7.42,5.84-11.2Zm-13.29,6.69q-4.59,8.34-9.71,16.41-9,.68-18.44.68t-18.23-.61q-5.22-8-9.85-16.38t-8.59-17q4-8.68,8.57-17h0q4.59-8.35,9.76-16.32c6-.47,12.13-.72,18.34-.72s12.39.25,18.37.73q5.13,8,9.71,16.26t8.68,17q-4,8.72-8.65,17.12ZM187.57,63.34c6.75,4.08,9.37,20.54,5.13,42.13-.26,1.41-.57,2.81-.89,4.21a196.72,196.72,0,0,0-26.93-4.47,212.62,212.62,0,0,0-17-22.3c1.5-1.53,3.05-3,4.63-4.46,14.87-13.58,28.76-19,35.09-15.11Z"
              transform="translate(-41.03 -53.13)"
            />
            <path
              className="technologies__item__image-1"
              d="M141.73,128c9.93,0,18,8.45,18,18.88s-8,18.87-18,18.87-18-8.45-18-18.87,8-18.88,18-18.88"
              transform="translate(-41.03 -53.13)"
            />
            <path
              className="technologies__item__image-1"
              d="M90.53,59.77"
              transform="translate(-41.03 -53.13)"
            />
          </g>
        </>
      );
    case "rwd-icon":
      return (
        <>
          <path
            {...props}
            className="technologies__item__image-1"
            d="M52.56,70H44.05L33.85,51.15a41.12,41.12,0,0,0-2.72-4.48,16.23,16.23,0,0,0-2.7-3,9.1,9.1,0,0,0-3-1.71,11.14,11.14,0,0,0-3.59-.54H16V70H8.86V2.76H27.05a23.84,23.84,0,0,1,7.38,1.1,16.06,16.06,0,0,1,5.86,3.36,15.35,15.35,0,0,1,3.89,5.6,20.12,20.12,0,0,1,1.4,7.85,20.6,20.6,0,0,1-.95,6.45,17.57,17.57,0,0,1-2.72,5.23,17.06,17.06,0,0,1-4.25,3.91,20.46,20.46,0,0,1-5.59,2.51V39a12.59,12.59,0,0,1,2.65,1.71,15.1,15.1,0,0,1,2.15,2.27,31.44,31.44,0,0,1,2,3q1,1.66,2.23,3.87ZM16,9.89V34.27h9.69a13.49,13.49,0,0,0,4.95-.89,11.28,11.28,0,0,0,3.94-2.56,11.68,11.68,0,0,0,2.59-4.08,14.94,14.94,0,0,0,.93-5.41c0-3.6-1.05-6.4-3.16-8.42s-5.17-3-9.16-3Z"
            transform="translate(-8.86 -2.76)"
          />
          <path
            {...props}
            className="technologies__item__image-1"
            d="M133.19,2.76,116,70H107.6L95.06,20.86a34,34,0,0,1-1-6.84h-.17a38.64,38.64,0,0,1-1.1,6.75L80.18,70H71.89L54,2.76h7.87l13,51.58a36.59,36.59,0,0,1,1,6.75h.21a42.74,42.74,0,0,1,1.32-6.75L90.89,2.76h6.85l12.92,52a42.42,42.42,0,0,1,1,6.29h.17A39.63,39.63,0,0,1,113,54.53L125.45,2.76Z"
            transform="translate(-8.86 -2.76)"
          />
          <path
            {...props}
            className="technologies__item__image-1"
            d="M142.24,70V2.76h16.83q32.22,0,32.22,32.78,0,15.56-8.95,25t-24,9.45Zm7.14-60.11v53h9.1q12,0,18.66-7.08t6.67-20.07q0-25.83-24.91-25.83Z"
            transform="translate(-8.86 -2.76)"
          />
        </>
      );
    case "sass-icon":
      return (
        <>
          <path
            {...props}
            className="technologies__item__image-1"
            d="M235.68,174.37a49.92,49.92,0,0,0-23.86,6.2c-2.45-5.39-4.9-10.2-5.33-13.75-.51-4.1-1.09-6.66-.51-11.56s3.17-12,3.1-12.45-.58-3.07-5.8-3.14-9.87,1.12-10.44,2.65a81.21,81.21,0,0,0-2.22,8.75c-.94,5.39-10.61,24.51-16.08,34.48-1.8-4-3.31-7.32-3.68-10.05-.5-4.1-1.08-6.67-.5-11.56s3.17-12,3.1-12.45-.58-3.07-5.8-3.15-9.87,1.13-10.44,2.65-1.08,5.18-2.23,8.76-13.91,35.43-17.29,43.71c-1.73,4.25-3.25,7.63-4.26,9.88a2.24,2.24,0,0,1-.22.4c-.93,2-1.44,3-1.44,3v.09c-.71,1.43-1.5,2.81-1.86,2.81s-.8-3.88.07-9.06c1.94-11.08,6.48-28.35,6.41-28.91,0-.32.86-3.3-3-4.9a4.34,4.34,0,0,0-5.4,1c-.36,0-.58.89-.58.89s4.18-19.39-8-19.39c-7.58,0-18.1,9.24-23.28,17.6C93,179,86,183.13,78.53,187.71c-2.8,1.77-5.8,3.54-8.5,5.17-.22-.23-.36-.48-.58-.73-14.7-17.5-41.86-29.88-40.71-53.41.43-8.6,3.09-31,52.19-58.41,40.44-22.26,72.65-16.07,78.19-2.41,8,19.53-17.22,55.67-59,61-15.93,2-24.29-4.9-26.45-7.46s-2.53-2.82-3.39-2.34c-1.37.81-.51,3.22,0,4.59,1.22,3.61,6.42,10,15.08,13.25,7.72,2.81,26.38,4.34,49-5.39,25.29-10.93,45.11-41.29,39.27-66.75C167.83,48.93,129.38,40.48,93,54.86,71.44,63.54,48,77,31.16,94.58c-20,20.88-23.2,39-21.91,46.66,4.64,27,38.06,44.59,51.38,57.61L58.84,200c-6.71,3.7-32.14,18.55-38.49,34.21-7.2,17.76,1.16,30.53,6.7,32.23,17.16,5.3,34.8-4.27,44.26-20s8.28-36.2,4-45.55c-.07-.08-.07-.25-.21-.33l5.26-3.45c3.38-2.25,6.77-4.33,9.66-6a76.1,76.1,0,0,0-3.39,19.52c-.72,10,3,23.14,7.85,28.28a8.12,8.12,0,0,0,6.35,2.33c5.68,0,8.21-5.17,11-11.5,3.48-7.63,6.55-16.46,6.55-16.46s-3.88,23.86,6.71,23.86c3.81,0,7.71-5.55,9.44-8.43v.08a5.07,5.07,0,0,1,.29-.57,9.73,9.73,0,0,1,.65-1.13V227c1.51-3,5-9.81,10.16-21.13,6.62-14.54,13-32.77,13-32.77a104.45,104.45,0,0,0,2.53,11.8c1.15,4.34,3.47,9.06,5.47,13.74-1.52,2.42-2.53,3.77-2.53,3.77l.08.08c-1.23,1.85-2.6,3.78-4.1,5.7-5.27,7-11.46,15-12.33,17.28-1,2.73-.79,4.75,1.16,6.35,1.36,1.2,3.88,1.37,6.41,1.2a27.91,27.91,0,0,0,9.65-2.48,31.51,31.51,0,0,0,8.28-4.9,21.74,21.74,0,0,0,8-18.25,40.63,40.63,0,0,0-3-12.93c.51-.72.94-1.53,1.37-2.25A255.15,255.15,0,0,0,194,164.4a104.1,104.1,0,0,0,2.51,11.81c.94,3.78,3,7.76,4.64,11.81-7.64,6.91-12.32,14.95-14,20.17-3,9.71-.65,14.13,3.81,15.18,2,.48,4.9-.57,7-1.6a32.44,32.44,0,0,0,8.87-5.07c5.12-4.26,10.08-10.13,9.81-18.11a36.85,36.85,0,0,0-2.24-10.68c6.48-3,14.84-4.65,25.52-3.29,22.85,3,27.38,18.88,26.51,25.63a16.88,16.88,0,0,1-7.27,11.49c-1.59,1.15-2.09,1.53-1.95,2.33.22,1.2.94,1.12,2.32.88,1.88-.4,12-5.38,12.47-17.76C272.94,191.4,259.46,174.22,235.68,174.37ZM59.27,240.7c-7.57,9.23-18.17,12.68-22.7,9.71-4.9-3.13-3-16.81,6.34-26.51A126.41,126.41,0,0,1,60.7,209l4.64-3.13.51-.32c.36-.25.79-.57,1.16-.8C70.51,218.72,67.27,231,59.27,240.7Zm55.27-41.86c-2.67,7.15-8.12,25.54-11.53,24.5-2.88-.89-4.64-14.78-.58-28.52,2.1-6.91,6.41-15.18,9-18.4,4.11-5.18,8.72-6.83,9.8-4.74,1.35,2.69-5.11,22.62-6.7,27.12Zm45.55,24.34c-1.09.64-2.17,1-2.67.72s.5-1.05.5-1.05,5.69-6.82,8-9.95c1.3-1.85,2.81-3.88,4.47-6.35v.72c0,8.08-7.14,13.62-10.3,15.87Zm35.15-9.06c-.79-.63-.65-2.8,2.1-9.47a35,35,0,0,1,7.86-11.24,17.61,17.61,0,0,1,.78,4.9c-.07,10.37-6.7,14.22-10.74,15.83Z"
            transform="translate(-9 -47.89)"
          />
        </>
      );
    case "bs-icon":
      return (
        <>
          <path
            {...props}
            className="technologies__item__image-1"
            d="M478.26,249.24h151.2q41.82,0,67.1,19.17c16.82,12.81,25.27,32.07,25.27,57.95q0,23.53-11.5,40.26c-7.67,11.16-18.65,19.87-32.94,26v.87q28.75,6.15,43.57,27.19c9.85,14.12,14.81,31.72,14.81,53a88.82,88.82,0,0,1-6.53,34.16,69.12,69.12,0,0,1-20.48,27.45c-9.33,7.67-21.18,13.77-35.73,18.3s-31.81,6.8-51.85,6.8H478.26Zm54.46,130.28h88.89c13.07,0,24-3.66,32.68-11.15s13.07-18.13,13.07-32.07c0-15.69-3.92-26.76-11.76-33.12s-19.17-9.59-34-9.59H532.72Zm0,136.38H629c16.56,0,29.45-4.27,38.52-12.89s13.77-20.74,13.77-36.43c0-15.43-4.53-27.19-13.77-35.56s-22-12.37-38.52-12.37h-96.3Z"
            transform="translate(-478.26 -249.24)"
          />
        </>
      );
    case "git-icon":
      return (
        <>
          <path
            {...props}
            className="technologies__item__image-1"
            d="M269,156.74,152.86,272.88a17.14,17.14,0,0,1-24.22,0l-24.12-24.12,30.61-30.59a20.34,20.34,0,0,0,25.81-25.93l29.49-29.49a20.37,20.37,0,1,0-12.21-11.5l-27.5,27.51V106.39a20.76,20.76,0,0,0,5.39-3.86,20.38,20.38,0,1,0-28.82,0A20.66,20.66,0,0,0,134,107v73a20.42,20.42,0,0,0-11.1,26.65l0,.09L92.74,236.92,13,157.28a17.12,17.12,0,0,1,0-24.22v0L129.15,16.9a17.17,17.17,0,0,1,24.24,0L269,132.51a17.13,17.13,0,0,1,0,24.23h0"
            transform="translate(-8 -11.89)"
          />
        </>
      );
    case "play-button":
      return (
        <>
          <polygon
            {...props}
            className="play-button-1"
            points="128.68 78.85 53.68 35.55 53.68 122.15 128.68 78.85"
          />
          <circle className="play-button-2" cx="78.85" cy="78.85" r="76.35" />
        </>
      );
    default:
      return <path />;
  }
};

const SVGIcon = ({
  name = "",
  style = {},
  fill = "#000",
  viewBox = "",
  width = "100%",
  className = "",
  height = "100%",
}) => (
  <svg
    width={width}
    style={style}
    height={height}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox={viewBox || getViewBox(name)}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    {getPath(name, { fill })}
  </svg>
);

export default SVGIcon;
