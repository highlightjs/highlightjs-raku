# Raku Language Definition for Highlight.js library
>
----
## Table of Contents
[Packaging](#packaging)
[LICENSE](#license)
[Credits](#credits)
[Contributing](#contributing)

----
This is the language definition fileset to describe [Raku](https://raku.org) for `highlight.js`.

It is composed of four language definition files, one for the main language, and one each for the braids, namely `Pod`, `Quoting`, and `Regex`.

# Packaging
Simply include the `highlight.js` script package in your webpage or Node app, load up this module, and apply it to `hljs`.

If you're not using a build system and just want to embed this in your webpage:

```
<script src="https://cdn.jsdelivr.net/npm/highlightjs"></script>
<script src="https://cdn.jsdelivr.net/npm/highlightjs-raku"></script>
<script>
  hljs.registerLanguage("raku", window.hljsDefineVue);
  hljs.initHighlightingOnLoad();
</script>
```
If you're using webpack / rollup / browserify / node:

```
var hljs = require("highlightjs");
var hljsDefineVue = require("highlightjs-raku");

hljsDefineVue(hljs);
hljs.initHighlightingOnLoad();
```
# LICENSE
This software is provided under Artistic 2.0, the same license as [Raku license](https://raku.org/LICENSE)

# Credits
The language definition fileset was initiated by Richard Hainsworth, aka finanalyst.

Other contributors:

# Contributing
All contributions are welcome. Please create a PR.

Highlighting a complex language such as **Raku** involves decisions about which items are important and should be styled differently. Two existing highlighting systems for **Raku** existed before this language definition was created, namely a highlighter written for **Atom** by Samanatha McVie, and the highlighting for the **Comma IDE** managed by Jonathan Worthington. The essential choices can be found in the repo as `Comma_RakuHighlighting.txt` and `perl6fe.cson`.

**Highlightjs** already has numerous styles, which colour various `modes`. Most style definitions target the `modes`. So the mode names were chosen to match as closely the semantic names, but where **Raku** is different, another almost random mode-name was chosen.

**Raku** has three separate braids for `Pod`, `Quoting`, and `Regex`. In nearly all other languages these three categories are treated as `Strings` or `Documentation`. In **Raku** they are far more important and complex. Consequently, they have been separated into sublanguages. Their `modes` are styled using different mode names.

If there is a need, then another style sheet can be established for **Raku**, so that the braids can be distinguished in a more consistent manner.








----
Rendered from extra/raku/README at 2020-09-22T20:22:31Z