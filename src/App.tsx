import { FaCheckCircle, FaHome, FaSearch } from "react-icons/fa";
import { Button, Box, Typography, Badge, Layout, Header } from "capui";

function App() {
  const menuItems = [
    { link: "/home", label: "Home" },
    { link: "/about", label: "About" },
    { link: "/contact", label: "Contact" }
  ];

  const dropdownItems = [
    {
      label: "Products",
      items: [
        { link: "/products/new", label: "New Arrivals" },
        { link: "/products/featured", label: "Featured" },
        { link: "/products/sale", label: "Sale" }
      ]
    },
    {
      label: "Services",
      items: [
        { link: "/services/consulting", label: "Consulting" },
        { link: "/services/support", label: "Support" },
        { link: "/services/training", label: "Training" }
      ]
    }
  ];
  return (
    <>
      {/* Header Section */}
      <Header
      title="Company Name"
      subtitle="Welcome to our website"
      backgroundColor="bg-blue-600"
      textColor="text-white"
      align="left"
      fontSize="2xl"
      height="lg"
      sticky={true}
      logo="https://placeholder.com/logo.png"
      menuItems={menuItems}
      dropdownItems={dropdownItems}
    >
      <button className="px-4 py-2 bg-white text-blue-600 rounded-md ml-4">
        Sign In
      </button>
    </Header>

      <div className="bg-gray-100 min-h-screen flex flex-col items-center py-10">
        {/* Button Section */}
        <Layout
          direction="row"
          justify="center"
          spacing="space-x-6"
          className="mb-10"
        >
          <Button
            variant="primary"
            align="left"
            className="hover:bg-blue-600 transition-colors duration-300"
          >
            Left Aligned Button
          </Button>
          <Button
            variant="secondary"
            align="center"
            className="hover:bg-gray-600 transition-colors duration-300"
          >
            Center Aligned Button
          </Button>
          <Button
            variant="outline"
            align="right"
            disabled
            className="opacity-60 hover:bg-gray-300 transition-colors duration-300"
          >
            Right Aligned Button
          </Button>
          // Basic usage
          <Button variant="primary">Click me</Button>
          // Complex usage
          <Button
            variant="secondary"
            size="lg"
            shape="pill"
            leftIcon={<FaCheckCircle name="settings" />}
            isLoading={true}
            fullWidth
          >
            Settings
          </Button>
        </Layout>

        {/* Box Section 1 */}
        <Layout justify="center" className="mb-10">
          <Box
            center
            borderColor="black"
            fillColor="bg-gradient-to-r from-green-400 to-blue-500"
            margin="m-10"
            padding="p-8"
            shadow="lg"
            rounded="lg"
          >
            <Typography
              variant="h2"
              fontSize="text-2xl"
              fontWeight="bold"
              color="text-white"
            >
              Box with Centered Content, Shadow, and Rounded Corners
            </Typography>
            <Typography variant="p" fontSize="text-base" color="text-white">
              This box is centered, has a gradient background, shadow, rounded
              corners, and a black border.
            </Typography>
          </Box>
        </Layout>

        {/* Box Section 2 */}
        <Layout justify="center" className="mb-10">
          <Box
            padding="p-6"
            textColor="white"
            height="h-64"
            className="bg-gradient-to-r from-gray-600 to-gray-800 rounded-lg shadow-lg"
          >
            <Typography variant="h2" fontSize="text-2xl" fontWeight="semibold">
              Box with Custom Text Color
            </Typography>
            <Typography
              variant="p"
              fontSize="text-base"
              lineHeight="leading-relaxed"
            >
              The text inside this box is white, and the height is set to 16rem
              (h-64).
            </Typography>
          </Box>
        </Layout>

        {/* Box Section 3 */}
        <Layout justify="center" className="mb-10">
          <Box
            borderColor="white"
            margin="m-10"
            padding="p-8"
            width="w-1/2"
            shadow="sm"
            fillColor="bg-indigo-500"
            rounded="md"
          >
            <Typography
              variant="h2"
              fontSize="text-2xl"
              fontWeight="bold"
              color="text-white"
            >
              Box with Border and Shadow
            </Typography>
            <Typography variant="p" fontSize="text-base" color="text-white">
              This box has an indigo background, white border, and a small
              shadow. It's half-width.
            </Typography>
          </Box>
        </Layout>

        {/* Full Screen Box Section */}
        <Layout justify="center" className="mb-10">
          <Box
            fillColor="bg-gradient-to-r from-teal-400 to-blue-500"
            height="h-screen"
            center
          >
            <Typography
              variant="h1"
              fontSize="text-4xl"
              fontWeight="bold"
              color="text-white"
            >
              Full Screen Box with Gradient
            </Typography>
            <Typography variant="p" fontSize="text-lg" color="text-white">
              This box covers the full screen and has a gradient background from
              teal to blue.
            </Typography>
          </Box>
        </Layout>

        {/* Typography Section */}
        <Layout
          direction="column"
          align="center"
          spacing="space-y-6"
          className="mb-10"
        >
          <Typography
            variant="h1"
            fontSize="text-4xl"
            fontWeight="bold"
            textAlign="center"
            margin="mb-6"
            color="text-blue-600"
          >
            Heading 1: This is a large centered heading
          </Typography>

          <Typography
            variant="h2"
            fontSize="text-3xl"
            fontWeight="semibold"
            margin="mb-4"
            color="text-gray-800"
          >
            Heading 2: This is a medium heading with a different font weight
          </Typography>

          <Typography
            variant="p"
            fontSize="text-base"
            lineHeight="leading-relaxed"
            color="text-gray-700"
            margin="mb-4"
          >
            Paragraph text with normal font size, relaxed line height, and
            custom color.
          </Typography>

          <Typography variant="span" fontSize="text-sm" color="text-green-500">
            This is a small, inline text element.
          </Typography>

          <Typography variant="small" fontSize="text-xs" color="text-gray-500">
            This is a small element with gray text.
          </Typography>
        </Layout>

        {/* Badge Section */}
        <Layout
          direction="row"
          justify="center"
          spacing="space-x-4"
          className="mb-10"
        >
          <Badge
            color="green"
            size="sm"
            icon={<FaCheckCircle />}
            positionIcon="left"
          >
            Success
          </Badge>

          <Badge
            color="red"
            size="lg"
            variant="outline"
            textColor="black"
            icon={<FaHome />}
            positionIcon="right"
          >
            Home
          </Badge>

          <Badge
            color="blue"
            size="md"
            isPill
            tooltip="This is a pill badge"
            className="cursor-pointer"
          >
            New
          </Badge>
        </Layout>

        {/* Icon Section */}
        {/* <Layout direction="row" justify="center" spacing="space-x-4" className="mb-10">
          <Icon icon={<FaHome />} size="text-2xl" color="text-blue-500" />
          <Icon icon={<FaSearch />} size="text-2xl" color="text-gray-600" />
          <Icon icon={<FaCheckCircle />} size="text-3xl" color="text-green-600" />
        </Layout> */}
      </div>
    </>
  );
}

export default App;
