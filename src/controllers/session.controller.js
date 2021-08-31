import Session from "../models/session.model.js";
import Table from "../models/table.model.js";
import User from "../models/user.model.js";
import jwt from "jsonwebtoken";

export const getSessions = async (req, res) => {
  try {
    const allSessions = await Session.find();
    res.status(200).json(allSessions);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createSession = async (req, res) => {
  const { username, cellnumber, table_id } = req.body;
  try {
    const table = await Table.findById(table_id);

    if (!table) return res.status(404).json({ error: "Table not found" });

    let user = await User.findOne({ cellnumber });

    if (!user) {
      const newUser = new User({ cellnumber, username });
      await newUser.save();
      user = newUser;
    }

    const newSession = new Session({ user, table });
    await newSession.save();
    table.sessions.push(newSession);
    table.save();
    res.status(201).json({
      session: newSession,
      token: jwt.sign({ session: newSession.id }, process.env.SECRET, {
        expiresIn: "8h",
      }),
    });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateSession = async (req, res) => {
  res.json(
    await Session.findByIdAndUpdate(req.params.id, req.body).catch((error) =>
      res.status(400).json(error)
    )
  );
};

export const deleteSession = async (req, res) => {
  res.json(
    await Session.findByIdAndRemove(req.params.id).catch((error) =>
      res.status(400).json(error)
    )
  );
};
