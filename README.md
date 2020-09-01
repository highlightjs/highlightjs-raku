# Raku Language Definition for Highlight.js library
>
----
## Table of Contents
[Packaging](#packaging)
[LICENSE](#license)
[Credits](#credits)

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








----
Rendered from extra/raku/README at 2020-09-01T11:17:23Z