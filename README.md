# 프로젝트 소개

![luluisher](https://velog.velcdn.com/images/sorin44/post/223b6137-92f2-414f-bc37-b78b8b69381c/image.jpg)

## 클론코딩 사이트
룰루레몬(https://shop.lululemon.com)

## 작업 기간
2022.05.23 ~ 2022. 06. 03

## 팀명
신난아이셔(luluIsher)

## 팀원 소개

| 개발 분야  | 팀원 명                        |
| ---------- | ------------------------------ |
| 프론트엔드 | 이해용, 김형겸, 장수연, 안현정 |
| 백엔드     | 이예은, 최혜인                 |

## 기술 스택
FrontEnd - HTML/CSS, JavaScript, React.js , React-Router, React-Router-DOM, Sass

BackEnd - Django

## 프론트 엔드 업무 파트
이해용 - Navbar, Main

김형겸 - 물품 리스트, footer

안현정 - 물품 세부(+리뷰)

장수연 - 회원가입/로그인, 장바구니

## 협업 도구
trello
![trello](https://velog.velcdn.com/images/sorin44/post/6b6bd942-0996-4770-b568-997a0842afa3/image.png)

## Coding Convention

1. 들여쓰기는 tab, 혹은 공백 문자 2개를 사용한다.
2. 변수와 함수, className 명명 규칙은 `Camel Case`를 사용한다.
3. 값이 변하지 않는 변수는 const를, 값이 변하는 변수는 let을 사용하여 선언하고 var는 절대로 사용하지 않는다.
4. 함수 선언시 arrow function`(() => {})` 위주로 사용한다.
5. 주석은 코드 설명보다는 수정 사항이나 미구현 사항을 기재할 때 사용하기로 한다.
6. 함수 네이밍 규칙은 해당 함수의 동작을 앞에, 동작이 적용될 태그를 뒤에 위치하게 작명한다. (ex) handleInput)
7. component의 전체를 감싸는 최상단 태그의 className은 컴포넌트 이름으로 명명한다. (ex) product, productlist)
8. scss 파일명은 컴포넌트 이름과 동일하게 한다.
9. 인라인 스타일링은 지양한다.



## 신난아이셔 주요 기능 소개
**Navbar**
```
- 상수데이터를 만든 후 map method를 사용하여 Navigation bar 정리
- 조건부 렌더링을 사용하여 token을 받았을 때와 받지 못했을 때 나타나는 화면을 다르게 설정
- 각 항목에 맞는 quary parameter를 설정하여 클릭시 상품에 맞는 query parameter인 상품리스트 페이지 이동
```

**Main**
```
- carousel 구현으로 버튼 클릭 또는 원하는 위치 클릭하여 이동 가능하게 설정
- useEffect를 사용한 setInterval 설정으로 5초마다 carousel 화면 전환가능하게 구현
```

**footer**

```
- footer category title => footer category 를 배열의 객체 안에 객체로 상수 데이터를 구현하여 다중 mapping 사용
- hover시 red underline transition 
```

**물품 리스트**

```
-  useLocation을 활용해 location.search 값이 존재할 경우 &로, 존재하지 않을 경우 ?로 각 query parameter를 변경하여 카테고리 별 필터링 기능 구
-  URLSearchParams 인터페이스를 사용하여 Navbar에서 menu query parameter를 변경했을 시에 product list 컴포넌트의 title이 value값으로 변경되게 구현
```

**회원가입/로그인**
```
- 회원가입/로그인 양식 컴포넌트 조건부 렌더링
- JWT를 이용한 로그인 인증 구현
```

**물품 세부**
```
- 백엔드에서 GET요청으로 데이터를 받아와서 데이터 바인딩
- for문을 사용하여 색상과 사이즈 데이터를 추출하고 map함수를 사용하여 상품의 해당 색과 사이즈를 보여줌
- 유저가 클릭한 색상과 데이터에 있는 색상이 같을 때, 그에 따른 상품 이미지를 보여줌
- 유저가 선택한 색상과 사이즈를 e.target.style.backgroundColor, e.target.innerHTML를 이용하여 저장
- 색상과 사이즈 모두를 선택해야 ADD TO BAG 버튼 클릭했을 때 모달창 띄우고 하나라도 선택을 안한 경우 alert창 띄우기
- 모달창에는 유저가 선택한 색상, 사이즈 ,수량과 그에 따른 가격을 반영하고 VIEW BAG & CHECKOUT버튼 누르면 선택한 정보 POST 요청으로 보내고 장바구니 페이지로 이동
- 리뷰버튼 클릭 시, 리뷰란으로 스크롤 이동(useRef 사용)
```

**리뷰**
```
- 로그인을 한 경우에만 Review버튼 클릭 시 리뷰를 쓸 수 있는 모달창 띄우기
- map을 이용하여 별점 구현
- 별점체크와 리뷰내용을 한 글자 이상 입력해야 버튼 활성화
- 리뷰 작성 후 버튼 누르면 백엔드에 POST요청
- 백엔드에 DELETE요청을 보내서 본인이 쓴 리뷰만 삭제 가능하도록 함
```

**장바구니**
```
- 장바구니 상품 개수에 따른 상품 목록/빈 장바구니 페이지 조건부 렌더링
- filter 메서드를 활용해 페이지에서 상품들을 일시적으로 숨겨주는 'save for later'버튼 기능 구현
```

## 시연영상
[![시연영상](https://img.youtube.com/vi/W34uDKZyf1s/0.jpg)](https://www.youtube.com/embed/W34uDKZyf1s)

(클릭하시면 유튜브에서 시청 가능합니다.)

## 느낀점
- 필수 구현사항에 모든 부분을 다 할 수 없어서 아쉬웠다.
- 구현한 코드의 이해를 하는 것에 정리가 많이 필요하다고 생각이 들었다.
- 클론 코딩을 하면서 몰랐던 코드를 적용하는 과정에서 깊게 이해할 수 있는 좋은 시간이었다.
- 기능을 구현하는 것도 중요하지만 팀 프로젝트에서 커뮤니케이션이 얼마나 중요한지 알게 되었다.
- 처음 PM을 담당하며 어리숙한 면이 있었으나 이제 어떻게 팀을 이끌어 나가는지에 대해 알 수 있게 되었다.
