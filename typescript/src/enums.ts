enum Colors {
  RED,
  BLUE,
  GREEN,
}

let myColor: Colors = Colors.GREEN;

enum Days {
  MONDAY,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAY,
  SUNDAY,
}

const getDailyMessage = (day: Days) => {
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
