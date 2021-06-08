// ! props : Parent modulden child module veri aktarimini saglayan ozleliktir.
// * Veri akisi tek yonludur. Parenttan child'a dogru bir akis vardir.
import Kisi from "./Kisi";
function App() {
  return (
    <div className="App">
      <Kisi
        ad="Canan Dikbayir"
        resim="https://images.unsplash.com/photo-1558507652-2d9626c4e67a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydHJhaXRzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
        tel="90555 5556677"
      />
      <Kisi
        ad="Adem kabaci"
        resim="https://images.unsplash.com/photo-1527082395-e939b847da0d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cG9ydHJhaXRzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=600"
        tel="90444 4444677"
      />

      <Kisi
        ad="Deniz kabaci"
        resim="https://thispersondoesnotexist.com/image"
        tel="90444 4444677"
      />
    </div>
  );
}
export default App;
