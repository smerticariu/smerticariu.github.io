import { Button, Container } from "@/components/ui";
import { Icon } from "@/components/Icon";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-radial-lime">
      <div className="bg-grid absolute inset-0 opacity-40" />
      <Container className="relative grid min-h-[60vh] place-items-center py-24 text-center">
        <div>
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-lime/25 bg-lime-deep/40 text-lime">
            <Icon name="battery" size={32} />
          </div>
          <p className="mt-6 font-mono text-5xl font-semibold text-gradient tnum">404</p>
          <h1 className="mt-4 text-2xl font-semibold text-fg">This page is running on empty</h1>
          <p className="mx-auto mt-3 max-w-md text-muted">
            The page you&apos;re looking for doesn&apos;t exist or has moved. Let&apos;s get
            you back to a charged state.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="/" icon="arrow">Back home</Button>
            <Button href="/download" variant="secondary" icon="download">Download</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
