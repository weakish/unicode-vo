# unicode-vo

[![codecov](https://codecov.io/gh/weakish/unicode-vo/branch/master/graph/badge.svg?token=KUO7UMADQW)](https://codecov.io/gh/weakish/unicode-vo)

Query the Vertical Orientation (VO) of Unicode characters.

## API

APIs are undocumented yet.

Currently, see `src/Vertical.bs.d.ts` for type definitions and
`src/examples.res` for input/output examples.

APIs are subject to change.

## Known Issues

### vo

- Does not support Tu & Tr (currently simply use their fallback value).

### tateChuYoko

- Not handling grapheme clusters.
- Assumes input is a line of plain text, not containing HTML tags.
- Performance.

## Reference

- [Unicode Vertical Text Layout]
- [Styling vertical Chinese, Japanese, Korean and Mongolian text]
- [writing-mode] CSS property

[Unicode Vertical Text Layout]: https://www.unicode.org/reports/tr50/tr50-11.html "Unicode Technical Report #50"
[Styling vertical Chinese, Japanese, Korean and Mongolian text]: https://www.w3.org/International/articles/vertical-text/

## License

This program itself is licensed under 0BSD.

The Unicode data file [VerticalOrientation-15.0.0.txt] is licensed under
[UNICODE, INC. LICENSE AGREEMENT]. A copy of the license can be found at
data/LICENSE.

[VerticalOrientation-15.0.0.txt]: https://www.unicode.org/Public/15.0.0/ucd/VerticalOrientation.txt
[UNICODE, INC. LICENSE AGREEMENT]: http://www.unicode.org/license.txt
[writing-mode]: https://developer.mozilla.org/en-US/docs/Web/CSS/writing-mode "MDN"
