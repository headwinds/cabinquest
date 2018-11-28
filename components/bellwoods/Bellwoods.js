/* eslint-disable */

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//import Button from 'material-ui/Button';
//import Paper from 'material-ui/Paper';
import { compose } from 'recompose';
//import { withStyles } from 'material-ui/styles';
import { overrideStyles } from '../../theme/materialUITheme';
//import { withRouter } from 'react-router';
import Store from './store/Store';
import { Form, H1, H2, Input, Base, Building } from '../../pages/styles';

const styles = overrideStyles;

class Bellwoods extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log('Bellwoods componentDidMount');
    }

    componentDidUpdate() {}

    componentWillReceiveProps(nextProps, nextState) {
        this.props = nextProps;
    }

    shouldComponentUpdate(NextProps) {
        return true;
    }

    render() {
        return (
            <div>
                <Store />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    app: state.app,
    auth: state.auth
});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default compose(connect(mapStateToProps, mapDispatchToProps))(Bellwoods);
