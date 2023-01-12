노트 앱
====================

리액트로 만든 노트 앱

# 1. 앱 소개
<img src="https://user-images.githubusercontent.com/88612153/212002168-dc8adac3-3017-4d4c-a1f4-39d136927e85.png" width="30%" height="40%" alt="initial page"></img>
<img src="https://user-images.githubusercontent.com/88612153/212003468-aa2fb34a-7bdb-4d03-bdde-f451d1ec3662.png" width="30%" height="40%" alt="list page"></img>
<img src="https://user-images.githubusercontent.com/88612153/212003662-9597d721-5831-447f-9527-1336a969970f.png" width="30%" height="40%" alt="CRUD page"></img>

### - 초기화면 / 리스트화면 (메인페이지)
하나의 페이지에서 localStorge에 저장된 값의 유무에 따라 css를 다르게 주어 만듦
- 초기화면: 버튼에 애니매이션 기능 추가    
- 리스트화면: 전체삭제 버튼, 생성버튼, 리스트 클릭시 상세보기 가능, 검색 기능 ( 계획 중 )

### - CRUD 페이지
생성, 읽기, 수정, 삭제 가능한 페이지   
리스트 페이지에서 리스트를 클릭하여 들어왔을 경우 해당 메모 삭제와 수정 가능 ( 진행 중 )

# 2. 배운점
### - react-router-dom
- 페이지를 이동할 때 필요한 리엑트 라이브러리

```jsx
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import ListPage from './pages/ListPage/ListPage';
import WritePage from './pages/WritePage/WritePage';

function App() {
  return (
      <BrowserRouter>
        <Header>
          <Routes>
            <Route path="/" element={<ListPage/>} />
            <Route path="/write" element={<WritePage/>} />
          </Routes>
        </Header>
      </BrowserRouter>
  );
}
```

⭐ BroewserRouter를 사용하여 간단한 라우팅 구현

### - Zustand

- React 상태 관리 라이브러리

상속에 구애받지 않고 변수를 사용하고 싶어 Redux보다 쉽고 요즘 핫하다는 zustand 사용

```jsx
import create from 'zustand';

export const listOrder_store = create((set) => ({
  //초기값 설정
		listOrder : "",                 
  //상태를 변환시키는 함수 정의
    setListOrder : (select) => {    
        set(() => ({ listOrder: select }));
    },
    removeListOrder : () => {
        set(() => ({ listOrder : ""}))
    }
}));

export const inputs_store = create((set) => ({
    title : "",
    setTitle : (select) => {
        set(() => ({ title: select}));
    },
    context : "",
    setContext : (select) => {
        set(() => ({ context: select}));
    },
    removeAllInputs : () => {
        set(() => ({ title: "", context: "" }));
    }
}))
```

⭐ 전역변수가 필요한 순간을 알게 되었고 초기값과 간단한 상태변환함수를 구현할 수 있음

### - 웹 스토리지(Web Storage)

⚠️ 웹 스토리지에 저장된 데이터는 문자열로만 사용 가능함으로 코드에서 변환하여 사용해야 함

---

1. 세션 스토리지(session Storage)

- 각 세션마다 데이터가 개별적으로 저장
ex) 브라우저에서 여러 개의 택을 실행하면 탭마다 개별적으로 저장됨
- 세션을 종료하면 데이터가 자동으로 제거
ex) 브라우저 종료
- 같은 도메인이라도 세션이 다르면 데이터에 접근 불가

2. 로컬 스토리지(local Storage)_사용

- 브라우저에 반영구적을 데이터 저장해주는 저장소
- 브라우저를 종료해도 데이터는 유지되지만 도메인이 다른경우에는 해당 로컬 스토리지에 접근 할 수 없음

<img src="https://user-images.githubusercontent.com/88612153/212082536-3acdbb8d-a852-47ab-a78f-6adeb2408934.png" width="60%" height="40%" alt="initial page"></img>

```jsx
localStorage.setItem('item1', 10);
// 로컬 스토리지에 값 넣기
// 키가 'item1'이고, 값이 10인 데이터를 로컬 스토리지안에 저장

let a = localStorgae.getItem('item1');
// 로컬 스토리지 값 꺼내기
// 로컬 스토리지 안에 'item1'인 키에서 value값을 꺼내 a에 저장
```

⭐ 웹 스토리지의 종류와 그 종류들의 차이점을 알게 되었으며, 그 중 로컬 스토리지를 사용

### - JSON (JavaScript Object Notation)

- javascript 객체 문법으로 구조화된 데이터를 표현하기 위한 문자 기반의 표준 포맷

로컬 스토리지에 title과 context를 저장할 때 JSON을 이용

<img src="https://user-images.githubusercontent.com/88612153/212082999-224c6e56-9808-47f1-9faa-57dd2fd9519b.png" width="50%" height="40%" alt="initial page"></img>
     - 로컬 스토리지 value에 JSON으로 저장한 데이터

```jsx
const prevData = JSON.parse(localStorage.getItem('localMemo') || '[]');
// 문자열로 되어있는 로컬 스토리지 값을 JSON 객체로 parse하여 바꿔줌

const save = () => {
    
    const data = {
      title,
      context,
      date: new Date().toLocaleString(),
    };

    prevData.push(data);
// 메모가 생성될 때마다 로컬 스토리지에서 가져온 값 뒤에 생성된 JSON값을 넣어줌

    localStorage.setItem('localMemo', JSON.stringify(prevData));
// 로컬 스토리지에는 문자열로만 저장이 가능하기 때문에 JSON 데이터를 문자열로 바꾸어 저장

    alert('Saved.');
  }
```

⭐ JSON을 활용하여 데이터를 관리
