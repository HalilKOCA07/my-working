import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import useStockRequest from "../services/useStockRequest";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from '@mui/icons-material/Delete';
import { btnStyle } from "../styles/globalStyles";
import { heIL } from "@mui/material/locale";

const FirmCard = ({ firm }) => {
  const { firms } = useSelector((state) => state.stock);
  const { getStock } = useStockRequest();
  console.log(firms);
  useEffect(() => {
    getStock("firms");
  }, []);
  return (
    <Card sx={{width: 300, height:500, display:"grid", justifyContent:"space-between" }}>
      <CardActionArea sx={{height:400}}>
        <Typography gutterBottom variant="h5" component="div">
          {firm?.name}
        </Typography>
        <CardMedia
          component="img"
          height="140"
          image={firm?.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {firm?.address}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {firm?.phone}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{justifyContent:"center"}}>
        <Button sx={btnStyle}>
          <EditIcon />
        </Button>
        <Button sx={btnStyle}>
          <DeleteIcon />
        </Button>
      </CardActions>
    </Card>
  );
};

export default FirmCard;
