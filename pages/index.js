import React from "react";
import Image from "next/image";
import Link from "next/link";

var randomImages = [
  require("../public/home_01-min.png"),
  require("../public/home_02-min.png"),
  require("../public/home_03-min.png"),
  require("../public/home_04-min.png"),
  require("../public/home_05-min.png"),
  require("../public/home_06-min.png"),
  require("../public/home_07-min.png"),
  require("../public/home_08-min.png"),
];

function home() {
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
          padding: 0.2vw 1.5vw 0.1vw 1.5vw;
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
        .homepage-image-container {
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          font-size: 0;
          justify-content: center;
          flex: 0 999 auto;
        }
        @media (orientation: portrait) {
          .homepage-image-container {
            display: none;
          }
        }
        .homepage-image-grid-container {
          box-sizing: border-box;
          max-height: 100%;
          overflow: hidden;
        }
        @media (orientation: portrait) {
          .homepage-image-grid-container {
            max-height: 25vh;
            padding: 0 2vh;
          }
        }
        @media (orientation: landscape) {
          .homepage-image-grid-container {
            padding: 0 1.5vw;
          }
        }
        .homepage-image-row {
          max-height: 100%;
        }
        .homepage-image {
          -o-object-fit: contain;
          object-fit: contain;
          width: 100%;
          max-height: 66vh;
        }
        @media (orientation: portrait) {
          .homepage-image {
            max-height: 25vh;
          }
        }
        .default-view {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        @media (orientation: portrait) {
          .default-view {
            flex: 1 1 50vh;
          }
        }
        @media (orientation: landscape) {
          .default-view {
            flex: 1 1;
          }
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
            flex-grow: 1;
          }
        }
        @media (orientation: portrait) {
          .main-menu {
            margin-top: 0;
            height: auto;
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
          background: #e9b000;
        }
        .menu-item--about {
          background: #f5435f;
        }
        .menu-item--journal {
          background: #2ab8f5;
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
        .container-fluid {
          margin-right: auto;
          margin-left: auto;
        }
        .col-xs-8,
        .col-xs-offset-2 {
          box-sizing: border-box;
          flex: 0 0 auto;
        }
        .col-xs-8 {
          flex-basis: 66.66666667%;
          max-width: 66.66666667%;
        }
        .col-xs-offset-2 {
          margin-left: 25%;
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
        .margin-0 {
          margin: 0;
        }
        ::-webkit-scrollbar {
          width: 0;
          background: transparent;
        }
        .container-fluid {
          padding: 0;
          margin: 0;
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
            <div className="default-view">
              <h1 className="default-heading indented margin-0">
                POOL is a wine label based on Taungurung country in Kyneton.
              </h1>
              <div className="homepage-image-container">
                <div className="homepage-image-grid-container container-fluid">
                  <div className="homepage-image-row col-xs-8 col-xs-offset-2">
                    <Image
                      placeholder="blur"
                      height={520}
                      width={380}
                      src={
                        randomImages[
                          Math.floor(Math.random() * randomImages.length)
                        ]
                      }
                    />
                  </div>
                </div>
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
          <a href="/Shop">
            <div className="menu-item-container">
              <div className="menu-item menu-item--portfolio menu-item--closed circle-link-container">
                <div className="circle-link circle-link__link">Shop</div>
              </div>
            </div>{" "}
          </a>
          <a href="/WineArchive">
            <div className="menu-item-container">
              <div className="menu-item menu-item--about menu-item--closed circle-link-container">
                <div className="circle-link circle-link__link">
                  Wine Archive
                </div>
              </div>
            </div>
          </a>
          <a href="/About">
            <div className="menu-item-container">
              <div className="menu-item menu-item--journal menu-item--closed circle-link-container">
                <div className="circle-link circle-link__link">About</div>
              </div>
            </div>{" "}
          </a>
        </nav>
      </div>
    </div>
  );
}

export default home;
