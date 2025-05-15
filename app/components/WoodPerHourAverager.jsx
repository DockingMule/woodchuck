// Add the average component here or import it if you put it in another file
export default function WoodPerHourAverage({ data, canChuck }) {
  const avg =
    data.length > 0
      ? (
          data.reduce((sum, row) => sum + (canChuck ? row.woodPerHour : 0), 0) /
          data.length
        ).toFixed(2)
      : 0;
  return (
    <span style={{ fontWeight: "bold" }}>
      Average Wood Per Hour: {avg}
    </span>
  );
}