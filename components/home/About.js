import React, { Component } from 'react';
import Signin from '../signin/Signin';
import Header from '../Header';

export default ({ auth }) => {
    const handleGetExtensionClick = () => {
        window.open(
            'https://chrome.google.com/webstore/detail/porthole/dilfffpckfhcpgidnmgaeoidgekcjlln?hl=en',
            '_blank'
        );
    };

    return (
        <div>
            {/* <Theme /> */}
            <h2>CabinQuest</h2>

            {auth.cabinQuestUser !== null && <Header />}

            <div style={{ display: 'block' }}>
                {auth.cabinQuestUser === null && <Signin />}
            </div>

            <div>
                <h4>Porthole</h4>
                <p>
                    A Chrome Extension that fills your browser with imagery from
                    your favourite feeds
                </p>
                <button onClick={handleGetExtensionClick}>Get It</button>
            </div>
            <div style={{ display: 'none' }}>
                <h4>Github</h4>
                <a
                    className="link"
                    target="_blank"
                    href="https://github.com/headwinds/porthole"
                >
                    source
                </a>
            </div>
        </div>
    );
};
