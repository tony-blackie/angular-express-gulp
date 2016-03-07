## Basic app bootstrap with express, gulp and angular

#### This boilerplate includes:
```
angular
ui-router
express
json mocks for backend
gulp
karma
jasmine
phantomjs
```

### Installation

```
(sudo) npm install
(sudo) npm install -g karma
(sudo) npm install -g nodemon
(sudo) npm install -g gulp
```

### Run

```
1. _Run tests_: karma start
2. _Run build_: gulp app
3. _Run server_: node sever.js (or _nodemon server.js_ for autoreload, if you have it installed globally)
```

### Troubleshooting

```
If karma throws an error 'phantomjs not installed' and you're using Windows,
make sure to copy it from '/node_modules/phantomjs/lib/phantom/bin/phantom.exe' into your
'C:\Users\your_user\AppData\Roaming\npm' folder.
```
