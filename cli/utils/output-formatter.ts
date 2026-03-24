export function printOutput(value: unknown, format: "json" | "pretty" = "pretty") {
  if (format === "json") {
    console.log(JSON.stringify(value, null, 2));
    return;
  }

  if (typeof value === "string") {
    console.log(value);
    return;
  }

  console.log(JSON.stringify(value, null, 2));
}

