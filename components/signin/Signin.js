import React, { Component } from 'react';
import withRedux from 'next-redux-wrapper';
import { compose } from 'recompose';
import { bindActionCreators } from 'redux';
import initializeStore from '../../store/store';
import Link from 'next/link';
import * as actionsHome from '../../actions/home_actions';
import * as actionsAuth from '../../actions/auth_actions';
import {
    getCabinQuestPark,
    postDefaultPark
} from '../../actions/feed_cabinquest_park_actions';
import * as _ from 'lodash';
import css from 'styled-jsx/css';
import SocialButton from './SocialButton';
import axios from 'axios';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import TwitterLogin from 'react-twitter-auth/lib/react-twitter-auth-component.js';

const config = require('../../config/config');

class Signin extends Component {
    static getInitialProps({ store, isServer, pathname, query }) {}

    constructor(props) {
        super(props);
        this.signinWithGoogle = this.signinWithGoogle.bind(this);
        this.handleSocialLogin = this.handleSocialLogin.bind(this);
        this.handleSocialLoginFailure = this.handleSocialLoginFailure.bind(
            this
        );

        this.state = {
          isAuthenticated: false,
          user: null,
          token: ''
        }
    }

    componentDidMount() {

    }

    componentDidUpdate() {}

    handleSocialLogin(user) {
        ////.log('Signin user: ', user);

        // have we connected this social account?
        const axiosSocialConfig = {
            url: '/authUsers/addSocialLogin',
            method: 'post',
            data: { user }
        };

        axios(axiosSocialConfig).then(
            response => {
                ////.log('Signin social add response: ', response);
            },
            error => {
                ////.log('Signin social add error: ', error);
            }
        );

        const axiosCabinQuestConfig = {
            url: '/cabinQuestUsers/getUserByEmail',
            method: 'post',
            data: { user: user.profile }
        };

        axios(axiosCabinQuestConfig).then(
            response => {
                //.log('Signin cabinquestuser: ', response);

                const cabinQuestUser = response.data.model;
                if (cabinQuestUser.status === 'minted') {
                    this.props.postDefaultPark(cabinQuestUser);
                }

                this.props.setCabinQuestUser(cabinQuestUser);

                this.props.getCabinQuestPark();

                const name = cabinQuestUser.username;

                if (user && user.profile.email) {
                    const email = user.profile.email;
                    /*
                    this.props.getUser(email).then(
                        response => {
                            //.log('Signin getUser');

                            //this.props.createUser(name, email);
                        },
                        error => {}
                    );
                    */
                }

                //.log('Signin cabinquestuser this.props: ', this.props);
            },
            error => {}
        );
    }

    handleSocialLoginFailure(err) {
        //.log(err);
    }

    signinWithGoogle() {
        // this.props.fetchSignin("google");
        // this.props.history.push("/auth/google");
        location.href = '/auth/google';
    }

    onSuccess(response) {
      const token = response.headers.get('x-auth-token');
      response.json().then(user => {
        if (token) {
          this.setState({isAuthenticated: true, user: user, token: token});
        }
      });
    }

    onFailed(error) {
      //alert(error);
    }

    logout() {
      this.setState({isAuthenticated: false, token: '', user: null})
    }

    render() {

      let content = !!this.state.isAuthenticated ?
    (
      <div>
        <p>Authenticated</p>
        <div>
          {this.state.user.email}
        </div>
        <div>
          <button onClick={this.logout} className="button" >
            Log out
          </button>
        </div>
      </div>
    ) :
    (
      <TwitterLogin loginUrl="/auth/twitter"
                    onFailure={this.onFailed} onSuccess={this.onSuccess}
                    requestTokenUrl="https://goldfarming.now.sh/auth/twitter/callback"/>
    );


        return (
            <div>
                {/* <Link href="/auth/google">
          <a>sign in with google</a>
        </Link>*/}
                {/* <SocialButton
          provider="facebook"
          appId="1523865861168072"
          onLoginSuccess={this.handleSocialLogin}
          onLoginFailure={this.handleSocialLoginFailure}
        >
          Login with Facebook
        </SocialButton>*/}
        {content}
                <SocialButton
                    provider="google"
                    appId={config.google.clientID}
                    onLoginSuccess={this.handleSocialLogin}
                    onLoginFailure={this.handleSocialLoginFailure}
                >
                    Login with Google
                </SocialButton>
            </div>
        );
    }
}
/*
https://medium.com/handlebar-labs/graphql-authentication-with-react-native-apollo-part-1-2-9613aacd80b3
*/

const createUser = gql`
    mutation createUser($name: String!, $email: String!) {
        createUser(name: $name, email: $email) {
            id
            name
            email
            createdAt
        }
    }
`;

const matchStateToProps = state => ({ home: state.home });
const mapDispatchToProps = dispatch =>
    bindActionCreators(
        { ...actionsHome, ...actionsAuth, getCabinQuestPark, postDefaultPark },
        dispatch
    );

export default compose(
    graphql(createUser, {
        props: ({ mutate }) => ({
            createUser: (name, email) =>
                mutate({
                    variables: { name, email },
                    updateQueries: {
                        allPosts: (previousResult, { mutationResult }) => {
                            const newUser = mutationResult.data.createUser;
                            return Object.assign({}, previousResult, {
                                // Append the new post
                                //allUsers: [newUser, ...previousResult.allUsers]
                            });
                        }
                    }
                })
        })
    }),
    withRedux(initializeStore, matchStateToProps, mapDispatchToProps)
)(Signin);
