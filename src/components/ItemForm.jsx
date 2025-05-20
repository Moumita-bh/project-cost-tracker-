import React, { useState, useEffect } from "react";
import { Button, Input, FormControl, FormLabel, Box } from "@chakra-ui/react";

const ItemForm = ({ onSubmit, initialData, onCancel }) => {
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");

  useEffect(() => {
    if (initialData) {
      setName(initialData.name);
      setCost(initialData.cost);
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || cost === "") return;
    onSubmit({ name, cost: parseFloat(cost) });
    setName("");
    setCost("");
  };

  return (
    <Box as="form" onSubmit={handleSubmit} mb={4}>
      <FormControl mb={2}>
        <FormLabel>Item Name</FormLabel>
        <Input
          placeholder="e.g. Laptop"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </FormControl>
      <FormControl mb={2}>
        <FormLabel>Cost</FormLabel>
        <Input
          type="number"
          placeholder="e.g. 1200"
          value={cost}
          onChange={(e) => setCost(e.target.value)}
          min="0"
          step="0.01"
          required
        />
      </FormControl>
      <Button type="submit" colorScheme="blue" mr={2}>
        {initialData ? "Update" : "Add"}
      </Button>
      {onCancel && (
        <Button onClick={onCancel} colorScheme="gray">
          Cancel
        </Button>
      )}
    </Box>
  );
};

export default ItemForm;
