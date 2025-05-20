import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  addItem, updateItem, deleteItem
} from '../redux/itemsSlice';
import {
  addOtherCost, updateOtherCost, deleteOtherCost
} from '../redux/otherCostsSlice';
import {
  Box, Heading, Input, Button, VStack, HStack, Text, Divider
} from '@chakra-ui/react';

const Dashboard = () => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.items);
  const otherCosts = useSelector(state => state.otherCosts);

  const [itemName, setItemName] = useState('');
  const [itemCost, setItemCost] = useState('');
  const [otherDesc, setOtherDesc] = useState('');
  const [otherCost, setOtherCost] = useState('');

  const totalItemsCost = items.reduce((sum, item) => sum + item.cost, 0);
  const totalOtherCost = otherCosts.reduce((sum, cost) => sum + cost.cost, 0);
  const totalProjectCost = totalItemsCost + totalOtherCost;

  return (
    <Box p={6}>
      <Heading mb={6}>Project Cost Tracker</Heading>

      {/* Add Item */}
      <Box mb={4}>
        <Heading size="md" mb={2}>Add Item</Heading>
        <HStack spacing={2}>
          <Input
            placeholder="Item name"
            value={itemName}
            onChange={e => setItemName(e.target.value)}
          />
          <Input
            placeholder="Cost"
            type="number"
            value={itemCost}
            onChange={e => setItemCost(e.target.value)}
          />
          <Button
            onClick={() => {
              if (itemName && itemCost) {
                dispatch(addItem(itemName, itemCost));
                setItemName('');
                setItemCost('');
              }
            }}
            colorScheme="blue"
          >
            Add
          </Button>
        </HStack>
      </Box>

      {/* List Items */}
      <Box mb={6}>
        <Heading size="md" mb={2}>Items</Heading>
        <VStack spacing={2} align="stretch">
          {items.map(item => (
            <HStack key={item.id} justify="space-between">
              <Text>{item.name}</Text>
              <Text>${item.cost.toFixed(2)}</Text>
              <Button size="sm" colorScheme="red" onClick={() => dispatch(deleteItem(item.id))}>
                Delete
              </Button>
            </HStack>
          ))}
        </VStack>
      </Box>

      {/* Add Other Cost */}
      <Box mb={4}>
        <Heading size="md" mb={2}>Add Other Cost</Heading>
        <HStack spacing={2}>
          <Input
            placeholder="Description"
            value={otherDesc}
            onChange={e => setOtherDesc(e.target.value)}
          />
          <Input
            placeholder="Cost"
            type="number"
            value={otherCost}
            onChange={e => setOtherCost(e.target.value)}
          />
          <Button
            onClick={() => {
              if (otherDesc && otherCost) {
                dispatch(addOtherCost(otherDesc, otherCost));
                setOtherDesc('');
                setOtherCost('');
              }
            }}
            colorScheme="blue"
          >
            Add
          </Button>
        </HStack>
      </Box>

      {/* List Other Costs */}
      <Box mb={6}>
        <Heading size="md" mb={2}>Other Costs</Heading>
        <VStack spacing={2} align="stretch">
          {otherCosts.map(cost => (
            <HStack key={cost.id} justify="space-between">
              <Text>{cost.description}</Text>
              <Text>${cost.cost.toFixed(2)}</Text>
              <Button size="sm" colorScheme="red" onClick={() => dispatch(deleteOtherCost(cost.id))}>
                Delete
              </Button>
            </HStack>
          ))}
        </VStack>
      </Box>

      {/* Total Cost */}
      <Divider mb={4} />
      <Heading size="lg">Total Project Cost: ${totalProjectCost.toFixed(2)}</Heading>
    </Box>
  );
};

export default Dashboard;
