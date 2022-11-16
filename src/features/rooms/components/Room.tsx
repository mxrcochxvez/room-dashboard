import { Card, Divider, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { RoomInfo } from "../../../common/api/roomsApi";
import RoomContent from "./RoomContent";
import TravelersContent from "./TravelersContent";

interface RoomProps {
  roomData: RoomInfo;
}

const Room: React.FC<RoomProps> = ({ roomData }) => {
  const { room, hotel, travelers } = roomData;

  return (
    <div>
      <Card>
        <RoomContent room={room[0]} hotel={hotel[0]} />
        <Divider />
        <Container sx={{ p: "12px" }}>
          <Typography variant="h6">Guests in this room</Typography>
          <TravelersContent travelers={travelers} />
        </Container>
      </Card>
    </div>
  );
};

export default Room;
