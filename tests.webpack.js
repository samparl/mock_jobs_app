const context = require.context('./assets/javascripts', true, /_test\.jsx?$/);
context.keys().forEach(context);
