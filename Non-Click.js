// ==UserScript==
// @name         Non-Click NUS Library Proxy
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://www.sciencedirect.com/science/article/pii/*
// @match        http://ieeexplore.ieee.org/document/*
// @match        http://dl.acm.org/*

// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    document.body.appendChild(document.createElement('script')).src='http://lgdata.s3-website-us-east-1.amazonaws.com/docs/1035/217629/proxywithga.js';
})();
