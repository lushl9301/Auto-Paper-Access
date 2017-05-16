# Non-Click-NUS-Library-Proxy
A simple script run on Tampermonkey. You can easily access IEEE Xplore, ACM Digital Library, etc without clicking proxy bookmarklet provided by NUS

### Usage
1. Install [Tampermonkey](https://tampermonkey.net/) plugin for your web browsers.

2. Install this script from https://openuserjs.org/scripts/lushl9301/Non-Click_NUS_Library_Proxy by simply click *install*

3. Try the following papers from ACM DL and IEEE Xplore:

[Mars: a MapReduce framework on graphics processors](http://dl.acm.org/citation.cfm?id=1454152&CFID=727506701&CFTOKEN=12709622)

[Multikernel Data Partitioning With Channel on OpenCL-Based FPGAs](http://ieeexplore.ieee.org.libproxy1.nus.edu.sg/document/7857086/)

### Known Issues
* Need to allow unsafe javascript execution on https://link.springer.com

* Need to remove [//@run-at document-start](https://github.com/lushl9301/Non-Click-NUS-Library-Proxy/blob/master/Non-Click.user.js#L9) for https://link.springer.com
