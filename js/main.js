// random number 0~50

const startButton = document.querySelector(".start-btn");
let bingoWrap = document.querySelector(".bingo-wrap");
startButton.addEventListener("click", buttonCreate);

function buttonCreate() {
  // 클릭할때 buttonwrap 초기화
  bingoWrap.innerHTML = "";
  let array = [];

  // array length 가 25가 될때까지 반복
  while (array.length < 25) {
    let num = Math.floor(Math.random() * 51); // 0~ 50 까지 숫자 생성
    // 배열에 중복값 없으면 push
    if (array.indexOf(num) == -1) {
      array.push(num);
    }
  }

  // 배열 길이만큼 버튼 생성(25개)
  for (let i = 0; i < array.length; i++) {
    let col = parseInt(i / 5);
    let row = i % 5;
    let btn = `<button type="button" class="bingo-btn"data-col=${col} data-row=${row}>${array[i]}</button>`;
    bingoWrap.innerHTML += btn;
  }

  const BingoBtn = document.querySelectorAll(".bingo-btn");
  BingoBtn.forEach((button) => {
    button.addEventListener("click", (e) => {
      let rowArray = [];
      let currentRow = e.target.dataset.row;
      let btnRow = button.dataset.row;
      console.log(currentRow, btnRow);

      let check = false;

      if (currentRow === btnRow) {
        check = true;
        e.target.classList.add("active");

        rowArray.push(check);
        console.log(rowArray);
      }
    });
  });
}
