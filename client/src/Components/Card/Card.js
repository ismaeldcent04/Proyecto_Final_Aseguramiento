import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import "./Card.css";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import axios from "axios";

export default function MediaCard(props) {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const [value, setValue] = React.useState(2);
  const [comentario, setcomentario] = useState("");
  const [reviews, setreview] = useState([]);
  function handleOpen() {
    setOpen(true);
    axios
      .get("/api/restaurant/review", props.Restaurantname)
      .then((response) => {
        console.log(response.data);
        setreview(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function agregarReview(event) {
    event.preventDefault();

    const newreview = {
      nombre: props.Restaurantname,
      comentario: comentario,
      puntuacion: value,
    };
    console.log(newreview);
    axios
      .post("/api/restaurant/review", newreview)
      .then((res) => {
        alert(res.data);
      })
      .then((err) => {
        console.log(err);
      });
  }

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const style2 = {
    border: "1px solid #000",
    p: 3,
  };

  return (
    <Card sx={{ maxWidth: 345 }} className="card">
      <CardMedia component="img" height="140" image={props.image} alt="" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.Restaurantname}
        </Typography>
        <Typography component="legend">Rate</Typography>
        <Rating name="read-only" value={3} readOnly />
        <Typography variant="body2" color="text.secondary">
          {props.RestaurantDescription}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={handleOpen}>Review</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            {/* Add Review */}
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Add Review
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Rating
            </Typography>
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Comment (Opcional)
            </Typography>
            <input
              type="text"
              value={comentario}
              className="form-control"
              placeholder="Tell us your experience"
              name="comentario"
              onChange={(event) => {
                setcomentario(event.target.value);
              }}
            />
            <button
              onClick={agregarReview}
              type="submit"
              className="btn btn-primary"
            >
              Submit
            </button>

            {/* View Review*/}
            {reviews.map((review) => {
              return (
                <Box sx={style2}>
                  <Typography
                    className="reviewheader"
                    variant="h8"
                    component="h2"
                  >
                    {review.comentario}
                  </Typography>
                </Box>
              );
            })}
          </Box>
        </Modal>
      </CardActions>
    </Card>
  );
}
