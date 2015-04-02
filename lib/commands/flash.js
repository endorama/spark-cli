'use strict';

/**
 * Compile command handler
 *
 * @author Edoardo Tenani <endorama@github.leemail.me>
 */

var _ = require('lodash');

module.exports = function (path, coreId, options) {
    // console.log(path)
    // console.log(coreId)
    // console.dir(options)
    
    if (_.isUndefined(coreId)) {
      console.log('Flashing %s locally', path);
    }
    else {
      console.log('Flashing %s wirelessly to coreId %s', path, coreId);
    }
};