import React, { useEffect, useState } from 'react';
import ForgeReconciler, { Text } from '@forge/react';
import { invoke } from '@forge/bridge';

const App = () => {
  const [text, setText] = useState('Loading...');

  useEffect(() => {
    invoke('getText').then(setText).catch(() => setText('Failed to load'));
  }, []);

  return <Text>{text}</Text>;
};

ForgeReconciler.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
