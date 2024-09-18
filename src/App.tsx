import * as React from "react";
import { Details, NameCard } from "./components";
import axios from "axios";

function App() {
  const [resume, setResume] = React.useState<any>(undefined);
  React.useEffect(() => {
    axios.get("https://gist.githubusercontent.com/wencfy/13bbdf3f2f2fa5b896ad0a2d23566416/raw/resume.json").then((res) => {
      setResume(res.data);
    });
  });

  return (
    resume && <div className="max-w-full mx-auto md:max-w-4xl md:flex lg:max-w-5xl">
      <NameCard value={resume.basics} />
      <Details {...resume} />
    </div>
  );
}

export default App;
