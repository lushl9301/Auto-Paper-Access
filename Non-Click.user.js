// ==UserScript==
// @name         Non-Click NUS Library Proxy
// @updateURL    https://openuserjs.org/meta/lushl9301/My_Script.meta.js
// @copyright    2017, lushl9301 (https://github.com/lushl9301)
// @version      0.1
// @description  A simple script run on Tampermonkey. You can easily access IEEE Xplore, ACM Digital Library, etc without clicking proxy bookmarklet provided by NUS
// @author       lushl9301
// @license      MIT
// @run-at       document-start
// @grant        unsafeWindow
// @match        *www.sciencedirect.com/science/article/pii/*
// @match        *ieeexplore.ieee.org/document/*
// @match        *dl.acm.org/*
// @match        *.springer.com/*


// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    document.body.appendChild(document.createElement('script')).src='http://lgdata.s3-website-us-east-1.amazonaws.com/docs/1035/217629/proxywithga.js';
})();
