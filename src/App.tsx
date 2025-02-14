import { Button, Box, Typography, Badge, Icon } from "capui";
import { FaCheckCircle, FaHome, FaSearch } from "react-icons/fa";

function App() {
  return (
    <>
      <div>
        <Button variant="primary" align="left">
          Left Aligned Button
        </Button>
        <Button variant="secondary" align="center">
          Center Aligned Button
        </Button>
        <Button variant="outline" align="right" disabled>
          Right Aligned Button
        </Button>

        <Box
          center
          borderColor="black"
          fillColor="bg-green-500"
          margin="m-10"
          padding="p-6"
          shadow="lg"
          rounded="lg"
        >
          <h2>Box with Centered Content, Shadow, and Rounded Corners</h2>
          <p>
            This box is centered, has a shadow, rounded corners, a green
            background, and a black border.
          </p>
        </Box>

        <Box padding="p-4" textColor="white" height="h-64" className="mb-6">
          <h2>Box with Custom Text Color</h2>
          <p>
            The text inside this box is white, and the height is set to 16rem
            (h-64).
          </p>
        </Box>

        <Box
          borderColor="white"
          margin="m-10"
          padding="p-8"
          width="w-1/2"
          shadow="sm"
        >
          <h2>Box with Border and Shadow</h2>
          <p>This box has a black border, a small shadow, and is half-width.</p>
        </Box>

        <Box fillColor="bg-green-500" height="h-screen" center>
          <h2>Full Screen Box</h2>
          <p>
            This box takes up the full screen height and has a green background.
          </p>
        </Box>

        <Box
          center
          borderColor="blue-500"
          fillColor="bg-yellow-200"
          margin="m-4"
          padding="p-6"
          rounded="lg"
          shadow="lg"
          textColor="gray-800"
          height="h-64"
          width="w-1/2"
        >
          <h2>Centered Box with Custom Border, Background, and Shadow</h2>
          <p>
            This box is centered, has a yellow background, a blue border,
            rounded corners, and a large shadow.
          </p>
        </Box>

        <Box fillColor="bg-green-500" height="h-screen" width="w-full" center>
          <h2>Full Screen Box</h2>
          <p>
            This box takes up the entire screen height with a green background
            and centered content.
          </p>
        </Box>

        <Typography variant="h1" fontSize="text-4xl" fontWeight="bold" textAlign="center" margin="mb-6" color="text-blue-600">
        Heading 1: This is a large centered heading
      </Typography>

      <Typography variant="h2" fontSize="text-3xl" fontWeight="semibold" margin="mb-4" color="text-gray-800">
        Heading 2: This is a medium heading with a different font weight
      </Typography>

      <Typography variant="p" fontSize="text-base" lineHeight="leading-relaxed" color="text-gray-700" margin="mb-4">
        Paragraph text with normal font size, relaxed line height, and custom color.
      </Typography>

      <Typography variant="span" fontSize="text-sm" color="text-green-500">
        This is a small, inline text element.
      </Typography>

      <Typography variant="small" fontSize="text-xs" color="text-gray-500">
        This is a small element with gray text.
      </Typography>

      <Badge color="green" size="sm" rounded="full" variant="solid" textColor="white" className="mr-2">
        Success
      </Badge>
      
      <Badge color="red" size="md" variant="outline" textColor="white" className="mr-2">
        Error
      </Badge>

      <Badge color="blue" size="lg" rounded="lg" className="mr-2">
        Confirmed
      </Badge>

      <Badge color="purple" size="md" isPill variant="solid" textColor="white" className="mr-2">
        New
      </Badge>


      </div>
    </>
  );
}

export default App;
