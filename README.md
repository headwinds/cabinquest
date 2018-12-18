# Cabin Quest API

Tech:

* NEXTJS
* GRAPHQL
* NODEJS
* EXPRESS

Cabin Quest began when Google Reader ended. While learning NodeJS & Express, I accomplished my first goal to create a service to upload, parse, and save my Google Reader zip into Mongodb. Then, I designed and develop a UI to manage my 800 feeds. Finally, I built this NextJS app to learn both it and GraphQL. Basically, I wanted a fun weekend project to learn emerging tech and become more full stack.

Currently [Cabin Quest](https://cabinquest.now.sh/) is a private API hosted on [Zeit.co](https://zeit.co)

## Porthole Chrome Extension
install: [free from the chrome store](https://chrome.google.com/webstore/detail/porthole/dilfffpckfhcpgidnmgaeoidgekcjlln?hl=en)     
about: when you open a new tab, it will fill the browser with a photo from popular feeds (Gaming, Design, and Architecture)

I also built Porthole which is a chrome extension for your browser that features 50 popular feeds and parses out all the photo to be displayed full screen when you open a new table.

## Run

server.js

```
yarn
yarn dev
```
troubleshooting:
* If you delete the node_modules, please run: `npm run build`
* Ensure XCode and the command line tools are installed
* If gyp fails - see this [tech post](https://github.com/nodejs/node-gyp/issues/569) and do:
* IconV was used in app/controllers/bellwoods/trees/PortholeTreesController.js & TreesController
* IconV does UTF-8 check on the stream - I may or may not need it?!

```
sudo xcode-select --switch /Library/Developer/CommandLineTools
```

Open your browser to http://localhost:8080

If iconv error, delete the node_modules folder and run

requirements: at least Node 8

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

## Future

In the spirit of the Sierra Quest games but with a modern approach, I eventually want to experiment with combining the API feed with game mechanics or some interactive experience; part story, part data visualization. It would be nice to contribute to the best open source similar to how Lucas and Sierra built own [SCUUM](http://wiki.scummvm.org/index.php/Sierra) systems.    

## Sierra
[Hero's Quest 1](https://playclassic.games/game/play-heros-quest-want-hero-online/play/)
[Play Sierra Games in the browser](http://sarien.net/)
