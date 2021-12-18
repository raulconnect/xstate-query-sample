import { Machine } from "xstate";
import { useMachine } from "@xstate/react";
import { useQueryClient } from "react-query";

const sleep = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(":)");
    }, 1000);
  });

const useTrafficLightMachine = () => {
  const queryClient = useQueryClient();

  const machine = useMachine(
    Machine(
      {
        id: "trafficLight",
        initial: "stop",
        states: {
          stop: {
            invoke: {
              src: "sleep",
              onDone: "ready"
            }
          },
          ready: {
            invoke: {
              src: "sleep",
              onDone: "go"
            }
          },
          go: {
            invoke: {
              src: "sleep",
              onDone: "stop"
            }
          }
        }
      },
      {
        services: {
          sleep: () => queryClient.fetchQuery("sleep", sleep)
        }
      }
    )
  );

  return machine;
};

export default useTrafficLightMachine;
