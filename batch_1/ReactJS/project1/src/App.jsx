import Header from "./components/Header";
import Footer from "./components/Footer";
import MyFunc1 from "./concepts/MyFunc1";
import MyClass1 from "./concepts/MyClass1";
import FuncClick from "./concepts/events/FuncClick";
import ClassClick from "./concepts/events/ClassClick";
import StateUpdate from "./concepts/events/StateUpdate";
import ToggleState from "./concepts/events/ToggleState";
import FuncState from "./concepts/events/FuncState";
import FuncInput from "./concepts/events/FuncInput";
import ApiClass from "./concepts/ApiClass";
import ApiFunc from "./concepts/ApiFunc";

function App() {
  return (
    <>
      {/* <Header />
      <main style={{ height: "80vh" }}>
        <h1>Home Page</h1>
      </main>
      <Footer /> */}
      {/* <MyFunc1 name="John" age="25" bgColor="black" fontColor="white" /> <hr /> */}
      {/* <MyClass1 name="Akash" age="40" /> */}
      {/* <FuncClick />
      <ClassClick />
      <StateUpdate />
      <ToggleState /> */}
      {/* <FuncState /> */}
      {/* <FuncInput /> */}
      {/* <ApiClass /> */}
      <ApiFunc />
    </>
  );
}

export default App;
