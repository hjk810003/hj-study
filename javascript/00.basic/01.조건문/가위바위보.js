// 가위바위보

// 컴퓨터가 내는거
const 랜덤 = Math.floor(Math.random() * 3);
const 컴퓨터 = ['가위', '바위', '보']
const 기계 = 컴퓨터[랜덤]
console.log(`기계 : ${기계}`)

// 사람 이력
const 사람 = prompt()
console.log(`사람 : ${사람}`)

if (사람 === '가위') {
  if (기계 === '가위') {
     console.log('비김');
  } else if (기계 === '바위') {
    console.log('기계가 이김');
  } else if (기계 === '보') {
    console.log('사람이 이김');
  }
} else if (사람 === '바위') {
  if (기계 === '가위') {
     console.log('사람이 이김');
  } else if (기계 === '바위') {
    console.log('비김');
  } else if (기계 === '보') {
    console.log('기계가 이김');
  } 
} else if (사람 === '보') {
  if (기계 === '가위') {
     console.log('기계가 이김');
  } else if (기계 === '바위') {
    console.log('사람이 이김');
  } else if (기계 === '보') {
    console.log('비김');
  } 
}
