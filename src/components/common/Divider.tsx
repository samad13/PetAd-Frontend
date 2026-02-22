export function Divider() {
  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      gap: 16,
      margin: "12px 0",
    }}>
      <div style={{ flex: 1, height: 1, background: "#e5e7eb" }} />
      <span style={{
        color: "#9ca3af",
        fontSize: 14,
        fontWeight: 500,
        fontFamily: "'Poppins', sans-serif",
      }}>OR</span>
      <div style={{ flex: 1, height: 1, background: "#e5e7eb" }} />
    </div>
  );
}