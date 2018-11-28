import React, { Component } from "react";
import { compose } from "recompose";
import withRedux from "next-redux-wrapper";
import { bindActionCreators } from "redux";
import initializeStore from "../store/store";
import Timeline from "../timeline/Timeline";
import Footer from "../footer/Footer";
import PostDay from "../day/PostDay";
import MyDay from "../day/MyDay";
import Link from "next/link";
import Promise from "bluebird";
import * as actionsHome from "../../actions/home_actions";
import * as _ from "lodash";
import Theme from "../theme/Theme";
import CabinquestFeed from "..//feed/CabinquestFeed";
import Signin from "../components/signin/Signin";

class Home extends Component {
  static getInitialProps({ store, isServer, pathname, query }) {
    console.log("home getInitialProps");

    /*

         const store = arguments[0].store;

        // lets create an action using creator
        const action = actionsHome.fetchStarwars();

        // now the action has to be dispatched
        store.dispatch(action);

        console.log("home getInitialProps")

        return action.payload.then( response => {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            return response.json();
        }).then(function(json) {
                //console.log("all good" , items);
            return {custom: 'custom', answer: "payload", items: json.items};
        });

        */
  }

  componentDidMount() {
    console.log("home mounted:", this.props);

    // this.props.fetchStarwars(); // promise rejection error
  }

  componentDidUpdate() {}

  render() {
    const getItems = () => {
      if (this.props.items && this.props.items.length > 0) {
        return _.map(this.props.items, item => {
          return (
            <div className="item" key={item.id}>
              <img src={item.images.low_resolution.url} />
            </div>
          );
        });
      } else return null;
    };

    const getStarwarsItems = () => {
      if (this.props.home.items !== null && this.props.home.items.length > 0) {
        return _.map(this.props.home.items, item => {
          return (
            <div className="item" key={item.id}>
              <img src={item.images.low_resolution.url} />
            </div>
          );
        });
      } else return null;
    };

    const getHeader = () => {
      if (this.props.home.header !== null) {
        const headers = this.props.home.header[0].headers;
        const items = [];

        _.forIn(headers, (val, key) => {
          items.push(
            <p key={key} style={{ padding: 0, margin: 0 }}>
              {key} : {val}
            </p>
          );
        });

        return items;
      } else return null;
    };

    return (
      <div>
        <Theme />
        <h2>PORTHOLE: the API for CabinQuest</h2>
        <div style={{ display: "none" }}>
          <Signin />
        </div>
        <div>
          <h4>Chrome Extension</h4>
          <a
            className="link"
            target="_blank"
            href="https://chrome.google.com/webstore/detail/porthole/dilfffpckfhcpgidnmgaeoidgekcjlln?hl=en"
          >
            get it
          </a>
        </div>
        <div style={{ display: "none" }}>
          <h4>Github</h4>
          <a className="link" target="_blank" href="https://github.com/headwinds/porthole">
            source
          </a>
        </div>
        <h2>CabinQuest Test</h2>
        <CabinquestFeed />
        {/* }
        <h2>Star Wars Test</h2>
        {getStarwarsItems()}
        */}
        <h2>Python Service Test</h2>
        {getHeader()}
        <div>
          <MyDay />
          <PostDay />
        </div>
        <Timeline />
        <Footer />
        <div>
          {/* <Link href='https://medium.com/disdj/next-js-redux-in-an-easy-way-fae083aa037c' target='_blank'>
                        <a>Next.js + Redux in an easy way</a>
                    </Link>*/}
        </div>
        <style jsx>{`
          .item {
            display: block;
            padding: 10px;
          }
        `}</style>
      </div>
    );
  }
}

// Home = withRedux(initializeStore, (state) => ({foo: state.foo}))(Home);
// export default Home;
const matchStateToProps = state => ({ home: state.home });
const mapDispatchToProps = dispatch => bindActionCreators(actionsHome, dispatch);

export default compose(withRedux(initializeStore, matchStateToProps, mapDispatchToProps))(Home);
