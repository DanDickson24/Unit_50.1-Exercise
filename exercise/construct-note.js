function constructNote(message, letters) {
    let lettersFrequency = {};
    for (let letter of letters) {
      lettersFrequency[letter] = (lettersFrequency[letter] || 0) + 1;
    }
    for (let letter of message) {
      if (!lettersFrequency[letter]) {
        return false;
      }
      lettersFrequency[letter] -= 1;
    }
    return true;
  }

  