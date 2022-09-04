Part1 /* 
컴포넌트 사용하면 좋을 때
1. 반복적인 HTML 축약
2. 큰페이지
3. 자주 변경되는 것


컴포넌트 사용 방법
1. 다른 함수 밖에 function Modal(){} 함수 만들기
2. return() 안에 html 담기
3. <컴포넌트 함수명></컴포넌트 함수명> 쓰기
* 의미없는 div 는 <> </>

함수 컴포넌트 만들기
방법1
function Modal(){
  return ( <div></div> )
}

방법2
let Modal = () => {
  return ( <div></div>) 
} */

let [따봉, 따봉변경] = useState(0, 0, 0)
// 좋아요 버튼 클릭시 따봉 숫자 올라가도록
<h4>
  { 글제목[i] }
  <span onclick={() => {
    let copy= [...따봉];
    copy[i] = copy[i]+1;
    따봉변경(copy)
  }}>좋아요 </span> {따봉[i]}
</h4>
