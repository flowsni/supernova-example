const StyleDictionary = require('style-dictionary').extend({
  source: ['tokens/default/*.json'],
  platforms: {
    js: {
      transformGroup: 'web',
      buildPath: 'src/build/',
      files: [
        {
          destination: 'theme.ts',
          format: 'javascript/esm',
        },
      ],
    },
  },
});

const { fileHeader } = StyleDictionary.formatHelpers;

const javascriptEsm = ({ dictionary, file, options, platform = {} }) => {
  const { prefix } = platform;
  const tokens = prefix ? { [prefix]: dictionary.tokens } : dictionary.tokens;
  const output =
    fileHeader({ file }) +
    `export const theme = \n${JSON.stringify(
      jsonToNestedValue(tokens),
      null,
      2
    )}\n`;
  return output;
};

const jsonToNestedValue = (token) => {
  // is non-object value
  if (!token || typeof token !== 'object') return token;
  // is design token
  if ('value' in token) return token.value;
  // is obj
  const nextObj = {};
  for (const [prop, value] of Object.entries(token)) {
    nextObj[prop] = jsonToNestedValue(value);
  }
  return nextObj;
};

StyleDictionary.registerFormat({
  name: 'javascript/esm',
  formatter: javascriptEsm,
});

StyleDictionary.buildAllPlatforms();
