function getRectangleArea(width, height) {
  if (isNaN(width) || isNaN(height)) {
    throw "Parameter is not a number!";
  }
  console.log(`Rectangle Area: ${width * height}`);
}
try {
  // getRectangleArea(3, 4);
  // getRectangleArea(3, "a");
} catch (e) {
  console.error(e);
}

class UserException {
  constructor(message) {
    this.message = message;
    this.name = "UserException";
  }
}

function getMonthName(monthNum) {
  monthNum = monthNum - 1; // Adjust month number for array index (1 = Jan, 12 = Dec)
  let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  if (months[monthNum]) {
    return months[monthNum];
  } else {
    throw new UserException("InvalidMonthNo");
  }
}

try {
  console.log(getMonthName(11));
  console.log(getMonthName(15));
} catch (e) {
  console.error(e.message);
}

  function readData() {
    let json = '{ "age": 30 }';

    try {
      // ...
      blabla(); // error!
    } catch (e) {
      // ...
      if (e.name != "SyntaxError") {
        throw e; // rethrow (don't know how to deal with it)
      }
    }
  }

  try {
    readData();
  } catch (e) {
    alert("External catch got: " + e); // caught it!
  }
