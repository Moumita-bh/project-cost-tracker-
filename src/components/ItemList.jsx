import React, { useState } from "react";
import {
  Box,
  Text,
  
  HStack,
  VStack,
  IconButton,
  StackDivider,
} from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import ItemForm from "./ItemForm";

const ItemList = ({ items, onUpdate, onDelete }) => {
  const [editingId, setEditingId] = useState(null);

  return (
    <Box mb={6}>
      <Text>
  {items.name} — ${typeof items.cost === "number" ? items.cost.toFixed(2) : "0.00"}
</Text>
      {items.length === 0 && <Text>No items added yet.</Text>}
      <VStack
        divider={<StackDivider borderColor="gray.200" />}
        spacing={3}
        align="stretch"
      >
        {items.map((item) =>
          editingId === item.id ? (
            <ItemForm
              key={item.id}
              initialData={item}
              onSubmit={(data) => {
                onUpdate(item.id, data);
                setEditingId(null);
              }}
              onCancel={() => setEditingId(null)}
            />
          ) : (
            <HStack key={item.id} justifyContent="space-between">
              <Text>
                {item.name} — ${item.cost.toFixed(2)}
              </Text>
              <HStack>
                <IconButton
                  aria-label="Edit"
                  icon={<EditIcon />}
                  size="sm"
                  onClick={() => 
                    {console.log("Editing item:", item.id);
                  setEditingId(item.id);}}
                />
                <IconButton
                  aria-label="Delete"
                  icon={<DeleteIcon />}
                  size="sm"
                  colorScheme="red"
                  onClick={() => {
    console.log("Deleting item:", item.id);
    onDelete(item.id);
  }}
                />
              </HStack>
            </HStack>
          )
        )}
      </VStack>
    </Box>
  );
};

export default ItemList;
