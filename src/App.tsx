import { Button, Box } from 'capui';

function App() {
  return (
    <>
      <div>
        <Button variant="primary" align="left">Left Aligned Button</Button>
        <Button variant="secondary" align="center">Center Aligned Button</Button>
        <Button variant="outline" align="right" disabled>Right Aligned Button</Button>

        <Box center borderColor="black" fillColor="bg-green-500" margin="m-10" padding="p-6" shadow="lg" rounded="lg">
          <h2>Box with Centered Content, Shadow, and Rounded Corners</h2>
          <p>This box is centered, has a shadow, rounded corners, a green background, and a black border.</p>
        </Box>

        <Box padding="p-4" textColor="white" height="h-64" className="mb-6">
          <h2>Box with Custom Text Color</h2>
          <p>The text inside this box is white, and the height is set to 16rem (h-64).</p>
        </Box>

        <Box borderColor="white" margin="m-10" padding="p-8" width="w-1/2" shadow="sm">
          <h2>Box with Border and Shadow</h2>
          <p>This box has a black border, a small shadow, and is half-width.</p>
        </Box>

        <Box fillColor="bg-green-500" height="h-screen" center>
          <h2>Full Screen Box</h2>
          <p>This box takes up the full screen height and has a green background.</p>
        </Box>
      </div>
    </>
  );
}

export default App;
