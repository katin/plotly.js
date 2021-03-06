/**
* Copyright 2012-2017, Plotly, Inc.
* All rights reserved.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/


'use strict';

var colorscaleDefaults = require('../../components/colorscale/defaults');
var Lib = require('../../lib');


module.exports = function handleStyleDefaults(traceIn, traceOut, coerce, layout, opts) {
    if(!opts) opts = {};
    var coloring = coerce('contours.coloring');

    var showLines;
    var lineColor = '';
    if(coloring === 'fill') showLines = coerce('contours.showlines');

    if(showLines !== false) {
        if(coloring !== 'lines') lineColor = coerce('line.color', opts.defaultColor || '#000');
        coerce('line.width', opts.defaultWidth === undefined ? 0.5 : opts.defaultWidth);
        coerce('line.dash');
    }

    coerce('line.smoothing');

    if(coloring !== 'none') {
        colorscaleDefaults(
            traceIn, traceOut, layout, coerce, {prefix: '', cLetter: 'z'}
        );
    }

    var showLabels = coerce('contours.showlabels');
    if(showLabels) {
        var globalFont = layout.font;
        Lib.coerceFont(coerce, 'contours.labelfont', {
            family: globalFont.family,
            size: globalFont.size,
            color: lineColor
        });
        coerce('contours.labelformat');
    }

    if(opts.hasHover !== false) coerce('zhoverformat');
};
