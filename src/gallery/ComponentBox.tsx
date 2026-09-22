import type { ReactNode } from "react";
import { Link } from "react-router-dom";

type ComponentBoxProps = {
  title: string;
  children?: ReactNode;
  to?: string;
};

export default function ComponentBox({
  title,
  children,
  to,
}: ComponentBoxProps) {
  return (
    <section>
      <div className="flex aspect-square items-center justify-center overflow-auto border border-gray-300 bg-white p-4">
        {children}
      </div>
      <h2 className="mt-3 text-center text-sm text-gray-700">
        {to ? (
          <Link
            to={to}
            className="underline underline-offset-4 hover:text-blue-600"
          >
            {title}
          </Link>
        ) : (
          title
        )}
      </h2>
    </section>
  );
}
