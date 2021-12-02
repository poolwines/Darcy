import React from "react";
import Image from "next/image";
import Link from "next/link";
import DPSHIRAZ_SQUARE from "../public/21BLUSH_SQUARE-min.png";
import DP_01 from "../public/21BLUSH_07-min.png";
import DP_02 from "../public/21BLUSH_09-min.png";
import DP_03 from "../public/21BLUSH_08-min.png";
import DP_04 from "../public/21BLUSH_01-min.png";
import DP_05 from "../public/21BLUSH_02-min.png";
import DP_06 from "../public/21BLUSH_03-min.png";
import DP_07 from "../public/21BLUSH_04-min.png";
import DP_08 from "../public/21BLUSH_05-min.png";
import DP_09 from "../public/21BLUSH_06-min.png";
import Nav from "../components/projects3";
function Project() {
  return (
    <div>
      <style jsx>{`
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
        .youtube-container {
          margin-top: 2rem;
          margin-left: 10%;
          justify-content: center;
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
        @media (orientation: landscape) {
          .content-container--expanded {
            width: 70vw;
            padding-top: 0;
          }
        }
        @media (orientation: portrait) {
          .content-container--expanded {
            width: 100vw;
            height: 100vh;
            padding-top: 0;
          }
        }
        .content-container__router {
          display: flex;
          height: 100%;
        }
        a.close-button {
          border: 0;
          position: absolute;
        }
        a.close-button,
        a.close-button:visited {
          text-decoration: none;
        }
        a.close-button h3 {
          margin: 0;
        }
        @media (orientation: portrait) {
          a.close-button {
            top: 2vh;
            right: 2vh;
          }
        }
        @media (orientation: landscape) {
          a.close-button {
            top: 1.5vw;
            right: 31.5vw;
          }
        }
        .content-heading {
          box-sizing: border-box;
          width: 100%;
          background: #faf5eb;
          padding: 1.5vw;
        }
        @media (orientation: portrait) {
          .content-heading {
            padding: 2vh;
          }
        }
        .content-heading .title {
          margin: 0;
          font-family: Leitura, serif;
          line-height: 1;
        }
        .responsive-image {
          margin: 0 0 2rem;
        }
        .responsive-image Image {
          width: 100%;
          max-width: 100%;
          height: auto;
        }
        .description {
          display: flex;
          flex-direction: row;
          background: #e5e5e5;
          width: 100%;
          max-width: 100%;
          padding: 2rem 1.5vw 6vw;
          justify-content: space-between;
        }
        @media (orientation: portrait) {
          .description {
            flex-direction: column;
            padding: 2rem 2vh 8vh;
          }
        }
        .description__heading {
          margin-top: 0;
        }
        @media (orientation: landscape) {
          .description__body {
            width: 33.3333vw;
          }
        }
        .project-container {
          max-width: 100%;
          box-sizing: border-box;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }
        .project {
          -webkit-animation: fadeIn 1s ease-out;
          animation: fadeIn 1s ease-out;
          -webkit-animation-fill-mode: both;
          animation-fill-mode: both;
          -webkit-animation-delay: 0.2s;
          animation-delay: 0.2s;
          overflow: auto;
        }
        .project.container-fluid {
          padding-top: 4vw;
        }
        @media (orientation: portrait) {
          .project.container-fluid {
            padding-top: 8vh;
          }
        }
        .project .row {
          padding-left: 1.5vw;
          padding-right: 1.5vw;
        }
        @media (orientation: portrait) {
          .project .row {
            padding-left: 2vh;
            padding-right: 2vh;
          }
        }
        @media (orientation: portrait) {
          .content-container--expanded + .main-menu {
            display: none;
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
            margin-top: -66.7vh;
            height: auto;
            flex-grow: 1;
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
          background: #f5435f;
        }
        .menu-item--portfolio.expanded {
          display: flex;
          flex-direction: column;
        }
        @media (orientation: landscape) {
          .menu-item--portfolio.expanded {
            -webkit-animation: expand-portfolio 0.2s ease forwards;
            animation: expand-portfolio 0.2s ease forwards;
          }
        }
        .menu-item--about {
          background: #d7771a;
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
        .projects-list-wrapper {
          box-sizing: border-box;
          display: flex;
          flex: 1 1;
          flex-direction: column;
          justify-content: space-between;
          overflow-y: scroll;
          overflow-x: hidden;
          line-height: 0;
          font-size: 0;
        }
        ul.projects-list {
          box-sizing: border-box;
          font-size: calc(18.93333px + 0.26667vw);
          list-style-type: none;
          margin: 0;
          padding: 1.5vw 1.5vw 0;
          flex: 1 1 auto;
        }
        @media (orientation: portrait) {
          ul.projects-list {
            padding: 2vh;
          }
        }
        ul.projects-list li:first-child {
          margin-top: 4.5vw;
        }
        @media (orientation: portrait) {
          ul.projects-list li:first-child {
            margin-top: 6vh;
          }
        }
        ul.projects-list li {
          box-sizing: border-box;
        }
        @media (orientation: landscape) {
          ul.projects-list li {
            max-width: calc(30vw - 60px);
          }
          ul.projects-list li:hover {
            max-width: calc(30vw - 90px);
          }
        }
        ul.projects-list li a {
          color: #000;
          padding-bottom: 1.1em;
        }
        ul.projects-list li a {
          box-sizing: border-box;
          font-family: Leitura, serif;
          font-size: calc(18.93333px + 0.26667vw);
          line-height: 1.25;
        }
        .categories-filter-column {
          font-family: Leitura, serif;
          font-size: calc(18.93333px + 0.26667vw);
          line-height: 1.25;
          font-style: normal;
          font-weight: 400;
          margin: 0;
          font-size: calc(15.46667px + 0.13333vw);
          background: #fdddc0;
          font-family: Basis Grotesque, sans-serif;
          display: flex;
          align-items: flex-start;
          flex: 0 1 auto;
          flex-direction: column;
          justify-content: flex-start;
          box-sizing: border-box;
          width: 100%;
          min-height: 3vw;
          padding-left: 0 1.5vw;
        }
        @media (orientation: portrait) {
          .categories-filter-column {
            min-height: 4vh;
            padding-left: 2vh;
          }
        }
        .categories-filter-animated-container {
          z-index: -999;
          flex: 1 1 auto;
          box-sizing: border-box;
          height: 0;
          margin: 0;
          transition: height 0.2s linear;
          opacity: 0;
        }
        .categories-toggle-button {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          margin-bottom: 1em;
          padding: 1em 1.5vw 0;
          cursor: pointer;
          text-align: left;
          border: unset;
          outline: none;
          background-color: #fdddc0;
        }
        @media (orientation: portrait) {
          .categories-toggle-button {
            padding: 1em 2vh 0 0;
          }
        }
        .categories-toggle-button__caret {
          transform: translateY(-0.25em);
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
        .row {
          box-sizing: border-box;
          display: flex;
          flex: 0 1 auto;
          flex-direction: row;
          flex-wrap: wrap;
          margin-top: 2rem;
        }
        .col-xs-12 {
          box-sizing: border-box;
          flex: 0 0 auto;
        }
        .col-xs-12 {
          flex-basis: 100%;
          max-width: 100%;
        }
        @media only screen and (min-width: 75em) {
          .col-lg-6,
          .col-lg-offset-2 {
            box-sizing: border-box;
            flex: 0 0 auto;
          }
          .col-lg-6 {
            flex-basis: 50%;
            max-width: 50%;
          }
          .col-lg-offset-2 {
            margin-left: 16.66666667%;
          }
        }
        html {
          line-height: 1.15;
          -webkit-text-size-adjust: 100%;
        }
        body {
          margin: 0;
        }
        main {
          display: block;
        }
        a {
          background-color: transparent;
        }
        Image {
          border-style: none;
        }
        button {
          font-family: inherit;
          font-size: 100%;
          line-height: 1.15;
          margin: 0;
        }
        button {
          overflow: visible;
        }
        button {
          text-transform: none;
        }
        button {
          -webkit-appearance: button;
        }
        button::-moz-focus-inner {
          border-style: none;
          padding: 0;
        }
        button:-moz-focusring {
          outline: 1px dotted ButtonText;
        }
        .fade-in {
          -webkit-animation: fade-in 1s;
          animation: fade-in 1s;
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
        html {
          font-family: Leitura, serif;
        }
        html {
          background: #faf5eb;
        }
        html,
        html * {
          box-sizing: border-box;
        }
        body,
        html {
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
        ul {
          list-style-type: none;
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
        /*! CSS Used keyframes */
        @-webkit-keyframes fadeIn {
          0% {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @-webkit-keyframes expand-portfolio {
          0% {
            margin-top: 0;
            height: 33.33333vh;
            max-height: 33.33333vh;
          }
          to {
            margin-top: 66.66667vh;
            height: 100vh;
            max-height: 100vh;
          }
        }
        @keyframes expand-portfolio {
          0% {
            margin-top: 0;
            height: 33.33333vh;
            max-height: 33.33333vh;
          }
          to {
            margin-top: 66.66667vh;
            height: 100vh;
            max-height: 100vh;
          }
        }
        @-webkit-keyframes fade-in {
          0% {
            opacity: 0;
          }
          25% {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes fade-in {
          0% {
            opacity: 0;
          }
          25% {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        /*! CSS Used fontfaces */
        @font-face {
          font-family: Leitura;
          src: url(https://a-savage.com/static/media/leitura-roman_1-webfont.f5771a76.woff2)
              format("woff2"),
            url(https://a-savage.com/static/media/leitura-roman_1-webfont.9181f8c7.woff)
              format("woff");
        }
        @font-face {
          font-family: Basis Grotesque;
          src: url(https://a-savage.com/static/media/basisgrotesque-medium-webfont.e034a004.woff2)
              format("woff2"),
            url(https://a-savage.com/static/media/basisgrotesque-medium-webfont.15c73525.woff)
              format("woff");
        }
      `}</style>

      <div id="mount-point">
        <div className="app">
          <main className="content-container content-container--expanded">
            <div
              tabIndex={-1}
              className="content-container__router"
              style={{ outline: "none" }}
            >
              <div className="project-container">
                <div className="content-heading">
                  <h2 className="title">2021 BLUSH</h2>
                  <Link href="/WineArchive">
                    <a className="close-button fade-in">
                      <h3>CLOSE</h3>
                    </a>
                  </Link>
                </div>
                <div className="project container-fluid">
                  <div
                    style={{ marginBottom: "1rem" }}
                    className="content-heading"
                  ></div>

                  <div className="row">
                    <div className="col-xs-12 col-lg-6 col-lg-offset-2">
                      <figure className="responsive-image">
                        <Image
                          placeholder="blur"
                          layout="responsive"
                          src={DPSHIRAZ_SQUARE}
                          width={100}
                          height={100}
                        />
                      </figure>
                    </div>
                  </div>

                  <div className="content-heading">
                    <p style={{ fontSize: "18px", fontFamily: 'system-ui' }}>
                      • 35% Shiraz, 28% Merlot, 11% Cabernet Sauvignon, 24%
                      Cabernet Franc grown & handpicked in Redesdale, VIC <br />
                      • Picked 8 March 2021
                      <br />
                      • Pressed 8 March 2021
                      <br />
                      • 5 months élevage in Inox
                      <br />
                      • Wild ferment
                      <br />
                      • Unfined/unfiltered
                      <br />
                      • No sulphur added ever
                      <br />
                      • 12% ABV
                      <br />• Bottled 1 August 2021 <br />• 910 bottles
                    </p>
                  </div>

                  <div className="row">
                    <div className="col-xs-12 col-lg-6 col-lg-offset-2">
                      <figure className="responsive-image">
                        <Image
                          placeholder="blur"
                          layout="responsive"
                          src={DP_01}
                          width={128}
                          height={160}
                        />
                      </figure>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-xs-12 col-lg-6 col-lg-offset-2">
                      <figure className="responsive-image">
                        <Image
                          placeholder="blur"
                          layout="responsive"
                          src={DP_02}
                          width={128}
                          height={160}
                        />
                      </figure>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-xs-12 col-lg-6 col-lg-offset-2">
                      <figure className="responsive-image">
                        <Image
                          placeholder="blur"
                          layout="responsive"
                          src={DP_03}
                          width={128}
                          height={160}
                        />
                      </figure>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-xs-12 col-lg-6 col-lg-offset-2">
                      <figure className="responsive-image">
                        <Image
                          placeholder="blur"
                          layout="responsive"
                          src={DP_04}
                          width={128}
                          height={160}
                        />
                      </figure>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-xs-12 col-lg-6 col-lg-offset-2">
                      <figure className="responsive-image">
                        <Image
                          placeholder="blur"
                          layout="responsive"
                          src={DP_05}
                          width={128}
                          height={160}
                        />
                      </figure>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-xs-12 col-lg-6 col-lg-offset-2">
                      <figure className="responsive-image">
                        <Image
                          placeholder="blur"
                          layout="responsive"
                          src={DP_06}
                          width={128}
                          height={160}
                        />
                      </figure>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-xs-12 col-lg-6 col-lg-offset-2">
                      <figure className="responsive-image">
                        <Image
                          placeholder="blur"
                          layout="responsive"
                          src={DP_07}
                          width={128}
                          height={160}
                        />
                      </figure>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-xs-12 col-lg-6 col-lg-offset-2">
                      <figure className="responsive-image">
                        <Image
                          placeholder="blur"
                          layout="responsive"
                          src={DP_08}
                          width={128}
                          height={160}
                        />
                      </figure>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-xs-12 col-lg-6 col-lg-offset-2">
                      <figure className="responsive-image">
                        <Image
                          placeholder="blur"
                          layout="responsive"
                          src={DP_09}
                          width={128}
                          height={160}
                        />
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
          <Nav />
        </div>
      </div>
    </div>
  );
}

export default Project;
