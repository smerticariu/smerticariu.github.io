import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

/** Renders trusted markdown content with the site's prose styling. */
export function Markdown({ children }: { children: string }) {
  return (
    <div className="prose-bg">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{children}</ReactMarkdown>
    </div>
  );
}
