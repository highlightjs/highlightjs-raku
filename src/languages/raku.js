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
  var PERL_DEFAULT_CONTAINS = [
    VAR,
    { // regexp container
      begin: '(\\/\\/|' + hljs.RE_STARTERS_RE + '|\\b(split|return|print|reverse|grep)\\b)\\s*',
      keywords: 'split return print reverse grep',
      relevance: 0,
      contains: [
        {
          className: 'rakuregex',
//          begin: '(s|tr|y)/(\\\\.|[^/])*/(\\\\.|[^/])*/[a-z]*',
//          relevance: 10
        },
        {
          className: 'rakuregex',
//          begin: '(m|qr)?/', end: '/[a-z]*',
//          contains: [hljs.BACKSLASH_ESCAPE],
//          relevance: 0 // allows empty "//" which is a common comment delimiter in other languages
        }
      ]
    },
    {
      begin: "^=begin pod",
      end: "^=end pod$",
      subLanguage: 'rakudoc',
      contains: [
        {
//            begin: "^@@.*",
//            end: "$",
//            className: "comment"
        }
      ]
    }
    {
//      begin: "^__DATA__$",
//      end: "^__END__$",
      subLanguage: 'rakuquoting',
      contains: [
        {
//            begin: "^@@.*",
//            end: "$",
//            className: "comment"
        }
      ]
    }
  ],

  SUBST.contains = RAKU_DEFAULT_CONTAINS;
  METHOD.contains = RAKU_DEFAULT_CONTAINS;

  return {
    name: 'Raku',
    aliases: ['raku','Perl 6', 'p6', 'pm6', 'rakumod'],
    keywords: RAKU_KEYWORDS,
    contains: RAKU_DEFAULT_CONTAINS
  };
}
