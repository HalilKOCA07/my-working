import { useEffect, useState } from "react";
import PurchasesTable from "../components/PurchasesTable";
import { Button, Typography } from "@mui/material";
import useStockRequest from "../services/useStockRequest";
import { useSelector } from "react-redux";
import PurchasesModal from "../components/PurchasesModal";

const Purchases = () => {
  const { getStock } = useStockRequest();
  const { purchases } = useSelector((state) => state.stock);

  const initialState = {
    firmId: "",
    brandId: "",
    productId: "",
    quantity: "",
    price: "",
  };
  const [info, setInfo] = useState(initialState);
  const [open, setOpen] = useState(false);

  console.log(open);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setInfo(initialState);
  };

  useEffect(() => {
    getStock("purchases");
  }, []);
  return (
    <div>
      <Typography sx={{ fontWeight: "bold", fontSize: 18 }}>
        PURCHASES
      </Typography>
      <Button
        sx={{
          backgroundColor: "black",
          color: "white",
          m: 3,
          ":hover": { backgroundColor: "#020265" },
        }}
        onClick={handleOpen}
      >
        New Purchase
      </Button>
      <PurchasesTable purchases={purchases} handleOpen={handleOpen} setInfo={setInfo} />
      <PurchasesModal
        info={info}
        setInfo={setInfo}
        open={open}
        handleClose={handleClose}
        purchases={purchases}
      />
    </div>
  );
};

export default Purchases;
