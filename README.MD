# Nical Web
This is the repo for the Cloud Building Management System.

This project requires [Node.js (primarily NPM)](https://nodejs.org/) v4+ to run. Before running the project, you'll need to prepare the project for:
- Global Dependencies
- Local Dependencies

To do this, run these commands from your Terminal or CMD:
```sh
$ cd /local/folder/to/your/project
$ npm run prepare-mac (or prepare-win)
$ npm install
$ bower install
```

After running the previous steps, to run the project simply do `grunt serve` from the Terminal or CMD, and then on your browser go to `http://localhost:3000/`.

This project uses:
- RequireJS
- AngularJS
- Bootstrap
- Lodash

and requires:
- Node Package Manager (NPM)
- Bower
- Grunt
