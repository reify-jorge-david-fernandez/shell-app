import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
// import * as salk from "./salk-working";

import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "react-query";

function App() {
  const [count, setCount] = useState(0);
  // const App = window.salk.ui.render.App;
  const App = window.salk.core._main();
  const queryClient = new QueryClient();
  console.log({ salk: salk, app: salk.ui.render.App });
  // window.salkmain = salkmain;
  // console.info(salkmain);

  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </div>
  );
}

export default App;
