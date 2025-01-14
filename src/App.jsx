import React from "react";
import emojipedia from "./emoji";

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map((entry,index)=>(
          <Entry
            key={index}
            emoji={entry.name}
            description={entry.discription}
          
          />
        ))}
      </dl>
    </div>
  );
}

export default App;
