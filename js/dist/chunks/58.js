yoastWebpackJsonp([58],{513:function(module,exports,__webpack_require__){"use strict";eval('var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;\n\nvar _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };\n\n!function (t, a) {\n  "object" == ( false ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = a() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (a),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === \'function\' ?\n\t\t\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :\n\t\t\t\t__WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (t.ReactIntlLocaleData = t.ReactIntlLocaleData || {}, t.ReactIntlLocaleData.se = a());\n}(undefined, function () {\n  "use strict";\n  return [{ locale: "se", pluralRuleFunction: function pluralRuleFunction(t, a) {\n      return a ? "other" : 1 == t ? "one" : 2 == t ? "two" : "other";\n    }, fields: { year: { displayName: "jáhki", relative: { 0: "this year", 1: "next year", "-1": "last year" }, relativeTime: { future: { one: "{0} jahki maŋŋilit", two: "{0} jahkki maŋŋilit", other: "{0} jahkki maŋŋilit" }, past: { one: "{0} jahki árat", two: "{0} jahkki árat", other: "{0} jahkki árat" } } }, month: { displayName: "mánnu", relative: { 0: "this month", 1: "next month", "-1": "last month" }, relativeTime: { future: { one: "{0} mánotbadji maŋŋilit", two: "{0} mánotbadji maŋŋilit", other: "{0} mánotbadji maŋŋilit" }, past: { one: "{0} mánotbadji árat", two: "{0} mánotbadji árat", other: "{0} mánotbadji árat" } } }, day: { displayName: "beaivi", relative: { 0: "odne", 1: "ihttin", 2: "paijeelittáá", "-2": "oovdebpeivvi", "-1": "ikte" }, relativeTime: { future: { one: "{0} jándor maŋŋilit", two: "{0} jándor amaŋŋilit", other: "{0} jándora maŋŋilit" }, past: { one: "{0} jándor árat", two: "{0} jándora árat", other: "{0} jándora árat" } } }, hour: { displayName: "diibmu", relative: { 0: "this hour" }, relativeTime: { future: { one: "{0} diibmu maŋŋilit", two: "{0} diibmur maŋŋilit", other: "{0} diibmur maŋŋilit" }, past: { one: "{0} diibmu árat", two: "{0} diibmur árat", other: "{0} diibmur árat" } } }, minute: { displayName: "minuhtta", relative: { 0: "this minute" }, relativeTime: { future: { one: "{0} minuhta maŋŋilit", two: "{0} minuhtta maŋŋilit", other: "{0} minuhtta maŋŋilit" }, past: { one: "{0} minuhta árat", two: "{0} minuhtta árat", other: "{0} minuhtta árat" } } }, second: { displayName: "sekunda", relative: { 0: "now" }, relativeTime: { future: { one: "{0} sekunda maŋŋilit", two: "{0} sekundda maŋŋilit", other: "{0} sekundda maŋŋilit" }, past: { one: "{0} sekunda árat", two: "{0} sekundda árat", other: "{0} sekundda árat" } } } } }, { locale: "se-FI", parentLocale: "se", fields: { year: { displayName: "jahki", relative: { 0: "dán jagi", 1: "boahtte jagi", "-1": "mannan jagi" }, relativeTime: { future: { one: "{0} jagi siste", two: "{0} jagi siste", other: "{0} jagi siste" }, past: { one: "{0} jagi árat", two: "{0} jagi árat", other: "{0} jagi árat" } } }, month: { displayName: "mánnu", relative: { 0: "this month", 1: "next month", "-1": "last month" }, relativeTime: { future: { one: "{0} mánotbadji maŋŋilit", two: "{0} mánotbadji maŋŋilit", other: "{0} mánotbadji maŋŋilit" }, past: { one: "{0} mánotbadji árat", two: "{0} mánotbadji árat", other: "{0} mánotbadji árat" } } }, day: { displayName: "beaivi", relative: { 0: "odne", 1: "ihttin", 2: "paijeelittáá", "-2": "oovdebpeivvi", "-1": "ikte" }, relativeTime: { future: { one: "{0} jándor maŋŋilit", two: "{0} jándor amaŋŋilit", other: "{0} jándora maŋŋilit" }, past: { one: "{0} jándor árat", two: "{0} jándora árat", other: "{0} jándora árat" } } }, hour: { displayName: "diibmu", relative: { 0: "this hour" }, relativeTime: { future: { one: "{0} diibmu maŋŋilit", two: "{0} diibmur maŋŋilit", other: "{0} diibmur maŋŋilit" }, past: { one: "{0} diibmu árat", two: "{0} diibmur árat", other: "{0} diibmur árat" } } }, minute: { displayName: "minuhtta", relative: { 0: "this minute" }, relativeTime: { future: { one: "{0} minuhta maŋŋilit", two: "{0} minuhtta maŋŋilit", other: "{0} minuhtta maŋŋilit" }, past: { one: "{0} minuhta árat", two: "{0} minuhtta árat", other: "{0} minuhtta árat" } } }, second: { displayName: "sekunda", relative: { 0: "now" }, relativeTime: { future: { one: "{0} sekunda maŋŋilit", two: "{0} sekundda maŋŋilit", other: "{0} sekundda maŋŋilit" }, past: { one: "{0} sekunda árat", two: "{0} sekundda árat", other: "{0} sekundda árat" } } } } }, { locale: "se-SE", parentLocale: "se" }];\n});\n\n//////////////////\n// WEBPACK FOOTER\n// /Users/alexander/vvv/www/wordpress-default/public_html/wp-content/plugins/wordpress-seo/node_modules/react-intl/locale-data/se.js\n// module id = 513\n// module chunks = 58\n\n//# sourceURL=webpack:////Users/alexander/vvv/www/wordpress-default/public_html/wp-content/plugins/wordpress-seo/node_modules/react-intl/locale-data/se.js?')}});