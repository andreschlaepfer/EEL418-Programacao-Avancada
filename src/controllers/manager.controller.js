import Manager from "../models/manager.model.js";
import bcrypt from "bcryptjs";

export const getManagers = async (req, res) => {
  try {
    const { cellnumber } = req.query;

    if (cellnumber) {
      return res.json(await Manager.findOne({ cellnumber }));
    } else {
      return res.json(await Manager.find());
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createManager = async (req, res) => {
  try {
    const { name, cellnumber, password_raw, restaurant_id } = req.body;
    const restaurant = await Restaurant.findById(restaurant_id);

    const password = await bcrypt.hash(password_raw, 8);

    if (!restaurant)
      return res.status(404).json({ error: "Restaurant not found." });

    const newManager = new User({ username, cellnumber, password, restaurant });
    await newManager.save();
    res.status(201).json(newManager);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateManager = async (req, res) => {
  res.json(
    await Manager.findByIdAndUpdate(req.params.id, req.body).catch((error) =>
      res.status(400).json(error)
    )
  );
};

export const deleteManagers = async (req, res) => {
  res.json(
    await Manager.findByIdAndRemove(req.params.id).catch((error) =>
      res.status(400).json(error)
    )
  );
};

export const signIn = async (req, res) => {
  const { name, password } = req.body;
  const manager = await Manager.findOne({ name });

  if (!(await bcrypt.compare(password, manager.password)))
    return res.status(403).json({ error: "Invalid credentials." });

  return res.json({
    restaurant: manager.restaurant,
    token: jwt.sign({ id: manager.id }, process.env.SECRET, {
      expiresIn: "5d",
    }),
  });
};
