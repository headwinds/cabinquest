import Document, { Head, Main, NextScript } from "next/document";
import { extractCritical } from "emotion-server";

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const page = renderPage();
    const styles = extractCritical(page.html);
    return { ...page, ...styles };
  }

  constructor(props) {
    super(props);
    const { __NEXT_DATA__, ids } = props;
    if (ids) {
      __NEXT_DATA__.ids = ids;
    }
  }

  render() {
    return (
      <html>
        <Head>
          <title>CabinQuest</title>
          <style dangerouslySetInnerHTML={{ __html: this.props.css }} />
          <meta
            name="google-site-verification"
            content="vJNOW0Jb1lVAJIndWi8VsGuDUJ27mxpaszJQ6K8LvUs"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
