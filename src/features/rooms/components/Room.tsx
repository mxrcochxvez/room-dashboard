import { DeleteOutline } from "@mui/icons-material";
import { Card, Chip, Divider, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { RoomInfo } from "../../../common/api/roomsApi";
import RoomContent from "./RoomContent";
import RoomExtras from "./RoomExtras";
import TravelersContent from "./TravelersContent";

interface RoomProps {
  roomData: RoomInfo;
}

const Room: React.FC<RoomProps> = ({ roomData }) => {
  const { room, hotel, travelers, group } = roomData;

  return (
    <div>
      <Card>
        <RoomContent room={room[0]} hotel={hotel[0]} group={group[0]} />
        <Divider />
        <Container sx={{ p: "12px" }}>
          <Typography variant="subtitle1">Guests in this room</Typography>
          <TravelersContent travelers={travelers} />
        </Container>
        <Divider />
        <Container sx={{ p: "12px" }}>
          <Typography variant="subtitle1">Room Extras</Typography>
          <RoomExtras />
        </Container>
        <Divider />
        <Container sx={{ p: "12px" }}>
          <Chip
            color="error"
            icon={<DeleteOutline />}
            label="Cancel Reservation"
          />
        </Container>
      </Card>
    </div>
  );
};

export default Room;
