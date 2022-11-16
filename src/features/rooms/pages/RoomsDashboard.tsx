import { Skeleton, Tab, Tabs, tabsClasses } from "@mui/material";
import { Container } from "@mui/system";
import { useState } from "react";
import { useGetRoomByIdQuery } from "../../../common/api/roomsApi";
import Room from "../components/Room";

const RoomsDashboard = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const { data } = useGetRoomByIdQuery([
    "ceae0d77-2fd6-dbe3-0f33-61c355c106ff",
    "4c0ad727-1652-3b6e-4adb-61c21a17a4b1",
  ]);

  return (
    <Container>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        aria-label="visible arrows tabs"
        sx={{
          [`& .${tabsClasses.scrollButtons}`]: {
            "&.Mui-disabled": { opacity: 1 },
          },
        }}
      >
        {data?.roomInfo.map((v, i) => (
          <Tab key={i} label={`Room ${i + 1}`} />
        ))}
        {data && <Tab label="Room 3" disabled />}
      </Tabs>

      {data?.roomInfo ? (
        <Room roomData={data?.roomInfo[value]} />
      ) : (
        <Skeleton variant="rectangular" width="100%" height={500} />
      )}
    </Container>
  );
};

export default RoomsDashboard;
