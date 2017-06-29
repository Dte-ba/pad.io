/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/things              ->  index
 */

'use strict';

import _ from 'lodash';

// Gets a list of Things
export function index(req, res) {
  let all = [];
  let {page, take} = req.params;

  for (let i=0;i<100;i++){
    let w = _.random(2, 4) * 100;
    let h = _.random(2, 4) * 100;
    //w = h = 400;
    all.push({ 
      id: i, 
      src: `http://lorempixel.com/${w}/${h}/`, 
      desc: 'Lorem ipsum dolor sit amet, tollit repudiandae eum ad, eos eius habeo ei.' 
    });
  }

  res.json(_.take(_.drop(all, page*take), take));
}
