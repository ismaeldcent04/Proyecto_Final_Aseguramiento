import { render, screen } from '@testing-library/react';
import App from './App';

/*SIGN UP SECTION */
router.get("/sign-up", (req, res) => {
  res.end("Hola esta es la pagina de registro");
});

router.post("/sign-up", (req, res) => {
  console.log(req.body.email);

  const newUser = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
  });
  newUser.save(function (err) {
    if (!err) {
      console.log("Succesfully added new user");
    } else {
      res.end(err);
    }
  });
});
