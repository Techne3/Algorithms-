function launch(systemName, stepNumber) {
  const launchCodes = {};

  for (let i = 0; i < systemName.length; i++) {
    if (launchCodes.hasOwnProperty(systemName[i])) {
      if (launchCodes[systemName[i]] >= stepNumber[i]) {
        return false;
      }
      launchCodes[systemName[i]] = stepNumber[i];
    } else {
      launchCodes[systemName[i]] = stepNumber[i];
    }
    return true;
  }
}
console.log(
  launch(
    ["stage_1", "stage_2", "dragon", "stage_1", "stage_2", "dragon"],
    [1, 10, 11, 2, 12, 111]
  )
);
