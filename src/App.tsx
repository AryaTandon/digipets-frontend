import { useEffect, useState } from "react";
import DigipetActions from "./components/DigipetActions";
import DigipetData from "./components/DigipetData";
import { StyledText} from "./styles";

export interface Digipet {
  happiness: number;
  nutrition: number;
  discipline: number;
}

function App() {
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [message, setMessage] = useState<string>();
  const [digipetStats, setDigipetStats] = useState<Digipet>();
  const [digipet2Stats, setDigipet2Stats] = useState<Digipet>();

  const loadDataFromEndpoint = async (endpoint: `/${string}`) => {
    // try... catch documentation:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch
    try {
      const res = await fetch(`https://stormy-forest-51460.herokuapp.com${endpoint}`);
      const body = await res.json();
      setMessage(body.message);
      setDigipetStats(body.digipet);
      setDigipet2Stats(body.digipet2);
    } catch (err) {
      console.log(err);
      setMessage(`${err.name}: ${err.message}`);
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    // safe to ignore exhaustive deps warning as we're _not_ triggering infinite updates, since our setState is conditional and not executed on all rerenders after the first one
    if (isFirstLoad) {
      // populate data on first load
      loadDataFromEndpoint("/digipet");
      setIsFirstLoad(false);
    }
  });

  return (
    <main>
      <StyledText>
      <h1>Digipet</h1>
      {isFirstLoad && <p>Loading...</p>}
      {message && <p>{message}</p>}
      </StyledText>
      <hr />
      {!`${message}`.includes("Instructions:") ? 
      <div> 
        <DigipetData digipet={digipetStats} digipet2={digipet2Stats} /> 
        <hr /> 
      </div>
      : <></> }
      <br />
      <DigipetActions
        actions={[
          { 
            name: "Instructions",
            handler: () => loadDataFromEndpoint("/instructions"),
          },
          {
            name: "Hatch / View Digipet",
            handler: () => loadDataFromEndpoint("/digipet/hatch"),
          },
          {
            name: "Walk",
            handler: () => loadDataFromEndpoint("/digipet/walk"),
          },
          { 
            name: "Feed",
            handler: () => loadDataFromEndpoint("/digipet/feed"),
          },
          { 
            name: "Train",
            handler: () => loadDataFromEndpoint("/digipet/train"),
          },
          { 
            name: "Ignore",
            handler: () => loadDataFromEndpoint("/digipet/ignore"),
          },
          { 
            name: "Rehome",
            handler: () => loadDataFromEndpoint("/digipet/rehome"),
          },
          { 
            name: "Set rehomed digipet free!",
            handler: () => loadDataFromEndpoint("/digipet/setfree"),
          },
        ]}
      />
    </main>
  );
}

export default App;
