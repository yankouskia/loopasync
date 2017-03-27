const raf = require('raf');

module.exports = function(array, func, parts) {
  const arrayLen = array.length;
  parts = (parts || Math.log2(arrayLen)) | 0;
  const onlyPart = (arrayLen / parts) | 0;
  let previous = 0;

  function loopPart() {
    for (let i = previous, len = Math.min(arrayLen, previous + onlyPart); i < len; i++) {
      func(array[i]);
    }

    previous += onlyPart;
    if (previous >= arrayLen) return;
    raf(loopPart);
  }

  raf(loopPart);
}
