export const creatBoarder = () => {
  let board = [];
  for (let y = 0; y < 5; y++) {
    let row = [];
    for (let x = 0; x < 5; x++) {
      row.push(Math.random() > 0.25);
    }
    board.push(row);
  }
  return board;
};
