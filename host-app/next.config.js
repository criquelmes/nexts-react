const { NextFederationPlugin } = require("@module-federation/nextjs-mf");

module.exports = {
  webpack(config, options) {
    if (!options.isServer) {
      config.plugins.push(
        new NextFederationPlugin({
          name: "host",
          remotes: {
            remoteA: "remoteA@http://localhost:3001/remoteA.js",
            remoteB: "remoteB@http://localhost:3002/remoteB.js",
          },
          filename: "static/chunks/remoteEntry.js",
        })
      );
    }

    return config;
  },
};
