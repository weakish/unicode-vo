open Vertical

let codepoint = (c: string): int => c->Js.String2.codePointAt(0)->Js.Option.getExn

let hyphen = codepoint("-")
// Emoji in SMP (Unicode Supplementary Multilingual Plane)
let poop = codepoint("💩")
// The line below is devoted to Ken Lunde, 小林剣, Chair of the CJK & Unihan Group.
let ken = codepoint("剣")

type charSample = (int, orientation, string)

@live
let chars: array<charSample> = [
    (hyphen, #rotated, "- rotated"),
    (poop, #upright, "💩 upright"),
    (ken, #upright, "剣 upright")
]

let all_digits = "0123456789"
let all_letters = "The quick brown fox jumps over the lazy dog"
let unix_time = "UNIX時間とはコンピューターシステム上での時刻表現の一種。"
let unix_time_expected = ["UNIX時間とはコンピュ",
"<span class=\"tatechuyoko\">ー</span>",
"タ<span class=\"tatechuyoko\">ー</span>システム上での時刻表現の一種。"]->Js.Array2.joinWith("")
let unix_time_four = ["<span class=\"tatechuyoko\">UNIX</span>時間とはコンピュ",
"<span class=\"tatechuyoko\">ー</span>",
"タ<span class=\"tatechuyoko\">ー</span>システム上での時刻表現の一種。"]->Js.Array2.joinWith("")
let date_time = "昭和45年1月1日午前0時0分0秒"
let date_time_expected = ["昭和<span class=\"tatechuyoko\">45</span>年",
"<span class=\"tatechuyoko\">1</span>月<span class=\"tatechuyoko\">1</span>日",
"午前<span class=\"tatechuyoko\">0</span>時",
"<span class=\"tatechuyoko\">0</span>分<span class=\"tatechuyoko\">0</span>秒"]->Js.Array2.joinWith("")

// 0: input
// 1: message
// 2-4: expected output with the max parameter specfied in 2, 3, 4
type lineSample = (string, string, string, string, string)

@live
let lines: array<lineSample> = [
    (all_digits, "only contain ascii digits", all_digits, all_digits, all_digits),
    (all_letters, "only contain ascii letters", all_letters, all_letters, all_letters),
    (unix_time, "KATAKANA-HIRAGANA PROLONGED SOUND MARK", unix_time_expected, unix_time_expected, unix_time_four),
    (date_time, "date", date_time_expected, date_time_expected, date_time_expected)
]

let year = "昭和45年"
let year_expected = "昭和<TateChuYoko>45</TateChuYoko>年"

let parens = "（UNIXエポック）から形式的な経過秒数として表される。"
// In the line below, `（UNIX` are marked since there are 5 characters (5 > 2),
// but `）` is marked, which is inconsistent.
// This is because the current implementation simply fallbacks Tr to R.
let parens_unexpecetd = "（UNIXエポック<TateChuYoko>）</TateChuYoko>から形式的な経過秒数として表される。"
type customTagSample = (string, string, string)

@live
let custom_tag_samples: array<customTagSample> = [
    (year, year_expected, "custom tags"),
    (parens, parens_unexpecetd, "Simply fallbacking Tr to R results in unexpected result."),
    ]

