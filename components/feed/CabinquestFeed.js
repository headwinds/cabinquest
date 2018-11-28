import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getCabinquestTrees } from '../../actions/feed_cabinquest_actions';
import { getPortholeForest } from '../../actions/feed_porthole_actions';
import { getCabinQuestPark } from '../../actions/feed_cabinquest_park_actions';
import LoadingAnimation from './LoadingAnimation';
import * as _ from 'lodash';

class CabinquestFeed extends Component {
    constructor(props) {
        super(props);

        this.state = {
            branches: null
        };

        this.getTress = this.getTrees.bind(this);
    }

    componentDidMount() {
        console.log('CabinquestFeed mounted');

        this.getTrees();
    }

    componentWillReceiveProps(nextProps) {
        console.log('CabinquestFeed componentWillReceiveProps');

        if (nextProps.feed_cabinquest.branches !== null) {
            this.state.branches = nextProps.feed_cabinquest.branches;

            this.setState({ branches: nextProps.feed_cabinquest.branches });
        }
    }

    getTrees() {
        this.props.getCabinquestTrees();
        this.props.getPortholeForest();
    }

    componentDidUpdate() {
        console.log(
            'CabinquestFeed componentDidUpdate this.props: ',
            this.props
        );
    }

    render() {
        //

        const { branches, portholeForest, park } = this.props.feed_cabinquest;

        if (portholeForest !== null)
            console.log(
                'CabinquestFeed render portholeForest: ',
                portholeForest.length
            );

        const getItems = () => {
            if (branches !== null && branches.length > 0) {
                return _.map(branches, (branch, uid) => {
                    return (
                        <div className="item" key={uid}>
                            <img src={branch.photoUrl} />
                            {/* <p>{branch.title}</p>*/}
                        </div>
                    );
                });
            } else return <LoadingAnimation />;
        };

        const getPark = () => {
            if (park !== null && park.length > 0) {
                return _.map(park, (treeModel, uid) => {
                    return (
                        <div className="item" key={uid}>
                            <div>{treeModel.title}</div>
                        </div>
                    );
                });
            } else return <LoadingAnimation />;
        };

        const getForest = () => {
            if (portholeForest !== null && portholeForest.length > 0) {
                return _.map(portholeForest, (portholeBranchModel, uid) => {
                    return (
                        <div className="item" key={uid}>
                            <img src={portholeBranchModel.photoUrl} />
                            <p>{portholeBranchModel.feedTitle}</p>
                        </div>
                    );
                });
            } else return <LoadingAnimation />;
        };

        const listStyle = {
            height: 300,
            width: 300,
            overflow: 'hidden',
            overflowY: 'auto',
            border: '1px dashed #f1f1f1'
        };
        const totalFeeds =
            this.props.feed_cabinquest.park !== null
                ? this.props.feed_cabinquest.park.length
                : 0;

        const getParkContainer = () => {
            if (this.props.auth.cabinQuestUser !== null) {
                return (
                    <div>
                        <h2>My Trees</h2>
                        <div style={{ ...listStyle, height: 100 }}>
                            {getPark()}
                        </div>
                        <div>{totalFeeds} Feeds</div>
                    </div>
                );
            } else return null;
        };

        return (
            <div>
                {getParkContainer()}
                <h2>Forest</h2>
                <div style={listStyle}>{getForest()}</div>
                <h2>Trees</h2>
                <div style={listStyle}>{getItems()}</div>
            </div>
        );
    }
}

const matchStateToProps = state => ({
    home: state.home,
    auth: state.auth,
    feed_cabinquest: state.feed_cabinquest
});
const mapDispatchToProps = dispatch =>
    bindActionCreators(
        { dispatch, getCabinquestTrees, getPortholeForest, getCabinQuestPark },
        dispatch
    );

export default connect(matchStateToProps, mapDispatchToProps)(CabinquestFeed);
