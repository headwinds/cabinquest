/* eslint-disable */

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Button from 'material-ui/Button';
import Paper from 'material-ui/Paper';
import { compose } from 'recompose';
import { withStyles } from 'material-ui/styles';
import { overrideStyles } from '../../materialUITheme';
import { withRouter } from 'react-router';

const styles = overrideStyles;

class Compose extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log('Signout componentDidMount');
    }

    componentDidUpdate() {}

    componentWillReceiveProps(nextProps, nextState) {
        this.props = nextProps;
    }

    shouldComponentUpdate(NextProps) {
        return true;
    }

    render() {
        return <div />;
    }
}

const mapStateToProps = state => ({
    app: state.app,
    auth: state.auth
});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default compose(
    withStyles(styles),
    connect(mapStateToProps, mapDispatchToProps)
)(Compose);
