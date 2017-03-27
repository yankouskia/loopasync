const raf = require('raf');

module.exports = function(collection, iteratee, parts) {
  const collectionLen = collection.length;
  parts = (parts || Math.log2(collectionLen)) | 0;
  const onlyPart = (collectionLen / parts) | 0;
  let previous = 0;

  function loopPart() {
    for (let i = previous, len = Math.min(collectionLen, previous + onlyPart); i < len; i++) {
      iteratee(collection[i]);
    }

    previous += onlyPart;
    if (previous >= collectionLen) return;
    raf(loopPart);
  }

  raf(loopPart);
}
