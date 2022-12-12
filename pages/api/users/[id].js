import users from "../../../database.json";

export default function handler(req, res) {
  const id = req.query.id;
  const user = users.find((user) => user.user_id === parseInt(id));
  res.status(200).json(user);
}
