import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Avatar, Button, Card, CardContent, List, ListItem, ListItemText, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { PaginationPanel } from "../../components";
import { paginate } from "../../utils/helpers";
import { setPage, setPagintaionRepos } from "../../features/UserRepos/userReposSlice";

const User = () => {
  const dispatch = useDispatch();
  const { userId } = useParams();
  const navigate = useNavigate();
  const usersData = useSelector((state) => state.userData.usersData);
  const paginatedRepos = useSelector((state) => state.userRepos.paginatedRepos);
  const page = useSelector((state) => state.userRepos.page);
  const user = usersData.find((user) => user.id.toString() === userId);
  const handleChangePage = (event, value) => {
    dispatch(setPage(value));
  };
  useEffect(() => {
    if (user && user.repos_url) {
      dispatch(setPagintaionRepos(paginate(user.repos_url, 5)));
    }
    return () => {
      dispatch(setPagintaionRepos([]));
      dispatch(setPage(1));
    };
  }, [user, dispatch]);
  return (
    <>
      {user ? (
        <Card className="my-12 relative min-w-[500px] min-h-[600px] ">
          <CardContent>
            <Avatar className="mt-4 min-w-[200px] min-h-[200px] mb-4 mx-auto" alt={user.login} src={user.avatar_url} />
            <Typography className="flex justify-center" variant="h4">
              {user.login}
            </Typography>
            <Typography className="flex justify-center" variant="body1" color="text.secondary">
              ID: {user?.id}
            </Typography>
            <Typography variant="h5" gutterBottom>
              Repositories:
            </Typography>
            <List dense>
              {paginatedRepos[page - 1] &&
                paginatedRepos[page - 1].map((repo, i) => (
                  <ListItem key={repo.id}>
                    <ListItemText primary={`${i + 1 + page * 5 - 5}. ${repo.name}`} />
                  </ListItem>
                ))}
            </List>
            <div className="flex justify-center">
              {paginatedRepos[page - 1] && paginatedRepos.length > 1 && (
                <PaginationPanel onChangePage={handleChangePage} page={page} count={paginatedRepos.length} />
              )}
            </div>
          </CardContent>
          <Button onClick={() => navigate(-1)} sx={{ position: "absolute", top: "15px", left: "15px" }}>
            back
          </Button>
        </Card>
      ) : (
        <div>Пользователь не найден</div>
      )}
    </>
  );
};

export default User;
