import React, { Component } from 'react';
import { compose } from 'recompose';
import withRedux from 'next-redux-wrapper';
import { bindActionCreators } from 'redux';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { Form, H1, H2, Input } from './styles';

class SubmitTree extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const handleSubmit = e => {
            e.preventDefault();

            const title = e.target.elements.title.value;
            let url = e.target.elements.url.value;

            if (title === '' || url === '') {
                window.alert('Both fields are required.');
                return false;
            }

            // prepend http if missing from url
            if (!url.match(/^[a-zA-Z]+:\/\//)) {
                url = `http://${url}`;
            }

            this.props.postTree(title, url);
            console.log('SubmitTree props: ', this.props);

            // reset form
            e.target.elements.title.value = '';
            e.target.elements.url.value = '';
        };

        return (
            <Form onSubmit={handleSubmit}>
                <H2>Add a Tree</H2>
                <Input placeholder="title" name="title" />
                <Input placeholder="url" name="url" />
                <button type="submit">Submit</button>
            </Form>
        );
    }
}

export default SubmitTree;
