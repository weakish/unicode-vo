open Vertical

let codepoint = (c: string): int => c->Js.String2.codePointAt(0)->Js.Option.getExn

let hyphen = codepoint("-")
// Emoji in SMP (Unicode Supplementary Multilingual Plane)
let poop = codepoint("ð©")
// The line below is devoted to Ken Lunde, å°æå£, Chair of the CJK & Unihan Group.
let ken = codepoint("å£")

type charSample = (int, orientation, string)

@live
let chars: array<charSample> = [
  (hyphen, #rotated, "- rotated"),
  (poop, #upright, "ð© upright"),
  (ken, #upright, "å£ upright"),
]

let all_digits = "0123456789"
let all_letters = "The quick brown fox jumps over the lazy dog"
let unix_time = "UNIXæéã¨ã¯ã³ã³ãã¥ã¼ã¿ã¼ã·ã¹ãã ä¸ã§ã®æå»è¡¨ç¾ã®ä¸ç¨®ã"
let unix_time_expected =
  [
    "UNIXæéã¨ã¯ã³ã³ãã¥",
    "<span class=\"tatechuyoko\">ã¼</span>",
    "ã¿<span class=\"tatechuyoko\">ã¼</span>ã·ã¹ãã ä¸ã§ã®æå»è¡¨ç¾ã®ä¸ç¨®ã",
  ]->Js.Array2.joinWith("")
let unix_time_four =
  [
    "<span class=\"tatechuyoko\">UNIX</span>æéã¨ã¯ã³ã³ãã¥",
    "<span class=\"tatechuyoko\">ã¼</span>",
    "ã¿<span class=\"tatechuyoko\">ã¼</span>ã·ã¹ãã ä¸ã§ã®æå»è¡¨ç¾ã®ä¸ç¨®ã",
  ]->Js.Array2.joinWith("")
let date_time = "æ­å45å¹´1æ1æ¥åå0æ0å0ç§"
let date_time_expected =
  [
    "æ­å<span class=\"tatechuyoko\">45</span>å¹´",
    "<span class=\"tatechuyoko\">1</span>æ<span class=\"tatechuyoko\">1</span>æ¥",
    "åå<span class=\"tatechuyoko\">0</span>æ",
    "<span class=\"tatechuyoko\">0</span>å<span class=\"tatechuyoko\">0</span>ç§",
  ]->Js.Array2.joinWith("")

// 0: input
// 1: message
// 2-4: expected output with the max parameter specfied in 2, 3, 4
type lineSample = (string, string, string, string, string)

@live
let lines: array<lineSample> = [
  (all_digits, "only contain ascii digits", all_digits, all_digits, all_digits),
  (all_letters, "only contain ascii letters", all_letters, all_letters, all_letters),
  (
    unix_time,
    "KATAKANA-HIRAGANA PROLONGED SOUND MARK",
    unix_time_expected,
    unix_time_expected,
    unix_time_four,
  ),
  (date_time, "date", date_time_expected, date_time_expected, date_time_expected),
]

let year = "æ­å45å¹´"
let year_expected = "æ­å<TateChuYoko>45</TateChuYoko>å¹´"

let parens = "ï¼UNIXã¨ããã¯ï¼ããå½¢å¼çãªçµéç§æ°ã¨ãã¦è¡¨ãããã"
// In the line below, `ï¼UNIX` are marked since there are 5 characters (5 > 2),
// but `ï¼` is marked, which is inconsistent.
// This is because the current implementation simply fallbacks Tr to R.
let parens_unexpecetd = "ï¼UNIXã¨ããã¯<TateChuYoko>ï¼</TateChuYoko>ããå½¢å¼çãªçµéç§æ°ã¨ãã¦è¡¨ãããã"
type customTagSample = (string, string, string)

@live
let custom_tag_samples: array<customTagSample> = [
  (year, year_expected, "custom tags"),
  (parens, parens_unexpecetd, "Simply fallbacking Tr to R results in unexpected result."),
]
