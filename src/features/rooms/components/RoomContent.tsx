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
import { Room, Hotel, Group } from "../../../common/models";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import EditIcon from "@mui/icons-material/Edit";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import ErrorIcon from "@mui/icons-material/Error";
import InfoIcon from "@mui/icons-material/Info";

interface RoomCardProps {
  room: Room;
  hotel: Hotel;
  group: Group;
}

const RoomContent: React.FC<RoomCardProps> = ({ room, hotel, group }) => {
  const determineBalanceDue = () => {
    const balance = parseInt(room.remainingBalance);

    if (balance <= 0) {
      return (
        <Chip
          color="secondary"
          variant="outlined"
          icon={<CurrencyExchangeIcon />}
          label={`Paid In Full`}
          sx={{ ml: "4px" }}
        />
      );
    } else if (balance >= 0 && room.daysTillFinalPaymentDue <= 0) {
      return (
        <Chip
          color="secondary"
          variant="outlined"
          icon={<CurrencyExchangeIcon />}
          label={`Balance Due - ${room.remainingBalance}`}
          sx={{ ml: "4px" }}
        />
      );
    }
  };

  const determineBooked = () => {
    switch (room.roomStatus) {
      case "Active":
        return (
          <Chip
            color="success"
            variant="outlined"
            icon={<CheckCircleOutlineIcon />}
            label={"Booked"}
          />
        );
      case "Pending":
        return (
          <Chip
            color="info"
            variant="outlined"
            icon={<InfoIcon />}
            label={"Processing"}
          />
        );
      case "Cancelled":
        return (
          <Chip
            color="error"
            variant="outlined"
            icon={<ErrorIcon />}
            label={"Cancelled"}
          />
        );
    }
  };

  return (
    <>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "grey" }} aria-label="Room">
            {room.roomName[0]}
          </Avatar>
        }
        title={group.groupName}
        subheader={
          <>
            <Typography fontSize={12}>Room Type - {room.roomType}</Typography>
            <Typography fontSize={12}>
              {hotel.hotelName} - {room.roomType}
            </Typography>
            <Typography fontSize={12}>
              {room.travelStartDate} - {room.travelEndDate}
            </Typography>
          </>
        }
      />
      <CardMedia component="img" image={hotel?.hotelImage} />
      <CardContent>
        <Box>
          {determineBooked()}
          {determineBalanceDue()}
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
