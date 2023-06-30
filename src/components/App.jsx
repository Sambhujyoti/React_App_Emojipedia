import EmojiCard from "./EmojiCard";
import emojipedia from "../emojipedia";
import React from "react";

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
        {emojipedia.map((emojiP) => {
          return (
            <EmojiCard
              key={emojiP.id}
              emoji={emojiP.emoji}
              name={emojiP.name}
              meaning={emojiP.meaning}
            />
          );
        })}
      </dl>
    </div>
  );
}

export default App;
