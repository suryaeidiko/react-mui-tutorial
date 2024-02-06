import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

const RightBar = () => {
  return (
    <Box
      bgcolor=""
      flex={2}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      <Box sx={{ position: "fixed" }} width={300}>
        <Typography variant="h6" fontWeight={100}>
          Online Friends
        </Typography>
        <AvatarGroup max={4}>
          <Avatar alt="Surya" src="/static/images/avatar/1.jpg" />
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
          <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Latest Photos
        </Typography>
        <ImageList>
          {/* <ImageListItem>
            <img
              src="https://th.bing.com/th/id/R.6741ac70a2dffa59ee8c326fc0d2a172?rik=D69nip8J8t6RTA&riu=http%3a%2f%2fmedia1.santabanta.com%2ffull1%2fMiscellaneous%2fCartoon+Characters%2fcartoon-characters-138a.jpg&ehk=VqR1J6EM2jNWDUHjHj%2f9%2fFICvd4d10SZRqadjDMK6bE%3d&risl=&pid=ImgRaw&r=0"
              alt=""
              // loading="lazy"
            />
          </ImageListItem> */}
          <ImageListItem>
            <img
              src="https://yt3.googleusercontent.com/ytc/AOPolaTuM1LhhuTm48gQXsYttZIO68pzSvD1rz6u-lr0=s900-c-k-c0x00ffffff-no-rj"
              alt=""
              // loading="lazy"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://th.bing.com/th/id/R.fa39fe541ad885130351e71927fbac33?rik=rjzqDTRt0ML31g&riu=http%3a%2f%2fgetdrawings.com%2fcliparts%2fmr-bean-clipart-4.png&ehk=nmbO062qtFGODIiJjhd5lbNCKHf4glunkdejJ6cQadM%3d&risl=&pid=ImgRaw&r=0"
              alt=""
              // loading="lazy"
            />
          </ImageListItem>
          {/* <ImageListItem>
            <img
              src="https://i.pinimg.com/originals/49/58/46/495846b820fc6d62553fe500c4d50c7e.jpg"
              alt=""
              // loading="lazy"
            />
          </ImageListItem> */}
        </ImageList>
        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Latest Conversations
        </Typography>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="" />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src="" />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="" />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {" — Do you have Paris recommendations? Have you ever…"}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default RightBar;
