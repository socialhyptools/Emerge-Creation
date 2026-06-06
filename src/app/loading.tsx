export default function Loading() {
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ backgroundColor: "#F4F7FA" }}
    >
      <div className="flex flex-col items-center gap-4">
        <div
          className="w-12 h-12 rounded-full border-4 border-t-transparent animate-spin"
          style={{ borderColor: "#0B3C6E", borderTopColor: "transparent" }}
        />
        <p className="text-sm font-medium" style={{ color: "#4A6080" }}>Loading…</p>
      </div>
    </div>
  );
}
