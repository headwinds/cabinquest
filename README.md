# Cabin Quest
In the spirit of the Sierra Quest games, I wanted to make a game with a storyline and tactics but using modern web tech and open source code. More than a game, I think I'm most interested in building and contributing to the best open source game frameworks so that other aspiring game designers can contribute and make their owns based on a common structure; similar to how Lucas and Sierra built own [SCUUM](http://wiki.scummvm.org/index.php/Sierra) systems.    

## API
Currently [Cabin Quest](https://cabinquest.now.sh/) is a private API hosted on [Zeit.co](https://zeit.co)
The API mines over 50 RSS feeds.

## Game
[demo](https://cabinquest.now.sh/)

## Porthole Chrome Extension
install: [free from the chrome store](https://chrome.google.com/webstore/detail/porthole/dilfffpckfhcpgidnmgaeoidgekcjlln?hl=en)     
about: when you open a new tab, it will fill the browser with a photo from popular feeds (Gaming, Design, and Architecture)

## Support
Some day it will be released as a game on Itch or Steam. You could clone it and sell it too. You could...but why would you?! You would get inspired by this repo and possibly use it as a base to create your own work of art.  

## Sierra
[Hero's Quest 1](https://playclassic.games/game/play-heros-quest-want-hero-online/play/)
[Play Sierra Games in the browser](http://sarien.net/)

## Run

server.js

```
yarn
yarn dev
```

!!! IMPORTANT !!! yarn dev not yarn start

if I deleted node_modules, I must run npm run build

Remember to switch to node 8! ? still maybe I don't need to anymore...need to test

Ensure XCode and the command line tools are installed

If gyp fails - see this [tech post](https://github.com/nodejs/node-gyp/issues/569) and do:

```
sudo xcode-select --switch /Library/Developer/CommandLineTools
```

http://localhost:8080

If iconv error, delete the node_modules folder and run

Node 8

```
yarn
yarn dev
```

# Feeds

To find all the RSS feeds see:
See sagas > porthole > PortholeTreeUtil

server.js is nextjs app for server side rendering that also runs express to manage the API

[nextjs express starter](https://github.com/iaincollins/nextjs-starter)

## Deploy

```
now
```

now alias cabinquest.now.sh

after adding --cors to start

need to research this:
now alias cabinquest.now.sh -r rules.json

## CORS

[path alias](https://zeit.co/blog/path-alias)
