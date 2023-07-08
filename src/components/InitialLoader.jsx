import Loader from "./Loader";

export default function InitialLoader(res) {
  if (!res.status) {
    return <Loader />;
  } else if (res.status === "fail") {
    return (
      <div className="container error-container">
        <h1>{res.error.message}</h1>
        <p>Try again after sometimes</p>
      </div>
    );
  } else {
    return null;
  }
}
