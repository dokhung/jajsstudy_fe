# CSS Study

React, TypeScript, Tailwind CSS, Redux Toolkit, React Router 학습용 프로젝트입니다.

```sh
npm install
npm run dev
```

화면: http://localhost:3000

## 컴포넌트와 경로 등록

1. `src/components`에 `.tsx` 컴포넌트를 작성합니다.
2. `src/router.tsx`에서 컴포넌트를 import합니다.
3. 같은 파일의 `componentRoutes`에 `title`, `path`, `element`를 등록합니다.

```tsx
import { Login } from "./components/Login";

// componentRoutes 배열의 항목
{
  title: "Login",
  path: "/components/Login",
  element: <Login />,
}
```

첫 페이지는 이 목록으로 미리보기와 제목 링크를 표시합니다.
제목을 누르면 같은 path에 연결된 element가 상세 페이지에 표시됩니다.
새 컴포넌트는 파일을 만드는 것에 더해 라우터 목록에 등록해야 합니다.
각 path는 중복되지 않게 지정하세요. props는 element에 직접 전달합니다.

- `src/router.tsx`: 경로와 컴포넌트 연결
- `src/pages/Home.tsx`: 첫 페이지 네모칸 목록
- `src/components`: 직접 만드는 컴포넌트
- `src/gallery`: 미리보기 공통 코드
- `src/main.tsx`: Redux Provider, BrowserRouter 연결

`npm run build`로 타입 검사와 배포 빌드를 실행합니다.
