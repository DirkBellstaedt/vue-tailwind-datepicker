import { d as r } from "./entry.3468fba7.mjs";
import "vue";
var s = {
  name: "bg",
  weekdays: "\u043D\u0435\u0434\u0435\u043B\u044F_\u043F\u043E\u043D\u0435\u0434\u0435\u043B\u043D\u0438\u043A_\u0432\u0442\u043E\u0440\u043D\u0438\u043A_\u0441\u0440\u044F\u0434\u0430_\u0447\u0435\u0442\u0432\u044A\u0440\u0442\u044A\u043A_\u043F\u0435\u0442\u044A\u043A_\u0441\u044A\u0431\u043E\u0442\u0430".split("_"),
  weekdaysShort: "\u043D\u0435\u0434_\u043F\u043E\u043D_\u0432\u0442\u043E_\u0441\u0440\u044F_\u0447\u0435\u0442_\u043F\u0435\u0442_\u0441\u044A\u0431".split("_"),
  weekdaysMin: "\u043D\u0434_\u043F\u043D_\u0432\u0442_\u0441\u0440_\u0447\u0442_\u043F\u0442_\u0441\u0431".split("_"),
  months: "\u044F\u043D\u0443\u0430\u0440\u0438_\u0444\u0435\u0432\u0440\u0443\u0430\u0440\u0438_\u043C\u0430\u0440\u0442_\u0430\u043F\u0440\u0438\u043B_\u043C\u0430\u0439_\u044E\u043D\u0438_\u044E\u043B\u0438_\u0430\u0432\u0433\u0443\u0441\u0442_\u0441\u0435\u043F\u0442\u0435\u043C\u0432\u0440\u0438_\u043E\u043A\u0442\u043E\u043C\u0432\u0440\u0438_\u043D\u043E\u0435\u043C\u0432\u0440\u0438_\u0434\u0435\u043A\u0435\u043C\u0432\u0440\u0438".split("_"),
  monthsShort: "\u044F\u043D\u0440_\u0444\u0435\u0432_\u043C\u0430\u0440_\u0430\u043F\u0440_\u043C\u0430\u0439_\u044E\u043D\u0438_\u044E\u043B\u0438_\u0430\u0432\u0433_\u0441\u0435\u043F_\u043E\u043A\u0442_\u043D\u043E\u0435_\u0434\u0435\u043A".split("_"),
  weekStart: 1,
  ordinal: function(_) {
    var e = _ % 100;
    if (e > 10 && e < 20)
      return _ + "-\u0442\u0438";
    var t = _ % 10;
    return t === 1 ? _ + "-\u0432\u0438" : t === 2 ? _ + "-\u0440\u0438" : t === 7 || t === 8 ? _ + "-\u043C\u0438" : _ + "-\u0442\u0438";
  },
  formats: {
    LT: "H:mm",
    LTS: "H:mm:ss",
    L: "D.MM.YYYY",
    LL: "D MMMM YYYY",
    LLL: "D MMMM YYYY H:mm",
    LLLL: "dddd, D MMMM YYYY H:mm"
  },
  relativeTime: {
    future: "\u0441\u043B\u0435\u0434 %s",
    past: "\u043F\u0440\u0435\u0434\u0438 %s",
    s: "\u043D\u044F\u043A\u043E\u043B\u043A\u043E \u0441\u0435\u043A\u0443\u043D\u0434\u0438",
    m: "\u043C\u0438\u043D\u0443\u0442\u0430",
    mm: "%d \u043C\u0438\u043D\u0443\u0442\u0438",
    h: "\u0447\u0430\u0441",
    hh: "%d \u0447\u0430\u0441\u0430",
    d: "\u0434\u0435\u043D",
    dd: "%d \u0434\u0435\u043D\u0430",
    M: "\u043C\u0435\u0441\u0435\u0446",
    MM: "%d \u043C\u0435\u0441\u0435\u0446\u0430",
    y: "\u0433\u043E\u0434\u0438\u043D\u0430",
    yy: "%d \u0433\u043E\u0434\u0438\u043D\u0438"
  }
};
r.locale(s, null, !0);
export {
  s as default
};
