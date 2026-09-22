import { Component, Suspense } from "react";
import type { ErrorInfo, ReactNode } from "react";

type Props = { children: ReactNode };

// 한 컴포넌트의 렌더링 오류가 다른 칸까지 가리지 않게 합니다.
class PreviewErrorBoundary extends Component<Props, { hasError: boolean }> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("컴포넌트 미리보기 오류", error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-3 text-center text-xs text-red-600">
          미리보기를 표시할 수 없습니다.
          <br />
          컴포넌트 코드와 필요한 props를 확인해주세요.
          <button
            className="mt-3 block w-full underline"
            onClick={() => this.setState({ hasError: false })}
          >
            다시 시도
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

export default function ComponentPreview({ children }: Props) {
  return (
    <PreviewErrorBoundary>
      <Suspense
        fallback={<span className="text-xs text-gray-400">불러오는 중…</span>}
      >
        {children}
      </Suspense>
    </PreviewErrorBoundary>
  );
}
