module.exports = {
  plugins: [
    require("postcss-preset-env")({
      stage: 4,
      features: {
        "nesting-rules": true,
        "custom-media-queries": true,
      },
    }),
    require("autoprefixer"),
  ],
};

