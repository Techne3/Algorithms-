function ProCat(pros, preferences) {
  //   let prosPreferences = {};
  //   let proPrefs = [];

  //   for (let i = 0; i < pros.length; i++) {
  //     for (let j = 0; i < preferences[i].length; j++) {
  //       if (prosPreferences.hasOwnProperty(preferences[i][j])) {
  //         prosPreferences[preferences[i][j]].push(pros[i]);
  //       } else {
  //         prosPreferences[preferences[i][j]] = [pros[i]];
  //       }
  //     }
  //   }

  //   for (const prop in prosPreferences) {
  //     prosPreferences.push([[prop], [...prosPreferences[prop]]]);
  //   }

  //   proPrefs = proPrefs.sort((pref1, pref2) => {
  //     const pref1Lower = pref1[0][0].toLowerCase();
  //     const pref2Lower = pref2[0][0].toLowerCase();

  //     if (pref1Lower > pref2Lower) {
  //       return 1;
  //     }
  //     if (pref1Lower < pref2Lower) {
  //       return -1;
  //     }
  //     return 0;
  //   });
  //   return proPrefs;

  const map = {};
  const result = [];

  for (let i = 0; i < preferences.length; i++) {
    const prefs = preferences[i];
    const pro = pros[i];
    for (let pref of prefs) {
      if (map[pref]) {
        map[pref].push(pro);
      } else {
        map[pref] = [pro];
      }
    } //for
  } //for

  const sortedPrefs = [...Object.keys(map)].sort();
  for (let pref of sortedPrefs) {
    result.push([[pref], map[pref]]);
  }

  return result;
}
console.log(
  ProCat(
    ["Jack", "Leon", "Maria"],
    [
      ["Computer Repair", "Handyman", "House Cleaning"],
      ["Computer lessons", "Computer Repair", "Data recovery service"],
      ["Computer lessons", "House cleaning"],
    ]
  )
);
