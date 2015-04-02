'use strict';

/**
 * Compile command handler
 *
 * @author Edoardo Tenani <endorama@github.leemail.me>
 */

module.exports = function (options) {
    // console.log(options.cloud)
    // console.dir(options)
    if (options.cloud) {
      console.log('cloud compilation');
    }
    else {
      console.log('local compilation');
    }
};