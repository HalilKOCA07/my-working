import { useState, useEffect } from "react";
import SalesTable from "../components/salesTable";
import { useSelector } from "react-redux";
import useStockRequest from "../services/useStockRequest";

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
      <SalesTable sales={sales} />
    </div>
  );
};

export default Sales;
