import Head from "next/head";
import css from "styled-jsx/css";

export default () => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
    </Head>
    <style jsx global>{css`
      body {
        background: #eee;
        font: 14px menlo;
        color: #666;
      }

      a.link {
        color: hotpink;
      }

      a.link:visited {
        color: hotpink;
      }

      .item {
        display: block;
        padding: 10px;
      }
    `}</style>
  </div>
);
