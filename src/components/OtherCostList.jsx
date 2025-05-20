import React, { useState } from "react";
import {
  Box,
  Text,
  Button,
  HStack,
  VStack,
  IconButton,
  StackDivider,
} from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";

import OtherCostForm from "./OtherCostForm";

const OtherCostList = ({ otherCosts, onUpdate, onDelete }) => {
  const [editingId, setEditingId] = useState(null);

  return (
    <Box mb={6}>
      <Text fontSize="xl" mb={3} fontWeight="bold">
        Other Costs
      </Text>
      {otherCosts.length === 0 && <Text>No other costs added yet.</Text>}
      <VStack
        divider={<StackDivider borderColor="gray.200" />}
        spacing={3}
        align="stretch"
      >
        {otherCosts.map((cost) =>
          editingId === cost.id ? (
            <OtherCostForm
              key={cost.id}
              initialData={cost}
              onSubmit={(data) => {
                onUpdate(cost.id, data);
                setEditingId(null);
              }}
              onCancel={() => setEditingId(null)}
            />
          ) : (
            <HStack key={cost.id} justifyContent="space-between">
              <Text>
                {cost.description} — ${cost.amount.toFixed(2)}
              </Text>
              <HStack>
                <IconButton
                  aria-label="Edit"
                  icon={<EditIcon />}
                  size="sm"
                  onClick={() => setEditingId(cost.id)}
                />
                <IconButton
                  aria-label="Delete"
                  icon={<DeleteIcon />}
                  size="sm"
                  colorScheme="red"
                  onClick={() => onDelete(cost.id)}
                />
              </HStack>
            </HStack>
          )
        )}
      </VStack>
    </Box>
  );
};

export default OtherCostList;
