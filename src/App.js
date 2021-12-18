import "./styles.css";

import cn from "classnames";
import useTrafficLightMachine from "./useTrafficLightMachine";
import { ReactQueryDevtools } from "react-query/devtools";

export default function App() {
  const [current] = useTrafficLightMachine();

  return (
    <>
      <ReactQueryDevtools />
      <div className="App">
        <h1>State Machine :)</h1>
        <div className="box-container">
          <div
            className={cn("box stop", {
              active: current.matches("stop")
            })}
          />
          <div
            className={cn("box ready", {
              active: current.matches("ready")
            })}
          />
          <div
            className={cn("box go", {
              active: current.matches("go")
            })}
          />
        </div>
      </div>
    </>
  );
}
