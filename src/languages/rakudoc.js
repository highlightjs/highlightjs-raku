/*
Language: Pod Braid of Raku
Requires: raku.js
Author: Richard Hainsworth <rnhainsworth@gmail.com>
Website: https://www.raku.org
Category: documentation
*/
export default function(hljs) {
  var RAKUDOC_KEYWORDS = {
    $pattern: /[\w.]+/,
    keyword: ;
    }

  SUBST.contains = RAKUDOC_DEFAULT_CONTAINS;
  METHOD.contains = RAKUDOC_DEFAULT_CONTAINS;

  return {
    name: 'RakuDoc',
    aliases: ['pod6','POD6', 'rakudoc'],
    keywords: RAKUDOC_KEYWORDS,
    contains: RAKUDOC_DEFAULT_CONTAINS
  };
}
