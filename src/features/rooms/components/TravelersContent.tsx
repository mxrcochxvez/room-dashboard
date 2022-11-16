import { Chip } from "@mui/material";
import { Traveler } from "../../../common/models";
import PersonIcon from "@mui/icons-material/Person";
import ChildCareIcon from "@mui/icons-material/ChildCare";
import { Box } from "@mui/system";

interface TravelersContentProps {
  travelers: Traveler[];
}

const TravelersContent: React.FC<TravelersContentProps> = ({ travelers }) => {
  return (
    <Box sx={{ mt: "12px" }}>
      {travelers.map((t, i) => {
        if (t.age > 7) {
          return (
            <Chip
              key={t.id}
              icon={<PersonIcon />}
              label={`${t.firstName} ${t.lastName}`}
              variant="outlined"
              color="primary"
            />
          );
        } else {
          return (
            <Chip
              key={t.id}
              icon={<ChildCareIcon />}
              label={`${t.firstName} ${t.lastName}`}
              variant="outlined"
              color="primary"
            />
          );
        }
      })}
    </Box>
  );
};

export default TravelersContent;
