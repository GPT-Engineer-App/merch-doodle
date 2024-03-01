import React from "react";
import { Box, Button, Container, Flex, Grid, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { FaShoppingCart, FaHeart, FaStar } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Classic T-Shirt",
    price: "$19.99",
    imageUrl: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0LXNoaXJ0fGVufDB8fHx8MTcwOTMxODAxNXww&ixlib=rb-4.0.3&q=80&w=1080',
    rating: 4.5,
  },
  {
    id: 2,
    name: "Summer Shorts",
    price: "$29.99",
    imageUrl: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzaG9ydHN8ZW58MHx8fHwxNzA5MzE4MDE1fDA&ixlib=rb-4.0.3&q=80&w=1080',
    rating: 4.2,
  },
  {
    id: 3,
    name: "Sneakers",
    price: "$49.99",
    imageUrl: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzbmVha2Vyc3xlbnwwfHx8fDE3MDkzMTgwMTZ8MA&ixlib=rb-4.0.3&q=80&w=1080',
    rating: 4.8,
  },
  {
    id: 4,
    name: "Baseball Cap",
    price: "$14.99",
    imageUrl: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjYXB8ZW58MHx8fHwxNzA5MzE4MDE2fDA&ixlib=rb-4.0.3&q=80&w=1080',
    rating: 4.3,
  },
];

const ProductCard = ({ product }) => (
  <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p="5" textAlign="center" position="relative">
    <Image src={product.imageUrl} alt={product.name} boxSize="200px" margin="0 auto" />
    <Box p="6">
      <Box d="flex" alignItems="baseline">
        <Box color="gray.500" fontWeight="semibold" letterSpacing="wide" fontSize="xs" textTransform="uppercase" ml="2">
          {product.rating} <FaStar color="yellow.500" />
        </Box>
      </Box>
      <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
        {product.name}
      </Box>
      <Box>
        {product.price}
        <Box as="span" color="gray.600" fontSize="sm">
          / unit
        </Box>
      </Box>
    </Box>
    <Flex mt="3" justifyContent="center" alignItems="center">
      <Button leftIcon={<FaHeart />} colorScheme="pink" variant="outline" size="sm" mr="2">
        Favorite
      </Button>
      <Button leftIcon={<FaShoppingCart />} colorScheme="teal" variant="solid" size="sm">
        Add to Cart
      </Button>
    </Flex>
  </Box>
);

const Index = () => {
  return (
    <Container maxW="container.xl" p={5}>
      <VStack spacing={8} as="section">
        <Heading as="h1" size="2xl">
          Welcome to Merch Store
        </Heading>
        <Text>If you're looking for quality merchandising, you've come to the right place!</Text>
      </VStack>
      <Grid templateColumns="repeat(4, 1fr)" gap={6} as="section" pt={10}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Grid>
    </Container>
  );
};

export default Index;
