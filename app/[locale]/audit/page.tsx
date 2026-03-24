import { AuditResults } from "@/components/audit/audit-results";

export default async function AuditPage({
  searchParams
}: {
  searchParams: Promise<{ url?: string }>;
}) {
  const { url } = await searchParams;

  return (
    <main className="shell" style={{ padding: "2rem 0 4rem" }}>
      {url ? (
        <AuditResults url={url} />
      ) : (
        <div className="panel" style={{ padding: "1.5rem" }}>
          Provide a URL from the homepage audit form.
        </div>
      )}
    </main>
  );
}

