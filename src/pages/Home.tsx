import type { ReactElement } from "react";
import ComponentBox from "../gallery/ComponentBox";
import ComponentPreview from "../gallery/ComponentPreview";

type HomeProps = {
  components: { title: string; path: string; element: ReactElement }[];
};

export default function Home({ components }: HomeProps) {
  return (
    <main className="mx-auto grid max-w-6xl grid-cols-2 gap-x-6 gap-y-8 p-6 sm:grid-cols-3 lg:grid-cols-4">
      {components.map(({ title, path, element }) => (
        <ComponentBox key={path} title={title} to={path}>
          <ComponentPreview>{element}</ComponentPreview>
        </ComponentBox>
      ))}
      {Array.from(
        { length: Math.max(0, 12 - components.length) },
        (_, index) => (
          <ComponentBox
            key={`empty-${index}`}
            title={`컴포넌트 ${components.length + index + 1}`}
          />
        ),
      )}
    </main>
  );
}
