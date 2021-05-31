class UserController {
  getUser = (req, res) => {
    res.status(200).send({ firstName: "Aphirat", lastName: "Nimanussonkul" });
  };
}

export default new UserController();
