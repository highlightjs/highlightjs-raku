/*
Language: Raku
Author: Richard Hainsworth <rnhainsworth@gmail.com>
Website: https://www.raku.org
Category: common
Credit: Samantha McVei in atom-perl6fe
*/
export default function(hljs) {
  var RAKU_KEYWORDS = {
    $pattern: /[\w.]+/,
    keyword: // each string below is differentiated in atom-perl6fe
    'use require no need'
    + 'if else elsif unless with orwith without'
    + 'let my our state temp has constant'
    + 'for loop repeat while until gather given'
    + 'take do when next last redo return return-rw contend maybe defer default exit quietly continue break goto leave supply async lift await start react whenever parse'
    + 'is does as but trusts of returns handles where augment supersede'
    + 'BEGIN CHECK INIT START FIRST ENTER LEAVE KEEP UNDO NEXT LAST PRE POST END CATCH CONTROL TEMP QUIT'
    + 'prec irs ofs ors export raw deep binary unary reparsed rw parsed cached readonly defequiv will ref copy inline tighter looser equiv assoc required pure'
    + 'fatal internals MONKEY-TYPING MONKEY-SEE-NO-EVAL MONKEY-BRAINS MONKEY-GUTS MONKEY-BUSINESS MONKEY-TRAP MONKEY-SHINE MONKEY-WRENCH MONKEY-BARS nqp QAST strict trace worries invocant parameters experimental cur soft variables attributes v6 v6.* v6.c v6.d lib Test NativeCall'
    + 'Backtrace Exception Failure X'
    + 'AST Any Array Associative Attribute Bag BagHash Baggy Blob Block Bool Callable Capture Channel Code Complex Cool CurrentThreadScheduler Cursor Date DateTime Dateish Duration Enum FatRat Grammar Hash IO Instant Iterable Iterator Junction Label List Lock Macro Map Match Metamodel Method Mix MixHash Mixy Mu Nil Numeric ObjAt Pair Parameter Pod Positional PositionalBindFailover Proc Promise Proxy QuantHash Range Rat Rational Real Regex Routine Scheduler Seq Set SetHash Setty Signature Slip Stash Str str Stringy Sub Submethod Supply Tap Temporal Thread ThreadPoolScheduler Variable Version Whatever WhateverCode bool size_t Int int int1 int2 int4 int8 int16 int32 int64 Rat rat rat1 rat2 rat4 rat8 rat16 rat32 rat64 Buf buf buf1 buf2 buf4 buf8 buf16 buf32 buf64 UInt uint uint1 uint2 uint4 uint8 uint16 uint32 uint64 utf8 utf16 utf32 Num num num32 num64 IntStr NumStr RatStr ComplexStr CArray Pointer long longlong '
    + 'Order More Less Same'
    + 'div mod gcd lcm x xx temp let but cmp leg eq ne gt ge lt le before after eqv min max ff fff not so Z and andthen or orelse'
    ;
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
