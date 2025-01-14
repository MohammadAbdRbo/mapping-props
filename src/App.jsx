import React from "react";
import emojipedia from "./emoji";
import Entry from "./emo";

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
  {emojipedia.map((entry, index) => (
    <Entry
      key={index}
      emoji={entry.emoji}  
      name={entry.name}    
      description={entry.description}  
    />
  ))}
</dl>

    </div>
  );
}

export default App;
