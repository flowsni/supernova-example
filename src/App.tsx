import React from 'react';
import { Container } from './styles';
import { Button } from './components/Button';

function App() {
  return (
    <Container>
      <Button />
      <Button variant="secondary" />
      <Button variant="error" />
      <Button disabled />
    </Container>
  );
}

export default App;
