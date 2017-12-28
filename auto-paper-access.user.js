// ==UserScript==
// @name         Auto Paper Access
// @updateURL    https://openuserjs.org/meta/lushl9301/Auto_Paper_Access.meta.js
// @copyright    2017, lushl9301 (https://github.com/lushl9301)
// @version      1.0
// @description  A simple script runs on Tampermonkey. You can easily access IEEE Xplore, ACM Digital Library, etc without clicking proxy bookmarklet provided by universities.
// @author       lushl9301, koallen
// @license      MIT
// @run-at       document-body
// @match        www.sciencedirect.com/science/article/pii/*
// @match        ieeexplore.ieee.org/*
// @match        dl.acm.org/*
// @match        *.springer.com/*
// @match        onlinelibrary.wiley.com/doi/*
// @match        www.ncbi.nlm.nih.gov/pubmed/*
// @match        pubsonline.informs.org/dou/*
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
            'title': 'Choose your university',
            'fields':
            {
                'university': // field id
                {
                    'label': 'University',
                    'type': 'select',
                    'options': [defaultUniversity, 'Nanyang Technological University', 'National University of Singapore'],
                    'default': defaultUniversity
                }
            },
            'events':
            {
                'init': function() {
                    currUniversity = GM_config.get('university');
                },
                'open': function() {
                    // custom layout
                    var config_ui = this.frame;
                    config_ui.style.height = '';
                    config_ui.style.margin = 'auto';
                    config_ui.style.width = '20%';
                    config_ui.style.left = '40%';
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
            },
            'css': '#universityConfig .config_header { font-size: 20px; margin: 0 0 10 0; }'
        });

    // display a button to toggle config panel
    var button = document.createElement('button');
    button.innerHTML = "Auto Paper Access";
    button.style = "top:1em;right:1em;position:fixed;z-index: 9999";
    button.setAttribute('type', 'button');
    button.addEventListener('click', function(){GM_config.open();}, false);
    document.body.appendChild(button);

    // display config or access with uni account
    if (currUniversity === defaultUniversity)
        GM_config.open();
    else if ("Nanyang Technological University" === currUniversity)
        location.href = "http://ezlibproxy1.ntu.edu.sg/login?url=" + location.href;
    else if ('National University of Singapore' == currUniversity)
        location.href = "http://libproxy1.nus.edu.sg/login?url=" + location.href;
        // document.body.appendChild(document.createElement('script')).src='http://lgdata.s3-website-us-east-1.amazonaws.com/docs/1035/217629/proxywithga.js';
})();
