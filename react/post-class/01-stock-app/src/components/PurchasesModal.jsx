import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { useEffect } from "react";
import useStockRequest from "../services/useStockRequest";
import { useSelector } from "react-redux";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useNavigate } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export default function PurchasesModal({ open, handleClose, setInfo, info }) {
  const { getStock } = useStockRequest();
  const navigate = useNavigate();
  const { firms, brands, products } = useSelector((state) => state.stock);
  console.log(firms);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };

  useEffect(() => {
    getStock("firms");
    getStock("brands");
    getStock("products");
  }, []);
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ minWidth: 120 }}>
          <FormControl>
            <InputLabel id="demo-simple-select-label">Firm</InputLabel>
            <Select
              labelId="firm-simple-select-label"
              id="firm-simple-select"
              name="firmId"
              value={info?.firmId._id || info?.firmId}
              label="Firm"
              onChange={handleChange}
            >
              <MenuItem onClick={() => navigate("/stock/firms")}>
                Add New Firm
              </MenuItem>
              {firms.map((item) => (
                <MenuItem key={item._id} value={item._id}>
                  {item.name}
                </MenuItem>
              ))}
              -
            </Select>
          </FormControl>
        </Box>
      </Modal>
    </div>
  );
}
