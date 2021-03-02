import { Digipet } from "../App";
import { StyledData } from "../styles";

interface Props {
  digipet?: Digipet;
  digipet2?: Digipet;
}

function DigipetData({ digipet, digipet2 }: Props) {
  if (digipet) {
    const digipetEntries = Object.entries(digipet);
    const digipetStats = digipetEntries.map(([key, val]) => (
      <li key={key}>
        {key}: {val}
      </li>
    ));

    return (
      <StyledData>
        <h2>Your digipet:</h2>
        <ul>{digipetStats}</ul>
      </StyledData>
    );
  } else if (digipet2) {
    const digipetEntries = Object.entries(digipet2);
    const digipet2Stats = digipetEntries.map(([key, val]) => (
      <li key={key}>
        {key}: {val}
      </li>
    ));

    return (
      <StyledData>
        <h2>Your rehomed digipet:</h2>
        <ul>{digipet2Stats}</ul>
      </StyledData>
    );
  } else {    
    return <p>No digipet to see 😢</p>;
  }
}

export default DigipetData;
