import { Box, Button, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  btnStyle,
  cardStyle,
  newAddingBtnStyle,
  pageHeaderStyle,
} from "../styles/globalStyles";
import FirmCard from "../components/FirmCard";
import useStockRequest from "../services/useStockRequest";
import { useSelector } from "react-redux";

const Firms = () => {
  const { getStock } = useStockRequest();
  const { firms } = useSelector((state) => state.stock);

  const [open, setOpen] = useState(false)
  const initialState = {
    name:"",
    phone:"",
    image:"",
    address:"",
  }

  const [infoFirm, setInfoFirm] = useState(initialState)

  const handleOpen = () => setInfoFirm(true)
  const handleClose = () => {
    setOpen(false)
    setInfoFirm(initialState)
  }

  useEffect(() => {
    getStock("firms");
  }, []);
  return (
    <div>
      <Typography sx={pageHeaderStyle}>FIRMS</Typography>
      <Button sx={newAddingBtnStyle}>New Firm</Button>
      <Stack sx={cardStyle} useFlexGap direction={"row"} spacing={{xs:1, sm:2, md:3}}>
        {firms.map((firm) => (
          <Box key={firm?._id}>
            <FirmCard firm={firm} handleOpen={handleOpen} setInfoFirm={setInfoFirm} />
          </Box>
        ))}
      </Stack>
    </div>
  );
};

export default Firms;
