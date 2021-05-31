class RoomController {
  getRoom = (req, res) => {
    res.status(200).send({ roomId: "1", roomNumber: "109" });
  };
}

export default new RoomController();
