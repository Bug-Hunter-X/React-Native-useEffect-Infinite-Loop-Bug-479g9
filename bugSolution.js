The solution involves adding the correct dependency array to the `useEffect` hook.  Here's the corrected code:

```javascript
import React, { useState, useEffect } from 'react';

const MyComponent = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(count + 1);
  }, []); // Empty dependency array

  return (
    <Text>{count}</Text>
  );
};

export default MyComponent;
```

By adding an empty dependency array (`[]`), the `useEffect` hook now only runs once after the initial render, preventing the infinite loop.  If the effect needs to run based on changes to specific state variables, those variables should be included in the dependency array.