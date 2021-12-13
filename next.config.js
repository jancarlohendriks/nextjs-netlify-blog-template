const path = require('path')

module.exports = ({
  pageExtensions: ["jsx", "tsx"],
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')],
	},
	exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/posts/read-me': { page: '/posts/', query: { post: 'read-me' } },
      '/posts': { page: '/posts/' },
    }
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push(
      ...[
        {
          test: /\.yml$/,
          type: "json",
          use: "yaml-loader",
        },
        {
          test: /\.svg$/,
          use: "@svgr/webpack",
        },
      ]
    );
    return config;
  },
});
