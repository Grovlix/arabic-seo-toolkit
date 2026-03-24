"use client";

import { useState } from "react";

export function SchemaForm() {
  const [result, setResult] = useState("");
  const [type, setType] = useState("product");
  const [payload, setPayload] = useState(`{\n  "name": "منتج عربي",\n  "description": "وصف المنتج",\n  "image": ["https://example.com/product.jpg"],\n  "price": "129",\n  "currency": "SAR"\n}`);

  return (
    <div className="grid" style={{ gridTemplateColumns: "1fr 1fr" }}>
      <form
        className="panel grid"
        style={{ padding: "1.5rem" }}
        onSubmit={async (event) => {
          event.preventDefault();
          const response = await fetch("/api/schema", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ type, input: JSON.parse(payload) })
          });
          const json = (await response.json()) as { result: string };
          setResult(json.result);
        }}
      >
        <select className="field" value={type} onChange={(e) => setType(e.target.value)}>
          <option value="product">Product</option>
          <option value="organization">Organization</option>
          <option value="faq">FAQPage</option>
        </select>
        <textarea className="textarea" value={payload} onChange={(e) => setPayload(e.target.value)} />
        <button className="button" type="submit">Generate schema</button>
      </form>
      <div className="panel" style={{ padding: "1.5rem" }}>
        <pre style={{ whiteSpace: "pre-wrap", color: "var(--muted)" }}>{result || "Generated JSON-LD will appear here."}</pre>
      </div>
    </div>
  );
}

