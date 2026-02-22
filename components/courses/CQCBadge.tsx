import type { CQCMapping } from "@/lib/courses";

interface CQCBadgeProps {
  mapping: CQCMapping;
  variant?: "compact" | "full";
}

export function CQCBadge({ mapping, variant = "compact" }: CQCBadgeProps) {
  const pillBg = mapping.isPrimary ? "#2b7925" : "#E8F5E9";
  const pillText = mapping.isPrimary ? "#ffffff" : "#2b7925";
  const borderColour = mapping.isPrimary ? "#2b7925" : "#e5e7eb";

  if (variant === "compact") {
    return (
      <span className="inline-flex items-center gap-1.5">
        <span
          className="inline-flex items-center justify-center rounded-full px-2 py-0.5 text-xs font-bold leading-tight"
          style={{ backgroundColor: pillBg, color: pillText }}
        >
          {mapping.code}
        </span>
        <span className="text-sm text-body-text">{mapping.statement}</span>
      </span>
    );
  }

  return (
    <div
      className="rounded-lg p-4"
      style={{
        backgroundColor: mapping.isPrimary ? "#f0faf0" : "#ffffff",
        border: `1px solid ${borderColour}`,
        borderLeftWidth: "4px",
        borderLeftColor: borderColour,
      }}
    >
      <div className="mb-2 flex items-center gap-2">
        <span
          className="inline-flex items-center justify-center rounded-full px-2.5 py-0.5 text-xs font-bold leading-tight"
          style={{ backgroundColor: pillBg, color: pillText }}
        >
          {mapping.code}
        </span>
        <span className="font-bold text-dark">{mapping.statement}</span>
        {mapping.isPrimary && (
          <span className="text-xs font-bold uppercase tracking-widest text-lifecare-green">
            Primary
          </span>
        )}
      </div>
      <p className="mb-0 text-sm leading-relaxed text-body-text">
        &ldquo;{mapping.weStatement}&rdquo;
      </p>
    </div>
  );
}
