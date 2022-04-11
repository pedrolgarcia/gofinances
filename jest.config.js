module.exports = {
  preset: "jest-expo",
  testPathIgnorePatterns: ["/node_nodules", "/android", "/ios"],
  setupFilesAfterEnv: [
    "@testing-library/jest-native/extend-expect",
    "jest-styled-components",
  ],
};
