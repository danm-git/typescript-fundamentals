"use strict";
var Colors;
(function (Colors) {
    Colors[Colors["RED"] = 0] = "RED";
    Colors[Colors["BLUE"] = 1] = "BLUE";
    Colors[Colors["GREEN"] = 2] = "GREEN";
})(Colors || (Colors = {}));
var myColor = Colors.GREEN;
var Days;
(function (Days) {
    Days[Days["MONDAY"] = 0] = "MONDAY";
    Days[Days["TUESDAY"] = 1] = "TUESDAY";
    Days[Days["WEDNESDAY"] = 2] = "WEDNESDAY";
    Days[Days["THURSDAY"] = 3] = "THURSDAY";
    Days[Days["FRIDAY"] = 4] = "FRIDAY";
    Days[Days["SATURDAY"] = 5] = "SATURDAY";
    Days[Days["SUNDAY"] = 6] = "SUNDAY";
})(Days || (Days = {}));
var getDailyMessage = function (day) {
    switch (day) {
        case Days.MONDAY:
            return "Monday Monday!!!";
        case Days.TUESDAY:
            return "League Night!!!";
    }
};
console.log(Days);
console.log(getDailyMessage(Days.MONDAY));
console.log(getDailyMessage(Days.TUESDAY));
console.log(getDailyMessage(Days.WEDNESDAY));
