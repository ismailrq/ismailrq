"use client";

import { ChevronDown, Download } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";

type CvOption = { language: string; label: string; href: string | null };

export function CvMenu({ options, placement }: { options: CvOption[]; placement: "down" | "up" }) {
  const [open, setOpen] = useState(false);
  const menu = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const optionsId = useId();

  useEffect(() => {
    if (!open) return;

    function closeOutside(event: PointerEvent) {
      if (event.target instanceof Node && !menu.current?.contains(event.target)) setOpen(false);
    }

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        trigger.current?.focus();
      }
    }

    document.addEventListener("pointerdown", closeOutside);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeOutside);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  return (
    <div className="cv-dropdown" data-placement={placement} data-open={open} ref={menu}
      onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false); }}>
      <button type="button" className="cv-trigger" aria-label="Choose CV language" aria-expanded={open} aria-controls={optionsId}
        ref={trigger} onClick={() => setOpen(current => !current)}>
        CV <ChevronDown size={13} aria-hidden="true" />
      </button>
      {open ? <div className="cv-options" id={optionsId}>
        {options.map(option => option.href ? (
          <a className="cv-option" key={option.language} href={option.href} hrefLang={option.language} download onClick={() => setOpen(false)} aria-label={`Download CV in ${option.label}`}>
            <span lang={option.language}>{option.label}</span>
            <Download size={14} aria-hidden="true" />
          </a>
        ) : (
          <span className="cv-option cv-option-unavailable" key={option.language} aria-disabled="true">
            <span lang={option.language}>{option.label}</span>
            <small>Coming soon</small>
          </span>
        ))}
      </div> : null}
    </div>
  );
}
