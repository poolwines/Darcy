import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { toast } from "react-hot-toast";
import { useShoppingCart } from "@/hooks/use-shopping-cart";
import Image from "next/image";
import { formatCurrency } from "@/lib/utils";
import { MinusSmIcon, PlusSmIcon } from "@heroicons/react/outline";
import Link from "next/link";

import { ShoppingCartIcon } from "@heroicons/react/solid";
import { ProductCard } from "@/components/index";

const Product = (props) => {
  const router = useRouter();
  const { cartCount, addItem } = useShoppingCart();
  const [qty, setQty] = useState(1);
  const [adding, setAdding] = useState(false);

  const toastId = useRef();
  const firstRun = useRef(true);

  const handleOnAddToCart = () => {
    setAdding(true);
    toastId.current = toast.loading(
      `Adding ${qty} item${qty > 1 ? "s" : ""}...`
    );
    addItem(props, qty);
  };

  const { totalPrice } = useShoppingCart();

  const [disabled, setDisabled] = useState(false);
  useEffect(() => {
    if (firstRun.current) {
      firstRun.current = false;
      return;
    }

    setAdding(false);
    toast.success(`${qty} ${props.name} added`, {
      id: toastId.current,
    });
    setQty(1);
  }, [cartCount]);

  const [products2, setProducts2] = useState();
  useEffect(async () => {
    const res1 = await fetch("https://poolwines.net/api/getProducts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    });
    const { products } = await res1.json();
    setProducts2(products);
  }, []);

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
        .htmlInsert{
          padding: 3vw 3vw;
          font-size: 1.1rem;
          font-family: "Custom"
          font-weight: '400'
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
                  <h2 className="title">{props.name}</h2>
                  <Link href="/Shop">
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
                  <div className="container lg:max-w-screen-lg mx-auto py-12 px-6">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-12">
                      {/* Product's image */}
                      <div className="relative w-72 h-72 sm:w-96 sm:h-96">
                        {props.image2 ? (
                          <Image
                            src={props.image2}
                            alt="Image"
                            layout="fill"
                            objectFit="contain"
                          />
                        ) : null}
                      </div>

                      {/* Product's details */}
                      <div className="flex-1 max-w-md border border-opacity-50 rounded-md shadow-lg p-6">
                        <h2
                          style={{
                            fontFamily: "Basis Grotesque, sans-serif",
                            fontWeight: "500",
                          }}
                          className="text-3xl font-semibold"
                        >
                          {props.name}
                        </h2>
                        <p>
                          <span
                            style={{
                              fontFamily: "system-ui",
                              fontWeight: "400",
                            }}
                            className="text-gray-500"
                          >
                            Availability:
                          </span>{" "}
                          <span
                            style={{
                              fontFamily: "system-ui",
                              fontWeight: "400",
                            }}
                            className="font-semibold"
                          >
                            {props.stock}
                          </span>
                        </p>

                        {/* Price */}
                        <div className="mt-8 border-t pt-4">
                          <p
                            style={{
                              fontFamily: "system-ui",
                              fontWeight: "400",
                            }}
                            className="text-gray-500"
                          >
                            Price:
                          </p>
                          <p
                            style={{
                              fontFamily: "system-ui",
                              fontWeight: "400",
                            }}
                            className="text-xl font-semibold"
                          >
                            {formatCurrency(props.price)}
                          </p>
                        </div>

                        <div className="mt-4 border-t pt-4">
                          {/* Quantity */}
                          <p
                            style={{
                              fontFamily: "system-ui",
                              fontWeight: "400",
                            }}
                            className="text-gray-500"
                          >
                            Quantity:
                          </p>
                          <div className="mt-1 flex items-center space-x-3">
                            <button
                              onClick={() => setQty((prev) => prev - 1)}
                              disabled={qty <= 1}
                              className="disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-current hover:bg-rose-100 hover:text-rose-500 rounded-md p-1"
                            >
                              <MinusSmIcon className="w-6 h-6 flex-shrink-0" />
                            </button>
                            <p className="font-semibold text-xl">{qty}</p>
                            <button
                              style={{
                                fontFamily: "system-ui",
                                fontWeight: "400",
                              }}
                              onClick={() => setQty((prev) => prev + 1)}
                              className="hover:bg-green-100 hover:text-green-500 rounded-md p-1"
                            >
                              <PlusSmIcon className="w-6 h-6 flex-shrink-0 " />
                            </button>
                          </div>

                          {/* Add to cart button */}
                          <button
                            type="button"
                            onClick={handleOnAddToCart}
                            disabled={adding || props.stock != "In stock"}
                            style={{
                              fontFamily: "system-ui",
                              fontWeight: "400",
                            }}
                            className="mt-8 border rounded py-2 px-6 bg-rose-500 hover:bg-rose-600 border-rose-500 hover:border-rose-600 focus:ring-4 focus:ring-opacity-50 focus:ring-rose-500 text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            Add to cart ({qty})
                          </button>
                        </div>
                      </div>
                    </div>
                    <div
                      className="htmlInsert"
                      dangerouslySetInnerHTML={{ __html: props.description }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </main>
          <nav className="main-menu" role="navigation">
            <div className="menu-item-container">
              <div className="menu-item menu-item--portfolio expanded">
                <div className="menu-item__sticky-header menu-item__sticky-header--closed">
                  <h2 className="margin-0">Shop</h2>
                  <Link href="/cart">
                    <a className="flex items-center space-x-1 text-gray-700 hover:text-gray-900">
                      <div className="relative">
                        <ShoppingCartIcon className="w-7 h-7 flex-shrink-0" />
                      </div>
                      <p className="text-lg">
                        {formatCurrency(totalPrice)}{" "}
                        <span className="text-sm text-gray-500">
                          ({cartCount})
                        </span>
                      </p>
                    </a>
                  </Link>
                  <Link href="/">
                    <a className="menu-button">
                      <h3>MENU</h3>
                    </a>
                  </Link>
                </div>
                <div className="projects-list-wrapper fade-in">
                  <ul className="projects-list fade-in">
                    {products2
                      ? products2.map((product) => (
                          <li
                            className="projects-list-item circle-link-container"
                            style={{
                              margin: "auto",
                              border: "#6B725F 1px solid",
                              padding: "2rem",
                              marginBottom: "1rem",
                            }}
                          >
                            <ProductCard
                              key={product.id}
                              disabled={disabled || props.stock != "In stock"}
                              onClickAdd={() => setDisabled(true)}
                              onAddEnded={() => setDisabled(false)}
                              {...product}
                            />
                          </li>
                        ))
                      : null}
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

// export async function getStaticPaths() {
//   const res1 = await fetch("https://poolwines.net/api/getProducts", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({}),
//   });
//   const { products } = await res1.json();

//   return {
//     // Existing posts are rendered to HTML at build time
//     paths: Object.keys(products)?.map((id) => ({
//       params: { id },
//     })),
//     // Enable statically generating additional pages
//     fallback: true,
//   };
// }

// export async function getStaticProps({ params }) {
//   const res1 = await fetch("https://poolwines.net/api/getProducts", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({}),
//   });
//   const { products } = await res1.json();
//   console.log("products2");
//   console.log(products);

//   try {
//     const props = products?.find((product) => product.id === params.id) ?? {};

//     return {
//       props,
//       // Next.js will attempt to re-generate the page:
//       // - When a request comes in
//       // - At most once every second
//       revalidate: 1, // In seconds
//     };
//   } catch (error) {
//     return { notFound: true };
//   }
// }

export default Product;

export async function getServerSideProps({params}) {
  const res1 = await fetch(`https://poolwines.net/api/getProducts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({}),
  });
  const {products} = await res1.json();
  const props = products?.find((product) => product.id === params.id) ?? {};

  return {
    props,
  };
}
