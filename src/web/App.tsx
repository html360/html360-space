import { observer } from "mobx-react-lite";
import { Link, Route, Routes } from "react-router-dom";
import { spaceStore } from "@/core/space.store";

const Home = observer(() => (
  <div>
    <h1>Добро пожаловать в html360-space</h1>
    <p>Статус ядра: {spaceStore.status}</p>
    <button type="button" onClick={() => spaceStore.launchSystem()}>
      Запустить систему
    </button>
  </div>
));

const Info = () => <h2>Страница информации</h2>;

const App = () => {
  return (
    <div>
      <nav style={{ display: "flex", gap: "10px" }}>
        <Link to="/">Главная</Link>
        <Link to="/info">Инфо</Link>
      </nav>
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info" element={<Info />} />
      </Routes>
    </div>
  );
};

export default App;
