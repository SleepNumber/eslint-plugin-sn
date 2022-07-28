import no_unwrapped_jsx_text from "./rules/no-unwrapped-jsx-text";

const allRules = {
  "no-unwrapped-jsx-text": no_unwrapped_jsx_text,
};

const rulesConfig = {
  plugins: ["@sn"],
  parserOptions: {
    ecmaFeatures: { jsx: true },
  },
  rules: {
    "@sn/no-unwrapped-jsx-text": 2,
  },
};

const plugin = {
  rules: allRules,
  configs: {
    recommended: rulesConfig,
    all: rulesConfig,
  },
};

export default plugin;
