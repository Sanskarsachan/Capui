import { FaBeer, FaCheckCircle, FaTimesCircle, FaBell } from "react-icons/fa";
import { Button, Box, Typography, Badge, Layout, Header } from "capui";

function App() {
  return (
    <>
      {/* Header Section */}
      <Header
        logo={<img src="/logo.svg" alt="Capui" />}
        navigationItems={[
          {
            label: "Products",
            items: ["Features", "Pricing"],
            href: "/products",
          },
          {
            label: "Resources",
            items: ["Blog", "Documentation"],
            href: "/resources",
          },
        ]}
        containerWidth="contained"
        height="h-20"
        position="sticky"
        backgroundColor="bg-white"
        textColor="text-gray-900"
        shadow="lg"
        padding="px-6"
        onMobileMenuToggle={(isOpen) => console.log("Mobile menu:", isOpen)}
      />

      <div className="bg-gray-100 min-h-screen flex flex-col items-center">
        {/* Box Section 1 */}
        <Layout justify="center" className="mb-12">
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            backgroundColor="bg-gradient-to-r from-green-400 to-blue-500"
            margin="m-10"
            padding="p-8"
            boxShadow="lg"
            borderRadius="lg"
            width="w-full sm:w-3/4 md:w-1/2"
          >
            <Typography
              variant="h2"
              fontSize="text-2xl"
              fontWeight="bold"
              color="text-white"
              className="mb-4"
            >
              Box with Centered Content, Shadow, and Rounded Corners
            </Typography>
            <Typography variant="p" fontSize="text-base" color="text-white">
              This box is centered, has a gradient background, shadow, and
              rounded corners.
            </Typography>
          </Box>
        </Layout>

        {/* Box Section 2 */}
        <Layout justify="center" className="mb-12">
          <Box
            padding="p-6"
            backgroundColor="bg-gradient-to-r from-gray-600 to-gray-800"
            color="white"
            height="h-64"
            borderRadius="lg"
            boxShadow="lg"
            width="w-full sm:w-3/4 md:w-1/2"
          >
            <Typography
              variant="h1"
              textAlign="center"
              fontWeight="bold"
              margin="mb-4"
            >
              This is an H1 Heading
            </Typography>
            <Typography variant="p" color="gray" fontSize="18px">
              This is a paragraph with customized font size.
            </Typography>
            <Typography variant="small" color="blue" textAlign="right">
              This is some small text aligned to the right.
            </Typography>
          </Box>
        </Layout>

        {/* Badge Section */}
        <Layout direction="row" justify="center" spacing="space-x-4" className="mb-12">
          {/* 1. Simple Solid Badge */}
          <Badge color="blue" size="md" variant="solid" textColor="white">
            New
          </Badge>

          {/* 2. Outline Badge */}
          <Badge color="green" size="md" variant="outline" textColor="black">
            Success
          </Badge>

          {/* 3. Small Badge with Icon Left */}
          <Badge
            color="yellow"
            size="sm"
            variant="solid"
            textColor="white"
            icon={<FaCheckCircle />}
            positionIcon="left"
          >
            Verified
          </Badge>

          {/* 4. Large Badge with Icon Right */}
          <Badge
            color="red"
            size="lg"
            variant="outline"
            textColor="black"
            icon={<FaTimesCircle />}
            positionIcon="right"
          >
            Expired
          </Badge>

          {/* 5. Pill Badge */}
          <Badge color="purple" size="md" variant="solid" isPill>
            New Feature
          </Badge>
        </Layout>

        {/* Full Screen Box Section */}
        <Layout justify="center" className="mb-12">
          <Box
            backgroundColor="bg-gradient-to-r from-teal-400 to-blue-500"
            height="h-screen"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            padding="p-8"
          >
            <Typography
              variant="h1"
              fontSize="text-4xl"
              fontWeight="bold"
              color="text-white"
              className="mb-4"
            >
              Full Screen Box with Gradient
            </Typography>
            <Typography variant="p" fontSize="text-lg" color="text-white">
              This box covers the full screen and has a gradient background from teal to blue.
            </Typography>
          </Box>
        </Layout>

        {/* Button Section */}
        <Layout
          direction="row"
          justify="center"
          spacing="space-x-6"
          className="mb-12"
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
          <Button variant="primary">Click me</Button>
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

        {/* Icon Section (Kept as requested) */}
        <Layout direction="row" justify="center" spacing="space-x-4" className="mb-12">
          <Typography variant="h2" fontSize="text-2xl" fontWeight="bold" color="text-gray-800">
            Icons Showcase
          </Typography>
          <div className="flex items-center space-x-2">
            <FaBeer size={30} color="text-yellow-500" />
            <FaCheckCircle size={30} color="text-green-500" />
            <FaTimesCircle size={30} color="text-red-500" />
            <FaBell size={30} color="text-blue-500" />
          </div>
        </Layout>
      </div>
    </>
  );
}

export default App;
