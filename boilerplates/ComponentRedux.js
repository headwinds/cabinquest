import React, {Component} from "react";

import withRedux from "next-redux-wrapper";
import { bindActionCreators } from 'redux';
import initializeStore from '../store/store';
import * as actionsHome from '../actions/home_actions';
import * as _ from "lodash";

class ComponentRedux extends Component {

    static getInitialProps({store, isServer, pathname, query}) {

        // lets create an action using creator
        const action = actionsHome.someAsyncAction();

        // now the action has to be dispatched
        store.dispatch(action);

        console.log("home getInitialProps")

        return action.payload.then( response => {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            return response.json();
        }).then(function(json) {
            return {custom: 'custom', answer: "payload", items: json.items};
        });

    }



    componentDidMount(){
        console.log("home mounted:", this.props)
    }

    componentDidUpdate(){

    }

    render() {

        const getItems = () => {
            if ( this.props.items && this.props.items.length > 0 ) {
                return _.map(this.props.items, item => {
                    return (<div className="item" key={item.id}><img src={item.images.low_resolution.url} /></div>)
                });

            } else return null;
        }

        return (
            <div>
                <div className="item">hello world</div>
                <style jsx>{`
                    .item {
                        display: block;
                        padding: 10px;
                    }
                `}</style>
            </div>
        )
    }
}

const matchStateToProps = (state) => ({home: state.home});
const mapDispatchToProps = dispatch => (
    bindActionCreators(actionsHome, dispatch)
)

export default withRedux(initializeStore, matchStateToProps, mapDispatchToProps)(ComponentRedux);
