import Header from "./components/Header";
import Footer from "./components/Footer";
import MyFunc1 from "./concepts/MyFunc1";
import MyClass1 from "./concepts/MyClass1";

function App() {
  return (
    <>
      {/* <Header />
      <main style={{ height: "80vh" }}>
        <h1>Home Page</h1>
      </main>
      <Footer /> */}
      <MyFunc1 name="John" age="25" bgColor="black" fontColor="white" /> <hr />
      <MyClass1 name="Akash" age="40" />
    </>
  );
}

export default App;
