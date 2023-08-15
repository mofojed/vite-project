import "./App.css";

function App() {
  const isBufferAvailable = typeof Buffer !== "undefined";

  return (
    <>
      <h1 style={{ color: isBufferAvailable ? "green" : "red" }}>
        isBufferAvailable: {`${isBufferAvailable}`}
      </h1>
    </>
  );
}

export default App;
