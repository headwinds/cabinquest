import PostList from '../components/PostList';
import CabinquestFeed from '../components/feed/CabinquestFeed';
import { postCabinQuestTree } from '../actions/feed_cabinquest_park_actions';
import SubmitTree from '../components/Submit/SubmitTree';
import { Form, H1, H2, Input, Base, Building } from './styles';

const constructor = () => {
    this.postTree = this.postTree.bind(this);
};

const postTree = (title, url) => {
    this.props.postCabinQuestTree({ title, url });
};

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

<Base>
    {this.props.auth.cabinQuestUser !== null && (
        <Building>
            <SubmitTree postTree={this.postTree} />
        </Building>
    )}
    <CabinquestFeed />
    {this.props.auth.cabinQuestUser !== null && (
        <div style={listStyle}>
            <PostList />
        </div>
    )}
</Base>;
