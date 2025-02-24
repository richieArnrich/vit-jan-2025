import Header from "./components/Header";
import Footer from "./components/Footer";
import MyFunc1 from "./concepts/MyFunc1";
import MyClass from "./concepts/MyClass";

function App() {
  return (
    <>
      {/* <Header />
      <main style={{ height: "70vh" }}>
        <h3>Home Page</h3>
      </main>
      <Footer /> */}
      <MyFunc1 name="John" age="25" />
      <MyClass name="Amith" age="24" />
    </>
  );
}

export default App;
