import { BRAND, FOOTER } from "@/lib/constants";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-accent-green/10 bg-bg-secondary/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-center sm:flex-row sm:px-6 sm:text-left">
        <div>
          <p className="font-mono-tech text-sm text-text-light">
            <span className="text-accent-green">~/</span>
            {BRAND.shortName.toLowerCase()}
            <span className="text-accent-green">.</span>
          </p>
          <p className="mt-1 text-sm text-text-muted">{FOOTER.line}</p>
        </div>
        <div className="text-sm text-text-muted">
          <p>
            © {year} {BRAND.name}
          </p>
          <p className="mt-1 font-mono-tech text-xs text-text-muted/70">
            {FOOTER.builtWith}
          </p>
        </div>
      </div>
    </footer>
  );
}
