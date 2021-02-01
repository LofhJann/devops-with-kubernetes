const uuid = require('uuid');
const randomString = uuid.v4();

const printString = () => {
  const ts = new Date().toISOString()
  console.log(ts + ':', randomString);

  setTimeout(printString, 5000);
}

printString()

