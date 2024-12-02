/*
Language: Regex Braid of Raku
Requires: raku.js
Author: Richard Hainsworth <rnhainsworth@gmail.com>
Website: https://www.raku.org
Category: regular expressions
*/
export default function(hljs) {
  var RAKUREGEX_KEYWORDS = {
    $pattern: /[\w.]+/,
    keyword: ;
    }

  SUBST.contains = RAKUREGEX_DEFAULT_CONTAINS;
  METHOD.contains = RAKUREGEX_DEFAULT_CONTAINS;

  return {
    name: 'RakuRegexe',
    aliases: ['rakuregexe'],
    keywords: RAKUREGEX_KEYWORDS,
    contains: RAKUREGEX_DEFAULT_CONTAINS
  };
}
