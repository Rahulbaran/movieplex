import Card from "../../components/Card";

export default function Cards({ data }) {
  if (data.length > 0) {
    return (
      <>
        {data.map(d => (
          <Card key={d.id} data={d} />
        ))}
      </>
    );
  } else {
    return <h2>Nothing Found</h2>;
  }
}
