import React, { Component } from 'react';
import { compose } from 'recompose';
import withRedux from 'next-redux-wrapper';
import { bindActionCreators } from 'redux';
import initializeStore from '../store/store';
import Main from '../apollo/layout';
import Router from 'next/router';
import * as actionsHome from '../actions/home_actions';
// import Home from "../components/home/Home";

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
import { Form, H1, H2, Input, Base, Building } from './styles';
import Signin from '../components/signin/Signin';
import About from '../components/home/About';

// import css from "styled-jsx/css";

// SAMP
const sampleUri = 'https://api.graph.cool/simple/v1/cixmkt2ul01q00122mksg82pn';
const pilotUri = 'https://api.graph.cool/simple/v1/cji0cqlrx2pot0149bdqhnbyv';

const config = {
    link: new HttpLink({
        uri: pilotUri, // Server URL (must be absolute)
        opts: {
            credentials: 'same-origin' // Additional fetch() options like `credentials` or `headers`
        }
    })
};

//https://api.graph.cool/simple/v1/cji0cqlrx2pot0149bdqhnbyv

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            socialUser: null
        };

        this.handleEnterBellwoods = this.handleEnterBellwoods.bind(this);
    }

    componentDidMount() {}

    componentWillReceiveProps() {}

    handleEnterBellwoods(e) {
        e.preventDefault();
        Router.push('/bellwoods');
    }

    render() {
        const listStyle = {
            height: 300,
            width: 300,
            overflow: 'hidden',
            overflowY: 'auto',
            border: '1px dashed #f1f1f1'
        };

        const monthsLen =
            this.props.auth.cabinQuestUser === null
                ? 'No Subscription'
                : this.props.auth.cabinQuestUser.dues_paid_dates.length +
                  ' Months';

        return (
            <Main>
                <div>
                    <Base>
                        {this.props.auth.cabinQuestUser === null && (
                            <About auth={this.props.auth} />
                        )}

                        {this.props.auth.cabinQuestUser !== null && (
                            <Building>
                                <H2>
                                    Name:{' '}
                                    {this.props.auth.cabinQuestUser.username}
                                </H2>
                                <div>
                                    <button onClick={this.handleEnterBellwoods}>
                                        enter bellwoods
                                    </button>
                                </div>

                                <div>
                                    <p>
                                        experience:
                                        {
                                            this.props.auth.cabinQuestUser
                                                .experience
                                        }
                                    </p>
                                    <p>
                                        points:
                                        {this.props.auth.cabinQuestUser.points}
                                    </p>
                                    <p>
                                        scout:
                                        {this.props.auth.cabinQuestUser.scout}
                                    </p>
                                    <p>
                                        speed:
                                        {this.props.auth.cabinQuestUser.speed}
                                    </p>
                                    <p>
                                        status:
                                        {this.props.auth.cabinQuestUser.status}
                                    </p>
                                    <p>
                                        Achievements:{' '}
                                        {
                                            this.props.auth.cabinQuestUser
                                                .achievements.length
                                        }
                                    </p>
                                    <p>Subscription: {monthsLen}</p>
                                </div>
                            </Building>
                        )}
                    </Base>
                </div>
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
    bindActionCreators({ ...actionsHome }, dispatch);

const HomeHOC = compose(
    withRedux(initializeStore, matchStateToProps, mapDispatchToProps),
    withData(config)
)(Home);

export default HomeHOC;
