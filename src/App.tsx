import { Button } from 'capui';

function App() {
  return (
    <>
      <div>
      <Button variant="primary" align="left" >
        Left Aligned Button
      </Button>

      <Button variant="secondary" align="center">
        Center Aligned Button
      </Button>

      <Button variant="outline" align="right" disabled>
        Right Aligned Button
      </Button>
      </div>
    </>
  );
}

export default App;
