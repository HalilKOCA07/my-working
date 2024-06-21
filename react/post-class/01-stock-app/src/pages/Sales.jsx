import { useState, useEffect } from "react";
import SalesTable from "../components/salesTable";
import { useSelector } from "react-redux";
import useStockRequest from "../services/useStockRequest";
import { Button, Typography } from "@mui/material";
import { newAddingBtnStyle, pageHeaderStyle } from "../styles/globalStyles";

const Sales = () => {
  const { sales } = useSelector((state) => state.stock);
  const { getStock } = useStockRequest();

  const initialState = {
    brand: "",
    product: "",
    quantity: "",
    price: "",
  };

  const [infoSales, setInfoSales] = useState(initialState);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setInfoSales(initialState);
  };

  useEffect(() => {
    getStock("sales");
  }, []);

  return (
    <div>
      <Typography sx={pageHeaderStyle}>SALES</Typography>
      <Button sx={newAddingBtnStyle} onClick={handleOpen}>
        NEW SALES
      </Button>
      <SalesTable sales={sales} />
    </div>
  );
};

export default Sales;
