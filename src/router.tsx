import type { ReactElement } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { Login } from "./components/Login";
import ComponentPreview from "./gallery/ComponentPreview";
import Home from "./pages/Home";
import {LoginSoloPlay} from "./components/Login_soloPlay.tsx";
import {LoginPractice} from "./components/LoginPractice.tsx";
import {LoginPractice2} from "./components/LoginPractice2.tsx";
import {LoginPractice3} from "./components/LoginPractice3.tsx";
import {LoginPractice4} from "./components/LoginPractice4.tsx";
import {LoginPractice5} from "./components/LoginPractice5.tsx";
import {LoginPractice6} from "./components/LoginPractice6.tsx";
import LoginPractice7 from "./components/LoginPractice7.tsx";
import {LoginPractice8} from "./components/LoginPractice8.tsx";
import {LoginPractice9} from "./components/LoginPractice9.tsx";

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
    {
        title:"LoginSolo",
        path:"/components/Login_soloPlay",
        element:<LoginSoloPlay/>,
    },
    {
        title:"LoginPractice",
        path:"/components/LoginPractice",
        element:<LoginPractice/>,
    },
    {
        title:"LoginPractice2",
        path:"/components/LoginPractice2",
        element:<LoginPractice2/>,
    },
    {
        title:"LoginPractice3",
        path:"/components/LoginPractice3",
        element:<LoginPractice3/>,
    },
    {
        title:"LoginPractice4",
        path:"/components/LoginPractice4",
        element:<LoginPractice4/>,
    },
    {
        title:"LoginPractice5",
        path:"/components/LoginPractice5",
        element:<LoginPractice5/>,
    },
    {
        title:"LoginPractice6",
        path:"/components/LoginPractice6",
        element:<LoginPractice6/>,
    },
    {
        title:"LoginPractice7",
        path:"/components/LoginPractice7",
        element:<LoginPractice7/>,
    },
    {
        title:"LoginPractice8",
        path:"/components/LoginPractice8",
        element:<LoginPractice8/>,
    },
    {
        title:"LoginPractice9",
        path:"/components/LoginPractice9",
        element:<LoginPractice9/>,
    }

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
                ← Back List
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
