/* =========================================================================
 *
 * main.js
 *      main entrypoint into app
 *
 * ========================================================================= */
// CSS (loads and gets compiled)
// ------------------------------------
import '../css/main.scss';

// External libraries
// ------------------------------------
// Global libraries we'll use throughout the app and which should be accessible
// via window
import logger from 'bragi-browser';
logger.transports.get('console').property('showMeta', false);
window.logger = logger;

// d3
import d3 from 'd3';
window.d3 = d3;

// Internal Libraries
// ------------------------------------

// ====================================
//
// Functionality
//
// ====================================
logger.log('app', 'hello there');
