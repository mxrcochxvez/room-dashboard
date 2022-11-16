import { Chip } from "@mui/material";
import RestartAltOutlinedIcon from "@mui/icons-material/RestartAltOutlined";
import { Box } from "@mui/system";

const RoomExtras = () => {
  return (
    <Box sx={{ mt: "12px" }}>
      <Chip
        variant="outlined"
        color="primary"
        icon={<RestartAltOutlinedIcon />}
        label="Transfer Purchase"
      />
    </Box>
  );
};

export default RoomExtras;
