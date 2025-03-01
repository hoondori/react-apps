# 🎬 MovieApp (React 기반 영화 목록 사이트)

## 1️⃣ Overview

MovieApp은 YTS API를 활용하여 최신 영화 목록을 제공하는 React 기반의 웹 애플리케이션입니다. 사용자는 영화 목록을 탐색하고, 개별 영화의 상세 정보를 확인할 수 있습니다.

## 2️⃣ 주요 기능

✅ 최신 영화 목록 조회
✅ 개별 영화의 상세 정보 확인 (제작연도, 러닝타임, 장르, 평점 등)
✅ React Router를 활용한 페이지 이동
✅ 반응형 UI 제공

## 3️⃣ 구현 및 디자인 상세

### 📌 기술 스택

- **Framework**: React (Vite 사용)
- **Language**: JavaScript (JSX 기반)
- **Styling**: CSS Modules
- **Data Fetching**: Axios (RESTful API 사용)

### 📂 프로젝트 구조

```
src/
├── App.css
├── App.jsx
├── assets
│   └── react.svg
├── components
│   ├── Movie.jsx
│   └── Navbar.jsx
├── index.css
├── main.jsx
├── pages
│   ├── About.jsx
│   ├── Home.jsx
│   ├── MovieDetail.jsx
│   └── NotFound.jsx
└── styles
    ├── Home.css
    ├── Movie.css
    └── Navbar.css
```

### 🎨 디자인 및 CSS 적용

이 프로젝트에서는 **반응형 UI**와 **재사용 가능한 컴포넌트** 설계를 중점으로 디자인되었습니다.

#### 📌 주요 CSS 적용 사항

- **고정된 네비게이션 바**: 화면의 크기에 따라 위치가 조정되며, 작은 화면에서는 하단에 위치하도록 설정.
- **그리드 기반 영화 목록 레이아웃**: `grid-template-columns`를 활용하여 반응형 그리드를 구성.
- **카드 스타일 영화 아이템**: 박스 쉐도우를 적용하여 입체감 있는 디자인 구현.
- **로딩 상태 메시지**: 데이터를 불러오는 동안 사용자에게 "Loading movies..." 메시지를 표시하여 피드백 제공.

### 📚 LESSONS LEARNED

✅ **반응형 디자인**

- CSS Grid와 Flexbox를 적절히 조합하여 다양한 해상도에서도 자연스럽게 조정되는 UI를 구현함.
- `@media screen and (max-width: 1090px)`를 활용하여 모바일 환경에서도 네비게이션과 영화 목록이 최적화되도록 설계.

✅ **컴포넌트 재사용성**

- `Navbar.jsx`와 `Movie.jsx`를 독립적인 컴포넌트로 분리하여 유지보수성과 가독성을 높임.
- `Movie` 컴포넌트가 재사용될 수 있도록 `props`를 활용하여 동적으로 영화 정보를 렌더링.

✅ **API 데이터 핸들링 (Axios 적용)**

- `fetch` 대신 **Axios**를 사용하여 YTS API 데이터를 가져옴.
- `useEffect`를 활용하여 컴포넌트 마운트 시 데이터를 비동기적으로 불러옴.
- `try-catch` 구문을 활용하여 네트워크 오류에 대한 예외 처리를 강화함.
- 로딩 상태를 반영하여 사용자 경험을 개선함 (로딩 스피너 대신 "Loading movies..." 메시지를 표시하여 사용자가 데이터를 기다리는 동안 피드백 제공).

✅ **스타일 최적화**

- `box-shadow`를 적절히 활용하여 카드 UI에 입체감을 부여.
- `position: fixed`와 `z-index`를 조합하여 네비게이션 바가 항상 보이도록 유지.

### 📡 API 사용

이 프로젝트는 **YTS API**를 활용하여 영화 데이터를 가져옵니다.

- API URL: `https://yts.mx/api/v2/list_movies.json`
- 영화 상세 정보 API: `https://yts.mx/api/v2/movie_details.json?movie_id={id}`


