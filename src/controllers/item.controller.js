import Item from "../models/item.model.js";
import Restaurant from "../models/restaurant.model.js";

export const getItems = async (req, res) => {
  try {
    const restaurantId = req.params.restaurantId;
    const allItems = await Item.find({ restaurant: restaurantId });
    res.status(200).json(allItems);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createItem = async (req, res) => {
  const { name, description, price, restaurant_id, image } = req.body;

  try {
    const restaurant = await Restaurant.findById(restaurant_id);

    if (!restaurant)
      return res.status(404).json({ error: "Restaurant not found." });

    const newItem = new Item({ name, description, price, restaurant, image });
    await newItem.save();
    await restaurant.menuItems.push(newItem);
    await restaurant.save();
    res.status(201).json(newItem);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateItem = async (req, res) => {
  res.json(
    await Item.findByIdAndUpdate(req.params.id, req.body).catch((error) =>
      res.status(400).json(error)
    )
  );
};

export const deleteItem = async (req, res) => {
  res.json(
    await Item.findByIdAndRemove(req.params.id).catch((error) =>
      res.status(400).json(error)
    )
  );
};
