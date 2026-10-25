import type { ReactNode } from "react";

type WindowFrameProps = {
  children: ReactNode;
  title: string;
  meta?: string;
  className?: string;
  toolbar?: ReactNode;
};

export function WindowFrame({
  children,
  title,
  meta,
  className = "",
  toolbar,
}: WindowFrameProps) {
  return (
    <div className={`window-frame ${className}`}>
      <div className="window-titlebar">
        <div className="window-dots" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <div className="window-title">
          <span>{title}</span>
          {meta ? <span className="window-meta">{meta}</span> : null}
        </div>
        <div className="window-toolbar">{toolbar}</div>
      </div>
      {children}
    </div>
  );
}

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  titleId: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  titleId,
}: SectionHeadingProps) {
  return (
    <header className="section-heading">
      <p className="section-eyebrow">
        <span aria-hidden="true">{"// "}</span>
        {eyebrow}
      </p>
      <div className="section-heading-row">
        <h2 id={titleId}>{title}</h2>
        <p>{description}</p>
      </div>
    </header>
  );
}

export function Tags({ items }: { items: string[] }) {
  return (
    <ul className="tag-list" aria-label="Technologies">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
