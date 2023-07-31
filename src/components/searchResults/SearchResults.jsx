import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const SearchResults = ({ users }) => {
  console.log(users);
  return (
    <div className=" w-[500px]">
      <List className="w-full">
        {users &&
          users.map((u) => (
            <Link className="cursor-pointer" key={u.id} to={`/user/${u.id}`}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt={u.login} src={u.avatar_url} />
                </ListItemAvatar>
                <ListItemText
                  primary={u.login}
                  secondary={
                    <>
                      <Typography sx={{ display: "inline" }} component="span" variant="body1" color="text.primary">
                        id: {u.id}
                      </Typography>
                      {` — All Repositories: ${u.repos_url ? u.repos_url.length : "limit rate"}`}
                    </>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
            </Link>
          ))}
      </List>
    </div>
  );
};

export default SearchResults;
