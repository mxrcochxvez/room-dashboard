import {
  Avatar,
  Button,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Chip,
  Typography,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import { Room, Hotel } from "../../../common/models";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import EditIcon from "@mui/icons-material/Edit";
import CreditCardIcon from "@mui/icons-material/CreditCard";

interface RoomCardProps {
  room: Room;
  hotel: Hotel;
}

const RoomContent: React.FC<RoomCardProps> = ({ room, hotel }) => {
  return (
    <>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "grey" }} aria-label="Room">
            {room.roomName[0]}
          </Avatar>
        }
        title={room.roomName}
        subheader={`Room Type - ${room.roomType}`}
      />
      <CardMedia component="img" image={hotel?.hotelImage} />
      <CardContent>
        <Box>
          <Chip
            color="success"
            variant="outlined"
            icon={<CheckCircleOutlineIcon />}
            label={room.roomStatus}
          />
          <Chip
            color="secondary"
            variant="outlined"
            icon={<CurrencyExchangeIcon />}
            label={`Balance Due - ${room.remainingBalance}`}
            sx={{ ml: "4px" }}
          />
        </Box>
        <Container sx={{ pt: "14px" }}>
          <Typography component="p">
            A luxurious room with a beautiful view!
          </Typography>
        </Container>
      </CardContent>
      <CardActions>
        <Button>
          <EditIcon /> Modify
        </Button>
        <Button>
          <CreditCardIcon />
          Make Payment
        </Button>
      </CardActions>
    </>
  );
};

export default RoomContent;
