"use client";

import { useState } from "react";

const UpvoteBtn = () => {
  const [count, setCount] = useState(0);
  return (
    <button
      className="bg-blue-500 text-white p-2 mt-10"
      onClick={() => setCount(count + 1)}
    >
      Upvote
    </button>
  );
};

export default UpvoteBtn;
