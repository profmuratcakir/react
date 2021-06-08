import Events from "./Events";
import Hooks from "./Hooks";
import HookOrnek from "./HookOrnek";
import ClassComponent from "./ClassComponent";
function App() {
  return (
    <div className="App">
      <Events />
      <ClassComponent sayi="10" />
      <ClassComponent sayi="100" />
      <Hooks />
      <HookOrnek />
    </div>
  );
}
export default App;
