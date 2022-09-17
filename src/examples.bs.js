// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Js_option from "../node_modules/.pnpm/rescript@10.0.1/node_modules/rescript/lib/es6/js_option.js";

function codepoint(c) {
  return Js_option.getExn(c.codePointAt(0));
}

var hyphen = Js_option.getExn("-".codePointAt(0));

var poop = Js_option.getExn("💩".codePointAt(0));

var ken = Js_option.getExn("剣".codePointAt(0));

var chars = [
  [
    hyphen,
    "rotated",
    "- rotated"
  ],
  [
    poop,
    "upright",
    "💩 upright"
  ],
  [
    ken,
    "upright",
    "剣 upright"
  ]
];

var all_digits = "0123456789";

var all_letters = "The quick brown fox jumps over the lazy dog";

var unix_time = "UNIX時間とはコンピューターシステム上での時刻表現の一種。";

var unix_time_expected = [
    "UNIX時間とはコンピュ",
    "<span class=\"tatechuyoko\">ー</span>",
    "タ<span class=\"tatechuyoko\">ー</span>システム上での時刻表現の一種。"
  ].join("");

var unix_time_four = [
    "<span class=\"tatechuyoko\">UNIX</span>時間とはコンピュ",
    "<span class=\"tatechuyoko\">ー</span>",
    "タ<span class=\"tatechuyoko\">ー</span>システム上での時刻表現の一種。"
  ].join("");

var date_time = "昭和45年1月1日午前0時0分0秒";

var date_time_expected = [
    "昭和<span class=\"tatechuyoko\">45</span>年",
    "<span class=\"tatechuyoko\">1</span>月<span class=\"tatechuyoko\">1</span>日",
    "午前<span class=\"tatechuyoko\">0</span>時",
    "<span class=\"tatechuyoko\">0</span>分<span class=\"tatechuyoko\">0</span>秒"
  ].join("");

var lines = [
  [
    all_digits,
    "only contain ascii digits",
    all_digits,
    all_digits,
    all_digits
  ],
  [
    all_letters,
    "only contain ascii letters",
    all_letters,
    all_letters,
    all_letters
  ],
  [
    unix_time,
    "KATAKANA-HIRAGANA PROLONGED SOUND MARK",
    unix_time_expected,
    unix_time_expected,
    unix_time_four
  ],
  [
    date_time,
    "date",
    date_time_expected,
    date_time_expected,
    date_time_expected
  ]
];

var year = "昭和45年";

var year_expected = "昭和<TateChuYoko>45</TateChuYoko>年";

var parens = "（UNIXエポック）から形式的な経過秒数として表される。";

var parens_unexpecetd = "（UNIXエポック<TateChuYoko>）</TateChuYoko>から形式的な経過秒数として表される。";

var custom_tag_samples = [
  [
    year,
    year_expected,
    "custom tags"
  ],
  [
    parens,
    parens_unexpecetd,
    "Simply fallbacking Tr to R results in unexpected result."
  ]
];

export {
  codepoint ,
  hyphen ,
  poop ,
  ken ,
  chars ,
  all_digits ,
  all_letters ,
  unix_time ,
  unix_time_expected ,
  unix_time_four ,
  date_time ,
  date_time_expected ,
  lines ,
  year ,
  year_expected ,
  parens ,
  parens_unexpecetd ,
  custom_tag_samples ,
}
/* hyphen Not a pure module */