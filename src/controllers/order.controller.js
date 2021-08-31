import Order from "../models/order.model.js";
import Session from "../models/session.model.js";
//import User from '../models/user.model.js'

export const getOrders = async (req, res) => {
  try {
    const allOrders = await Order.find({ session: req.session }).populate(
      "items.item"
    );
    res.status(200).json(allOrders);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createOrder = async (req, res) => {
  try {
    const { items } = req.body;
    const session = req.session;
    const session1 = await Session.findById(session);
    const newOrder = new Order({ session, items });

    await newOrder.save();
    await session1.orders.push(newOrder);
    await session1.save();
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateOrder = async (req, res) => {
  res.json(
    await Order.findByIdAndUpdate(req.params.id, req.body).catch((error) =>
      res.status(400).json(error)
    )
  );
};

export const deleteOrder = async (req, res) => {
  res.json(
    await Order.findByIdAndRemove(req.params.id).catch((error) =>
      res.status(400).json(error)
    )
  );
};
