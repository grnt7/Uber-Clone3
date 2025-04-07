module.exports = function (api) {
    api.cache(true);
    return {
      presets: ['babel-preset-expo'], // For Expo projects
      plugins: [
        [
            "module:react-native-dotenv",
            {
                moduleName: "@env",
                path: "./.env"
            }
        ]
      ],
    };
  };