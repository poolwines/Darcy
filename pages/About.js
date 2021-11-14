import React from "react";
import Link from "next/link";
import Image from "next/image";
import darcy from "../public/poolabout-min.png";
function About() {
  return (
    <div id="mount-point">
      <style jsx>{`
        /*! CSS Used from: https://a-savage.com/bundle.a4a592b99872e4e1c588.css */
        .content-container {
          align-items: stretch;
          background: #faf5eb;
          box-sizing: border-box;
          display: inline-flex;
          flex-direction: column;
          height: 100vh;
          justify-content: space-between;
          overflow: hidden;
          transition: width 0.2s ease;
          width: 50vw;
          overflow-x: hidden;
        }
        @media (orientation: portrait) {
          .content-container {
            width: 100vw;
            height: 50vh;
            flex-basis: 0;
            flex-grow: 1;
          }
        }
        .content-container a {
          text-decoration: underline;
        }
        .content-container footer a {
          border: none;
        }
        .content-container__router {
          display: flex;
          height: 100%;
        }
        .about-image-container {
          display: flex;
          flex-direction: column;
          justify-content: stretch;
          flex: 1 1;
          height: 100vh;
        }
        .about-image,
        .about-image-container {
          box-sizing: border-box;
          max-width: 100%;
          overflow: hidden;
        }
        .about-image {
          flex: 2 1 auto;
          text-align: right;
          padding-top: 3.5vw;
          padding-right: 1.5vw;
          padding-left: 1.5vw;
        }
        @media (orientation: portrait) {
          .about-image {
            padding-top: 2vh;
            padding-right: 2vh;
          }
        }
        .about-image img {
          max-width: 66%;
          max-height: 100%;
        }
        .default-heading {
          box-sizing: border-box;
          padding: 1.5vw 1.5vw 0;
        }
        @media (orientation: portrait) {
          .default-heading {
            padding: 2vh;
          }
        }
        footer {
          box-sizing: border-box;
          display: flex;
          flex: 0 0 auto;
          font-family: Basis Grotesque, sans-serif;
          justify-content: stretch;
          align-items: center;
        }
        @media (orientation: portrait) {
          footer {
            align-items: flex-start;
            flex-direction: column;
          }
        }
        .footer__text {
          box-sizing: border-box;
          padding: 1.5vw;
          flex: 1 0 auto;
        }
        @media (orientation: portrait) {
          .footer__text {
            padding: 2vh;
          }
        }
        .footer__text h3 {
          box-sizing: border-box;
          display: inline-block;
          margin: 0 1em 0 0;
          cursor: pointer;
        }
        .footer__text a {
          text-decoration: none;
        }
        .main-menu {
          display: flex;
          flex-direction: column;
          justify-content: center;
          overflow: hidden;
          margin: 0;
          padding: 0;
          transition: width 0.2s ease;
        }
        @media (orientation: landscape) {
          .main-menu {
            margin-top: -33.5vh;
            height: auto;
            flex-grow: 1;
          }
        }
        @media (orientation: portrait) {
          .main-menu {
            margin-top: 0;
            height: calc(50vh - var(--vh-offset, 0px) / 2);
          }
        }
        .menu-item-container {
          display: flex;
          flex-direction: column;
          flex: 1 0 auto;
        }
        @media (orientation: landscape) {
          .menu-item-container {
            display: block;
            flex: 0 1;
          }
        }
        .menu-item {
          box-sizing: border-box;
          min-width: 100%;
        }
        @media (orientation: landscape) {
          .menu-item {
            height: calc(33.333vh - var(--vh-offset, 0px));
            max-height: calc(33.333vh - var(--vh-offset, 0px));
          }
        }
        @media (orientation: portrait) {
          .menu-item {
            flex-grow: 1;
          }
          .menu-item.expanded {
            position: absolute;
            top: 0;
            left: 0;
            height: calc(100vh - var(--vh-offset, 0px));
            z-index: 200;
          }
        }
        .menu-item--closed {
          cursor: pointer;
          padding: 1.5vw;
        }
        @media (orientation: portrait) {
          .menu-item--closed {
            padding: 2vh;
          }
        }
        .menu-item--portfolio {
          background: #00a560;
        }
        .menu-item--about {
          background: #17aae8;
        }
        .menu-item--about.expanded {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        @media (orientation: landscape) {
          .menu-item--about.expanded {
            max-width: 50vw;
            -webkit-animation: expand-about 0.2s ease forwards;
            animation: expand-about 0.2s ease forwards;
          }
        }
        .menu-item--journal {
          background: #539dcc;
        }
        .menu-item__sticky-header {
          background: inherit;
          box-sizing: border-box;
          padding: 1.5vw;
        }
        @media (orientation: portrait) {
          .menu-item__sticky-header {
            padding: 2vh;
          }
        }
        a.menu-button {
          position: absolute;
        }
        a.menu-button h3 {
          margin: 0;
        }
        @media (orientation: portrait) {
          a.menu-button {
            top: 2vh;
            right: 2vh;
          }
        }
        @media (orientation: landscape) {
          a.menu-button {
            top: 1.5vw;
            right: 1.5vw;
          }
        }
        .circle-link-container:hover .circle-link__link {
          margin-left: -1em;
          transform: translateX(1em);
        }
        .circle-link-container:hover .circle-link__link:before {
          content: url("data:image/svg+xml;charset=utf-8,%3Csvg width='15' height='15' viewBox='0 0 102 102' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='50' cy='50' r='50'/%3E%3C/svg%3E");
          margin-right: 0.4em;
          height: calc(18.93333px + 0.26667vw);
          width: calc(18.93333px + 0.26667vw);
        }
        .circle-link {
          box-sizing: border-box;
          color: #000;
          display: inline;
          font-family: Basis Grotesque, sans-serif;
          font-size: calc(18.93333px + 0.26667vw);
          font-style: normal;
          font-weight: 500;
          line-height: 1;
        }
        .circle-link__link {
          display: inline-block;
          transition: transform 0.2s ease;
        }
        .about-page {
          box-sizing: border-box;
          width: 100%;
          max-width: 100%;
          overflow: auto;
          flex: 0 1 100%;
          padding: 12vw 1.5vw 4.5vw;
        }
        @media (orientation: portrait) {
          .about-page {
            padding: 16vh 2vh 6vh;
          }
        }
        .about-page hr {
          margin-top: 3vw;
          margin-bottom: 1.5vw;
        }
        .about-page hr:first-child {
          margin-top: 0;
        }
        @media (orientation: portrait) {
          .about-page hr {
            margin-top: 4vh;
            margin-bottom: 2vh;
          }
        }
        .about-page p {
          padding-right: 1.5vw;
        }
        @media (orientation: portrait) {
          .about-page p {
            padding-right: 2vh;
            max-width: 30em;
          }
        }
        .about-page a {
          text-decoration: underline;
        }
        .app {
          display: flex;
          flex-wrap: nowrap;
          align-items: stretch;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        @media (orientation: landscape) {
          .app {
            flex-direction: row;
            justify-content: stretch;
          }
        }
        @media (orientation: portrait) {
          .app {
            flex-direction: column;
          }
        }
        body {
          margin: 0;
        }
        main {
          display: block;
        }
        h1 {
          font-size: 2em;
          margin: 0.67em 0;
        }
        hr {
          box-sizing: content-box;
          height: 0;
          overflow: visible;
        }
        a {
          background-color: transparent;
        }
        img {
          border-style: none;
        }
        h1 {
          font-family: Leitura, serif;
          font-style: normal;
          font-weight: 400;
          line-height: 1.25em;
          font-size: calc(27.73333px + 1.06667vw);
        }
        h1.indented {
          text-indent: 52px;
        }
        h2 {
          font-size: calc(16.4px + 0.4vw);
        }
        h2,
        h3 {
          font-family: Basis Grotesque, sans-serif;
          font-style: normal;
          font-weight: 500;
        }
        h3 {
          font-size: calc(14.2px + 0.2vw);
        }
        h3 {
          line-height: 1.2em;
        }
        p {
          font-weight: 400;
        }
        p {
          font-family: Leitura, serif;
          font-size: calc(18.93333px + 0.26667vw);
          line-height: 1.25;
          font-style: normal;
          margin: 0;
        }
        html * {
          box-sizing: border-box;
        }
        body {
          height: calc(100vh - var(--vh-offset, 0px));
          overflow: hidden;
          margin: 0;
        }
        body {
          background: #faf5eb;
        }
        .app {
          height: calc(100vh - var(--vh-offset, 0px));
        }
        a,
        a:visited {
          color: #000;
          text-decoration: none;
        }
        hr {
          border: 0.5px solid #000;
        }
        .margin-0 {
          margin: 0;
        }
        ::-webkit-scrollbar {
          width: 0;
          background: transparent;
        }
        /*! CSS Used keyframes */
        @-webkit-keyframes expand-about {
          0% {
            height: 33.33333vh;
            max-height: 33.33333vh;
          }
          to {
            height: 100vh;
            max-height: 100vh;
          }
        }
        @keyframes expand-about {
          0% {
            height: 33.33333vh;
            max-height: 33.33333vh;
          }
          to {
            height: 100vh;
            max-height: 100vh;
          }
        }
        /*! CSS Used fontfaces */
        @font-face {
          font-family: Basis Grotesque;
          src: url(https://a-savage.com/static/media/basisgrotesque-medium-webfont.e034a004.woff2)
              format("woff2"),
            url(https://a-savage.com/static/media/basisgrotesque-medium-webfont.15c73525.woff)
              format("woff");
        }
        @font-face {
          font-family: Leitura;
          src: url(https://a-savage.com/static/media/leitura-roman_1-webfont.f5771a76.woff2)
              format("woff2"),
            url(https://a-savage.com/static/media/leitura-roman_1-webfont.9181f8c7.woff)
              format("woff");
        }
      `}</style>
      <div className="app">
        <main className="content-container ">
          <div
            tabIndex={-1}
            className="content-container__router"
            style={{ outline: "none" }}
          >
            <div className="about-image-container">
              <h1 className="default-heading indented margin-0">
                POOL is a wine label based on Taungurung country in Kyneton.
              </h1>
              <div className="about-image">
                <Image
                  placeholder="blur"
                  height={360}
                  width={640}
                  src={darcy}
                />
              </div>
              <footer>
                <div className="footer__text">
                  <h3>
                    <a href="mailto:poolwines@gmail.com">poolwines@gmail.com</a>
                  </h3>
                  <h3>
                    <Link href="https://www.instagram.com/poolwines/">
                      <a>@poolwines</a>
                    </Link>
                  </h3>
                </div>
              </footer>
            </div>
          </div>
        </main>
        <nav className="main-menu" role="navigation">
          <div className="menu-item-container">
            <div className="menu-item menu-item--portfolio menu-item--closed circle-link-container">
              <div className="circle-link">
                <a className="circle-link__link" href="/about/portfolio">
                  Wine Archive
                </a>
              </div>
            </div>
          </div>
          <div className="menu-item-container">
            <div className="menu-item menu-item--about expanded">
              <div className="menu-item__sticky-header menu-item__sticky-header--closed">
                <h2 className="margin-0">About</h2>
                <Link href="/">
                  <a className="menu-button">
                    <h3>MENU</h3>
                  </a>
                </Link>
              </div>
              <div className="about-page">
                <hr />
                <h2>Contact</h2>
                <p>
                  <a href="mailto:poolwines@gmail.com">poolwines@gmail.com</a>
                  <br />
                  <Link href="https://www.instagram.com/poolwines/">
                    <a>@poolwines</a>
                  </Link>
                </p>
                <hr />
                <h2>Bio</h2>
                <p>
                  POOL is Tim, Al, Ed & Darcy. It is also everyone that helps us
                  with advice, helps us pick fruit, helps us bottle and drinks
                  our wine. We are based on Taungurung Country, in Kyneton.
                  <br />
                  <br />
                  POOL had its first vintage in 2019 using half a tonne of local
                  Shiraz. We learnt a lot. As we continue to learn we continue
                  to expand and grow our repertoire with each season. We work
                  with growers and vineyards local to the region to source
                  grapes that have been grown in a way that is responsible to
                  the land – reducing the use of sprays and interference and
                  then hand-picking with our friends whenever we can.
                  <br />
                  <br />
                  In the winery we use no additives of any kind, we don’t fine
                  or filter and prefer to use people power and low intervention
                  methods wherever possible.
                  <br />
                  <br />
                  We respectfully acknowledge the traditional owners of the land
                  on which our wine is grown, made and enjoyed.
                </p>
                <hr />
                <h2>Legal</h2>
                <p>
                  POOL Wines Pty. Ltd.
                  <br />
                  <br />
                  <i>
                    It is against the law to sell or supply alcohol to, or to
                    obtain alcohol on behalf of, a person under the age of 18
                    years
                  </i>
                  <br />
                  <br />
                  <i>Liquor License Vic 33777973</i>
                </p>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default About;
