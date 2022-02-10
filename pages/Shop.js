import React from "react";
import Link from "next/link";
import { useShoppingCart } from "@/hooks/use-shopping-cart";
import { useState } from "react";
import Projects from "../components/projects2";
function index({ res2 }) {
  const { totalPrice, cartCount } = useShoppingCart();

  const [disabled, setDisabled] = useState(false);

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
        .hover-image.Center {
          justify-content: center;
        }
        .hover-image.Middle {
          align-items: center;
        }
        .hover-image {
          display: flex;
          flex: 0 1 100%;
          box-sizing: border-box;
          overflow: hidden;
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
            margin-top: -66.7vh;
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
          background: #e9b000;
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
        .categories-filter-row,
        ul.projects-list li a {
          box-sizing: border-box;
          font-family: Leitura, serif;
          font-size: calc(18.93333px + 0.26667vw);
          line-height: 1.25;
        }
        .categories-filter-row {
          font-style: normal;
          font-weight: 400;
          margin: 0;
          font-size: calc(15.46667px + 0.13333vw);
          font-family: Basis Grotesque, sans-serif;
          line-height: 1;
          display: flex;
          align-items: center;
          flex: 0 1 auto;
          justify-content: flex-start;
          width: 100%;
          min-height: calc(46.40001px + 0.4vw);
          padding-left: 1.5vw;
          background: #fdddc0;
        }
        @media (orientation: portrait) {
          .categories-filter-row {
            padding-left: 2vh;
          }
        }
        .category-selector {
          white-space: nowrap;
          cursor: pointer;
          margin-right: 1.5vw;
        }
        @media (orientation: portrait) {
          .category-selector {
            line-height: 2;
            margin-right: 2vh;
          }
        }
        .category-selector input[type="checkbox"] {
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
          line-height: 0;
          height: 0;
          width: 0;
        }
        .category-selector
          input[type="checkbox"]:checked
          + label
          .circle-check {
          background: #000;
          line-height: 0;
        }
        .category-selector label {
          line-height: 1;
          display: inline-flex;
          align-items: center;
          cursor: pointer;
        }
        .category-selector .circle-check {
          box-sizing: border-box;
          display: inline-block;
          margin-right: 0.4em;
          border: 1px solid #000;
          border-radius: 50%;
          height: 1em;
          width: 1em;
          line-height: 1;
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
        input {
          font-family: inherit;
          font-size: 100%;
          line-height: 1.15;
          margin: 0;
        }
        input {
          overflow: visible;
        }
        [type="checkbox"] {
          box-sizing: border-box;
          padding: 0;
        }
        .fade-in {
          -webkit-animation: fade-in 1s;
          animation: fade-in 1s;
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
        /*! CSS Used keyframes */
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
              <footer>
                <div className="footer__text">
                  <h3>
                    <a href="mailto:poolwines@gmail.com">
                      Email : poolwines@gmail.com
                    </a>
                  </h3>
                  <h3>
                    <Link href="https://www.instagram.com/poolwines/">
                      <a>Insta - @poolwines</a>
                    </Link>
                  </h3>
                </div>
              </footer>
            </div>
          </div>
        </main>
        <Projects />
      </div>
    </div>
  );
}

export default index;

export async function getServerSideProps() {
  const res1 = await fetch(`https://www.poolwines.net/api/getProducts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({}),
  });
  const res2 = await res1.json();

  return {
    props: { res2 },
  };
}
