/*
Language: Quoting Braid of Raku
Requires: raku.js
Author: Richard Hainsworth <rnhainsworth@gmail.com>
Website: https://www.raku.org
Category: Quoting
*/
export default function(hljs) {
  var RAKUQUOT_KEYWORDS = {
    $pattern: /[\w.]+/,
    keyword: ;
    }

  SUBST.contains = RAKUQUOT_DEFAULT_CONTAINS;
  METHOD.contains = RAKUQUOT_DEFAULT_CONTAINS;

  return {
    name: 'RakuQuoting',
    aliases: ['rakuquoting'],
    keywords: RAKUQUOT_KEYWORDS,
    contains: RAKUQUOT_DEFAULT_CONTAINS
  };
}
