const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

/** Keep the dev server's Webpack chunks separate from production build output. */
module.exports = (phase) => ({
  distDir: phase === PHASE_DEVELOPMENT_SERVER ? '.next-dev' : '.next',
});
