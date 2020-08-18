function reverse_and_combine_text(str) {
  let strArray = str.split(" ");
  let combined = [];
  function reverse(word) {
    return word.split("").reverse().join("");
  }
  while (strArray.length > 1) {
    strArray = strArray.map((word) => reverse(word));
    for (let i = 0; i < strArray.length; i += 2) {
      combined.push(strArray[i] + (strArray[i + 1] || ""));
    }
    strArray = combined;
    combined = [];
  }
  return strArray[0];
}
