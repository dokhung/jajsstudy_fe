import type { ReactElement } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { Login } from "./components/Login";
import ComponentPreview from "./gallery/ComponentPreview";
import Home from "./pages/Home";

// 새 컴포넌트를 import하고 이 목록에 추가하세요.
// 첫 페이지의 미리보기, 제목 링크, 상세 페이지가 이 설정을 함께 사용합니다.
export const componentRoutes: {
  title: string;
  path: string;
  element: ReactElement;
}[] = [
  {
    title: "Login",
    path: "/components/Login",
    element: <Login />,
  },
];

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home components={componentRoutes} />} />
      {componentRoutes.map(({ title, path, element }) => (
        <Route
          key={path}
          path={path}
          element={
            <main className="p-6">
              <Link
                to="/"
                className="text-sm text-gray-600 underline underline-offset-4"
              >
                ← 목록으로
              </Link>
              <h1 className="my-6 text-xl font-medium">{title}</h1>
              <ComponentPreview key={path}>{element}</ComponentPreview>
            </main>
          }
        />
      ))}
      <Route
        path="*"
        element={
          <main className="p-6">
            <p className="mb-4">등록되지 않은 페이지입니다.</p>
            <Link to="/" className="underline">
              ← 목록으로
            </Link>
          </main>
        }
      />
    </Routes>
  );
}
