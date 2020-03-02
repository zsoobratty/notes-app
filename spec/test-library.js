

const assertion = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    }
  },
  isFalse: function (assertionToCheck) {
    if (assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not falsey");
    }
  },
};

const matcher = (expectation) => ({
  toBe: function (assertionToCheck) {
    if (expectation === assertionToCheck) {
      console.log('Pass')
      return true
    } else {
      console.log('Fail')
      return false
    }
  }
});