// 성적

let 점수입력창 = prompt('점수를 입력해주세요.');
const 점수 = parseInt(점수입력창)
console.log(점수입력창)
console.log(점수)
switch (점수) {
  case 점수 >= 90:
    console.log('성적 : A');
    break;
  case 점수 >= 80:
    console.log('성적 : B');
    break;
  case 점수 >= 70:
    console.log('성적 : C');
    break;
  case 점수 >= 60:
    console.log('성적 : D');
    break;
  default:
    console.log('재수강')
}
