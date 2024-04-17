import "./App.css";
import Chat from "./Component/Chat/Chat";
import Chatdetail from "./Component/ChatDetails/Chatdetail";
import List from "./Component/List/List";
import Login from "./Component/Login/Login";
import Notification from "./Component/Notification/Notification";

function App() {
  const user = false;
  return (
    <div className="container">
      {user ? (
        <>
          <List />
          <Chat />
          <Chatdetail />
        </>
      ) : (
        <Login />
      )}
      <Notification />
    </div>
  );
}

export default App;
