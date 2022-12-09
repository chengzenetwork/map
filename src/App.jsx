import "./App.css";
import { ConfigProvider } from "zarm";
import zhCN from "zarm/lib/config-provider/locale/zh_CN";
import { config as AmapReactConfig } from "@amap/amap-react";
import MapComponent from "./pages/MapContainer";

function App() {
  AmapReactConfig.key = "cd5c721c132a6b6d579435b3b5234275";
  AmapReactConfig.plugins = ["AMap.ToolBar"];
  return (
    <div className="App">
      <ConfigProvider locale={zhCN}>
        <MapComponent></MapComponent>
      </ConfigProvider>
    </div>
  );
}

export default App;
