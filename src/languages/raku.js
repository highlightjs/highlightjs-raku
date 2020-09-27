/*
Language: Raku
Author: Richard Hainsworth <rnhainsworth@gmail.com>
Website: https://www.raku.org
Category: common
*/
export default function(hljs) {
// highlight group -> css_class as given in CSS class reference
// Not all names may match semantically
//1: Operators -> literal
//2: Keywords -> keyword
//3: Comments -> comment
//4: String Literal -> string
//5: Numeric Literal -> number
//6: Callable -> function
//7: Variables -> built-in
//8: Types & terms -> type
//9: Regex => sublanguage
//10: POD => sublanguage
//11: quoting => sublanguage
  var OPERATORS = {
    begin: "<==|==>|<=>|=>|-->|->|\\+\\||\\+\\+|--|"
           + "\\*\\*|\\?\\?\\?|\\?\\?|\\!\\!\\!|\\!\\!|&&|"
           + "\\+\\^|\\?\\^|%%|\\+&|\\+<|\\+>|\\+\\^|"
           + "\\.\\.(?!\\.)|\\.\\.\\^|\\^\\.\\.|\\^\\.\\.\\^|"
           + "\\?\\||!=(?!\\=)|!==(?!\\=)|<=(?!>)|>=|===|==|"
           + "=:=|~~|\\x{2245}|\\|\\||\\^\\^|\\/\\/|:=|::=|"
           + "\\.\\.\\.",
    className: 'literal'
  };
  var RAKU_KEYWORDS = {
    $pattern: /[\w.-]+/,
    keyword: // each string below is differentiated in atom-perl6fe
    'use require no need'
    + 'if|0 else|0 elsif|5 unless with|10 orwith|10 without|10'
    + 'let|0 my|5 our|5 state|5 temp|7 has|10 constant'
    + 'for|0 loop|0 repeat|0 while|0 until|0 gather|10 given|5'
    + 'take|10 do|0 when|5 next|0 last|0 redo|0 return|0 return-rw contend maybe defer default exit quietly continue break goto leave supply async lift await start react whenever parse'
    + 'make|10 made|10'
    + 'is|10 does|10 as but|10 trusts|10 of returns handles where|10 augment supersede'
    + 'BEGIN CHECK|10 INIT START FIRST|10 ENTER|10 LEAVE|10 KEEP UNDO NEXT LAST PRE POST END CATCH CONTROL TEMP QUIT'
    + 'prec|10 irs ofs ors export raw deep binary unary reparsed rw parsed cached readonly defequiv will ref copy inline tighter looser equiv assoc required pure'
    + 'fatal internals MONKEY-TYPING|10 MONKEY-SEE-NO-EVAL|10 MONKEY-BRAINS|10 MONKEY-GUTS|10 MONKEY-BUSINESS|10 MONKEY-TRAP|10 MONKEY-SHINE|10 MONKEY-WRENCH|10 MONKEY-BARS|10 nqp|10 QAST|10 strict trace worries|10 invocant parameters experimental cur soft variables attributes v6|10 v6.*|10 v6.c|10 v6.d|10 v6.e|10 lib Test NativeCall|10'
    + 'Backtrace Exception Failure X',
    ,
    // the following keywords are operators, which are to be styled as literals
    literal: 'div mod gcd lcm x xx temp let but cmp leg eq ne gt ge lt le before after eqv min max ff fff not so Z and andthen or orelse'
    ,
    // the following keywords are RHS literals, so counting them as Number literals
    number: 'NaN Inf True False Nil Empty',
    type: 'AST|10 Any Array Associative|10 Attribute Bag|10 BagHash|10 Baggy|10 Blob Block Bool Callable Capture Channel|10 Code Complex Cool CurrentThreadScheduler|10 Cursor Date DateTime Dateish|10 Duration Enum FatRat|10 Grammar|10 Hash IO Instant Iterable Iterator Junction|10 Label List Lock Macro Map Match Metamodel Method Mix|10 MixHash|10 Mixy|10 Mu|10 Numeric ObjAt Pair Parameter Pod Positional PositionalBindFailover Proc Promise Proxy|10 QuantHash|10 Range Rat|10 Rational Real Regex Routine Scheduler Seq Set SetHash|10 Setty Signature Slip Stash Str str Stringy Sub Submethod Supply Tap Temporal Thread ThreadPoolScheduler Variable Version Whatever|10 WhateverCode|10 bool size_t Int int int1 int2 int4 int8 int16 int32 int64 Rat|10 rat|10 rat1|10 rat2|10 rat4|10 rat8|10 rat16|10 rat32|10 rat64|10 Buf buf buf1 buf2 buf4 buf8 buf16 buf32 buf64 UInt uint uint1 uint2 uint4 uint8 uint16 uint32 uint64 utf8 utf16 utf32 Num num num32 num64 IntStr NumStr RatStr ComplexStr CArray Pointer long longlong '
          + 'Order More Less Same',
    function: 'eager hyper substr index rindex grep map sort join lines hints'
         + 'chmod split reduce min max reverse truncate zip cat roundrobin'
         + 'classify first sum keys values pairs defined delete exists'
         + 'elems end kv any all one wrap shape key value name pop push'
         + 'shift splice unshift floor ceiling abs exp log log10 rand sign'
         + 'sqrt sin cos tan round strand roots cis unpolar polar atan2'
         + 'pick chop chomp lc lcfirst uc ucfirst capitalize mkdir'
         + 'normalize pack unpack quotemeta comb samecase sameaccent chars'
         + 'nfd nfc nfkd nfkc printf sprintf caller evalfile run runinstead'
         + 'nothing want bless chr ord ords gmtime time eof localtime gethost'
         + 'getpw chroot getlogin getpeername kill fork wait perl graphs'
         + 'codes bytes clone print open read write readline say seek close'
         + 'opendir readdir slurp spurt shell run pos fmt vec link unlink'
         + 'symlink unique pair asin atan sec cosec cotan asec acosec acotan'
         + 'sinh cosh tanh asinh done acos acosh atanh sech cosech cotanh'
         + 'sech acosech acotanh asech ok nok plan-ok dies-ok lives-ok skip'
         + 'todo pass flunk force-todo use-ok isa-ok diag is-deeply isnt'
         + 'like skip-rest unlike cmp-ok eval-dies-ok nok-error cmp-ok'
         + 'eval-lives-ok approx is-approx throws-ok version-lt plan EVAL'
         + 'succ pred times nonce once signature new connect operator undef'
         + 'undefine sleep from to infix postfix prefix circumfix can-ok'
         + 'postcircumfix minmax lazy count unwrap getc pi tau context void'
         + 'quasi body each contains rewinddir subst can isa flush arity'
         + 'assuming rewind callwith callsame nextwith nextsame attr does-ok'
         + 'eval-elsewhere none not srand so trim trim-start trim-end lastcall'
         + 'WHAT WHY WHERE HOW WHICH VAR WHO WHENCE ACCEPTS REJECTS not'
         + 'iterator by re im invert flip gist flat tree is-prime'
         + 'throws-like trans race hyper tap emit done-testing quit dd note'
         + 'prepend categorize antipairs categorize-list parse-base base'
         + 'starts-with ends-with put append tail \\x{03C0} \\x{03C4} \\x{212F}'
         + 'get words new-from-pairs uniname uninames uniprop uniprops'
         + 'slurp-rest throw break keep match trim-leading trim-trailing'
         + 'is-lazy pull-one push-exactly push-at-least push-all push-until-lazy'
         + 'sink-all skip-at-least skip-at-least-pull-one'
  };
  var VARIABLES = {
    begin: "[\\$|@|%|&][\\.|\\*|:|!|\\^|~|=|\\?]?\\w[\\d|\\w|_]+[\\w|_]",
    classname: 'built-in'
  };
  var POD = {
    begin: '^\\s*=begin pod',
    end: '^\\s*=end pod$',
    variants: [
      begin: '^\\s*=COMMENT',
      begin: '^\\s#\\||#='
    ]
    //subLanguage: 'rakudoc',
    className: 'string'
  };
//  var QUOTING = {
//    begin: '',
//    subLanguage: 'rakuquoting'
//  };
//  var RAKUREGEX = {
//    begin: '',
//    end: '',
//    subLanguage: 'rakuregex'
//  };
  var PERL_DEFAULT_CONTAINS = [
    OPERATORS,
    VARIABLES,
    RAKUPOD,
//    QUOTING,
//    RAKUREGEX,
    STRING,
    hljs.HASH_COMMENT_MODE,
    hljs.NUMBER_MODE,
    hljs.B_NUMBER_MODE
  ];

  return {
    name: 'Raku',
    aliases: ['raku','Perl6', 'p6', 'pm6', 'rakumod'],
    case_insensistive: false,
    disableAutodetect: true,
    keywords: RAKU_KEYWORDS,
    contains: RAKU_DEFAULT_CONTAINS
  };
}
