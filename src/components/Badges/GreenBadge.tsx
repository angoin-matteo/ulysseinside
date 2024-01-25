export default function GreenBadge({
  value,
}: Readonly<{
  value: string;
}>) {
  return (
    <span className="inline-flex items-center px-2 py-1 text-xs font-medium text-green-500 ring-1 ring-green-500 rounded-lg bg-green-50 dark:bg-green-950">
      {value}
    </span>
  );
}
