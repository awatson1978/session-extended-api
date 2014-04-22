Package.describe({
  summary: "Extends the Session API",
  internal: true
});

Package.on_use(function (api) {
  api.use(['session', 'underscore', 'reactive-dict', 'ejson'], 'client');

  // Session can work with or without reload, but if reload is present
  // it should load first so we can detect it at startup and populate
  // the session.
  api.use('reload', 'client', {weak: true});

  api.export('Session', 'client');
  api.add_files('session-extended-api.js', 'client');
});

Package.on_test(function (api) {
  api.use('tinytest');
  //api.use(['session', 'underscore', 'reactive-dict', 'ejson'], 'client');
  api.use('session', 'client');
  api.use('session-extended-api');
  api.use('deps');
  api.use('mongo-livedata');
  api.add_files('session-extended-api-tests.js', 'client');
});
