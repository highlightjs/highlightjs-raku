/*
Language: Raku
Author: Richard Hainsworth <rnhainsworth@gmail.com>
Website: https://www.raku.org
Category: common
*/
export default function(hljs) {
  var RAKU_KEYWORDS = {
    $pattern: /[\w.]+/,
    keyword: ;
    }

  SUBST.contains = RAKU_DEFAULT_CONTAINS;
  METHOD.contains = RAKU_DEFAULT_CONTAINS;

  return {
    name: 'Raku',
    aliases: ['raku','Perl 6', 'p6', 'pm6', 'rakumod'],
    keywords: RAKU_KEYWORDS,
    contains: RAKU_DEFAULT_CONTAINS
  };
}
