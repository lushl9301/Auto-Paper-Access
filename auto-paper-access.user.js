// ==UserScript==
// @name         Auto Paper Access
// @updateURL    https://openuserjs.org/meta/lushl9301/My_Script.meta.js
// @copyright    2017, lushl9301 (https://github.com/lushl9301)
// @version      0.2
// @description  A simple script runs on Tampermonkey. You can easily access IEEE Xplore, ACM Digital Library, etc without clicking proxy bookmarklet provided by universities.
// @author       lushl9301, koallen
// @license      MIT
// @run-at       document-body
// @match        http://www.sciencedirect.com/science/article/pii/*
// @match        http://ieeexplore.ieee.org/document/*
// @match        http://dl.acm.org/*
// @match        https://*.springer.com/*
// @require      https://openuserjs.org/src/libs/sizzle/GM_config.js
// @grant        GM_getValue
// @grant        GM_setValue
// ==/UserScript==

(function() {
    'use strict';

    // initialization
    var currUniversity, prevUniversity;
    var defaultUniversity = '====N.A.====';
    GM_config.init(
        {
            'id': 'universityConfig',
            'title': '',
            'fields': // Fields object
            {
                'university': // This is the id of the field
                {
                    'label': 'University', // Appears next to field
                    'type': 'select',
                    'options': [defaultUniversity, 'Nanyang Technological University', 'National University of Singapore'],
                    'default': defaultUniversity // Default value if user doesn't change it
                }
            },
            'events':
            {
                'init': function() {
                    currUniversity = GM_config.get('university');
                },
                'open': function(doc) {
                    GM_config.fields['university'].node.addEventListener('change', function () {
                        currUniversity = GM_config.fields['university'].toValue();
                    }, false);
                    GM_config.fields['university'].node.addEventListener('focus', function() {
                        prevUniversity = GM_config.fields['university'].toValue();
                    }, false);
                },
                'save': function() {
                    if (prevUniversity !== currUniversity)
                        location.reload();
                }
            }
        });

    // display a button to toggle config panel
    var button = document.createElement('button');
    button.innerHTML = "config";
    button.style = "top:1em;right:1em;position:fixed;z-index: 9999";
    button.setAttribute('type', 'button');
    button.addEventListener('click', function(){GM_config.open();}, false);
    document.body.appendChild(button);

    // display config or access with uni account
    if (currUniversity === defaultUniversity)
        GM_config.open();
    else if ("Nanyang Technological University" === currUniversity)
        location.href = "http://ezlibproxy1.ntu.edu.sg/login?url="+location.href;
    else if ('National University of Singapore' == currUniversity)
        document.body.appendChild(document.createElement('script')).src='http://lgdata.s3-website-us-east-1.amazonaws.com/docs/1035/217629/proxywithga.js';
})();
