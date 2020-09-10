function incrementalBackup(lastBackupTime, changes) {
  const fileId = [];
  for (let change of changes) {
    if (change[0] > lastBackupTime) {
      if (!fileId.includes(change[1])) {
        fileId.push(change[1]);
      }
    }
  }
  return fileId.sort((a, b) => a - b);
}
console.log(
  incrementalBackup(461620205, [
    [461620203, 1],
    [461620204, 2],
    [461620205, 6],
    [461620206, 5],
    [461620207, 3],
    [461620207, 5],
    [461620208, 1],
  ])
);
