import React, { useState, useEffect } from "react";
import { Button, Input, FormControl, FormLabel, Box } from "@chakra-ui/react";

const OtherCostForm = ({ onSubmit, initialData, onCancel }) => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  useEffect(() => {
    if (initialData) {
      setDescription(initialData.description);
      setAmount(initialData.amount);
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description || amount === "") return;
    onSubmit({ description, amount: parseFloat(amount) });
    setDescription("");
    setAmount("");
  };

  return (
    <Box as="form" onSubmit={handleSubmit} mb={4}>
      <FormControl mb={2}>
        <FormLabel>Description</FormLabel>
        <Input
          placeholder="e.g. Shipping"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </FormControl>
      <FormControl mb={2}>
        <FormLabel>Amount</FormLabel>
        <Input
          type="number"
          placeholder="e.g. 100"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
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

export default OtherCostForm;
