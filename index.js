function superbowlWin(record) {
  const result = record.find(game => game.result === "W");
  return result ? result.year : undefined;
}
