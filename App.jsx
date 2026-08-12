import { Routes, Route, Link } from "react-router-dom";
import SubscriptionCenter from "./pages/SubscriptionCenter";
import Wangsuk1 from "./pages/Wangsuk1";
import Wangsuk2 from "./pages/Wangsuk2";
import Jinjeop2 from "./pages/Jinjeop2";

export default function App(){
  return (
    <div className="app-shell">
      <header className="topbar">
        <Link to="/">88부동산</Link>
        <Link to="/subscription">분양·청약 센터</Link>
      </header>
      <Routes>
        <Route path="/" element={<SubscriptionCenter/>}/>
        <Route path="/subscription" element={<SubscriptionCenter/>}/>
        <Route path="/subscription/wangsuk1" element={<Wangsuk1/>}/>
        <Route path="/subscription/wangsuk2" element={<Wangsuk2/>}/>
        <Route path="/subscription/jinjeop2" element={<Jinjeop2/>}/>
      </Routes>
    </div>
  );
}