import React from "react";
import { Box, Text, Divider } from "@chakra-ui/react";

const TotalCostDisplay = ({ items, otherCosts }) => {
  const totalItems = items.reduce((acc, item) => acc + item.cost, 0);
  const totalOtherCosts = otherCosts.reduce((acc, cost) => acc + cost.amount, 0);
  const total = totalItems + totalOtherCosts;

  return (
    <Box textAlign="center" mt={4} mb={8}>
      <Divider mb={2} />
      <Text fontWeight="bold" fontSize="2xl">
        Total Project Cost: ${total.toFixed(2)}
      </Text>
      <Text fontSize="sm" color="gray.600">
        (Items: ${totalItems.toFixed(2)} + Other Costs: ${totalOtherCosts.toFixed(2)})
      </Text>
    </Box>
  );
};

export default TotalCostDisplay;

