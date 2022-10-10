import { paste } from "@testing-library/user-event/dist/paste";
import React from "react";
import { UI } from "./UI";
import { TodoProvider } from "../TodoContext";




export default function Index() {

  return (
    <TodoProvider>
            <UI/>
    </TodoProvider>
  );
}
