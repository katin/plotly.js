/**
* Copyright 2012-2017, Plotly, Inc.
* All rights reserved.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/


'use strict';

var scatterStyle = require('../scatter/style').style;

module.exports = function style(gd, cd) {
    // we're just going to call scatter style... if we already
    // called it, don't need to redo.
    // Later though we may want differences, or we may make style
    // more specific in its scope, then we can remove this.
    if(!cd) {
        var modules = gd._fullLayout._modules;
        for(var i = 0; i < modules.length; i++) {
            if(modules[i].name === 'scatter') return;
        }
    }

    scatterStyle(gd, cd);
};
