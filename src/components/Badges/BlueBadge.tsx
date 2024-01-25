export default function BlueBadge({
  value,
}: Readonly<{
  value: string;
}>) {
  return (
    <span className="inline-flex items-center px-2 py-1 text-xs font-medium text-blue-500 ring-1 ring-blue-500 rounded-lg bg-blue-50 dark:bg-blue-950">
      {value}
    </span>
  )
}
