import React, { Component } from 'react';
import { compose } from 'recompose';
import withRedux from 'next-redux-wrapper';
import { bindActionCreators } from 'redux';
import initializeStore from '../store/store';
import Main from '../apollo/layout';
import Header from '../components/Header';
import Submit from '../components/Submit';
import SubmitTree from '../components/Submit/SubmitTree';
import { postCabinQuestTree } from '../actions/feed_cabinquest_park_actions';
import * as actionsHome from '../actions/home_actions';
// import Home from "../components/home/Home";
import PostList from '../components/PostList';
import { withData } from 'next-apollo';
import { HttpLink } from 'apollo-link-http';
import Timeline from '../components/timeline/Timeline';
import Footer from '../components/footer/Footer';
import PostDay from '../components/day/PostDay';
import MyDay from '../components/day/MyDay';
import Link from 'next/link';
import axios from 'axios';
import Promise from 'bluebird';
import * as _ from 'lodash';
// import Theme from "../components/theme/Theme";
import CabinquestFeed from '../components/feed/CabinquestFeed';
import Signin from '../components/signin/Signin';
// import css from "styled-jsx/css";

const config = {
    link: new HttpLink({
        uri: 'https://api.graph.cool/simple/v1/cixmkt2ul01q00122mksg82pn', // Server URL (must be absolute)
        opts: {
            credentials: 'same-origin' // Additional fetch() options like `credentials` or `headers`
        }
    })
};

class Template extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {}

    componentWillReceiveProps() {}

    render() {
        return (
            <Main>
                <div>bellwoods here</div>
            </Main>
        );
    }
}

const matchStateToProps = state => ({
    home: state.home,
    auth: state.auth,
    feed: state.feed_cabinquest
});
const mapDispatchToProps = dispatch =>
    bindActionCreators({ ...actionsHome, postCabinQuestTree }, dispatch);

const TemplateHOC = compose(
    withRedux(initializeStore, matchStateToProps, mapDispatchToProps),
    withData(config)
)(Template);

export default TemplateHOC;
