import { Box, IconButton, Typography } from "@mui/material";
import PeopleCard from "./PeopleCard";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import TypeMessageBox from '../../TypeMessageBox';
import { useTheme } from '@emotion/react';

export default function ChatList() {

const theme = useTheme();
const isDark = theme.palette.mode === "";


  return (
    <>
    <Box
            display={"flex"}
            height={"100%"}
            // width={"100%"}
            flexDirection={"column"}
            justifyContent={"space-between"}
            overflow={"auto"}
            sx={{ flexGrow: 1 }}
            py={3}
          >
            <Box
              px={3}
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
              mb={2}
            >
              <IconButton>
                <ArrowBackIcon />
              </IconButton>
              <PeopleCard
                title="Abdullah Al Kaisan"
                subTitle="Web deloper"
                avatar={1}
                badge={1}
                avatarUrl={"https://lh3.googleusercontent.com/a/ACg8ocKjcLQnbqhz1e6GuIXL1IrBSg2pG_FSAtw-vO1ejOyW890"}
                flag={"ph"}
                isOnline={"online"}
              />
              <IconButton>
                <MoreHorizIcon />
              </IconButton>
            </Box>

            {/* justifyContent:"flex-end",  */}
            <Box
              px={2}
              sx={{
                flexGrow: 1,
                flexDirection: "column",
                height: "100%",
                display: "flex",
                overflowY: "auto",
              }}
            >
              <Box
                display={"flex"}
                justifyContent={"flex-start"}
                width={"100%"}
                my={0.5}
              >
                <Box
                  sx={{
                    p: 1,
                    borderRadius: 4,
                    display: "flex",
                    // width:"max-content"
                    minWidth: "auto",
                    maxWidth: "fit-content",
                    flexWrap: "wrap",
                    wordWrap: "break-word",
                    // border:"1px solid #99999920"
                  }}
                  bgcolor={`${isDark ? "#222" : "#f1f1f190"}`}
                >
                  {/* <Avatar_small/> */}

                  <Box
                    display={"flex"}
                    justifyContent={"space-between"}
                    width={1}
                  >
                    <PeopleCard
                      title={"Abdullah Al Kaisan"}
                      varified={1}
                      subTitle="Founder of Kaitoker"
                      avatar={true}
                    />
                    <IconButton>
                      <MoreHorizIcon />
                    </IconButton>
                  </Box>

                  <Typography m={1} variant="p" gutterBottom>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Doloribus quibusdam asperiores, soluta aliquam at explicabo
                    ad perspiciatis veritatis voluptatum tenetur!
                  </Typography>

                  <Box width={1} textAlign={"end"}>
                    <Typography mx={1} variant="caption" gutterBottom>
                      3:11 AM - 1/2/2024
                    </Typography>
                  </Box>
                </Box>
              </Box>

              <Box
                display={"flex"}
                justifyContent={"flex-start"}
                width={"100%"}
                my={0.5}
              >
                <Box
                  sx={{
                    p: 1,
                    borderRadius: 4,
                    display: "flex",
                    // width:"max-content"
                    minWidth: "auto",
                    maxWidth: "fit-content",
                    flexWrap: "wrap",
                    wordWrap: "break-word",
                    bgColor: "red",
                  }}
                  bgcolor={`${isDark ? "#222" : "#f1f1f1"}`}
                >
                  {/* <Avatar_small/> */}
                  <PeopleCard  />
                  <Typography m={1} variant="p" gutterBottom>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Doloribus quibusdam asperiores, soluta aliquam at explicabo
                    ad perspiciatis veritatis voluptatum tenetur!
                  </Typography>
                </Box>
              </Box>

              <Box
                display={"flex"}
                justifyContent={"flex-start"}
                width={"100%"}
                my={0.5}
              >
                <Box
                  sx={{
                    p: 1,
                    borderRadius: 4,
                    display: "flex",
                    // width:"max-content"
                    minWidth: "auto",
                    maxWidth: "fit-content",
                    flexWrap: "wrap",
                    wordWrap: "break-word",
                  }}
                  bgcolor={"#f1f1f1"}
                >
                  {/* <Avatar_small/> */}
                  <Typography m={1} variant="p" gutterBottom>
                    Lorem, ipsum dolor.
                  </Typography>
                </Box>
              </Box>

              <Box
                display={"flex"}
                justifyContent={"flex-end"}
                width={"100%"}
                my={0.5}
              >
                <Box
                  sx={{
                    p: 1,
                    borderRadius: 4,
                    display: "flex",
                    // width:"max-content"
                    minWidth: "auto",
                    maxWidth: "fit-content",
                    flexWrap: "wrap",
                    wordWrap: "break-word",
                    backgroundColor: "#333000",
                    color: "#fff",
                  }}
                >
                  {/* <Avatar_small/> */}
                  <Typography m={1} variant="p" gutterBottom>
                    Lorem, ipsum dolor.
                  </Typography>
                </Box>
              </Box>

              <Box
                display={"flex"}
                justifyContent={"flex-start"}
                width={"100%"}
                my={0.5}
              >
                <Box
                  sx={{
                    p: 1,
                    borderRadius: 4,
                    display: "flex",
                    // width:"max-content"
                    minWidth: "auto",
                    maxWidth: "fit-content",
                    flexWrap: "wrap",
                    wordWrap: "break-word",
                    bgColor: "red",
                  }}
                  bgcolor={"#f1f1f1"}
                >
                  {/* <Avatar_small/> */}
                  <Typography m={1} variant="p" gutterBottom>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Doloribus quibusdam asperiores, soluta aliquam at explicabo
                    ad perspiciatis veritatis voluptatum tenetur!
                  </Typography>
                </Box>
              </Box>

              <Box
                display={"flex"}
                justifyContent={"flex-start"}
                width={"100%"}
                my={0.5}
              >
                <Box
                  sx={{
                    p: 1,
                    borderRadius: 4,
                    display: "flex",
                    // width:"max-content"
                    minWidth: "auto",
                    maxWidth: "fit-content",
                    flexWrap: "wrap",
                    wordWrap: "break-word",
                    bgColor: "red",
                  }}
                  bgcolor={"#f1f1f1"}
                >
                  {/* <Avatar_small/> */}
                  <Typography m={1} variant="p" gutterBottom>
                    Lorem, ipsum dolor.
                  </Typography>
                </Box>
              </Box>

              <Box
                display={"flex"}
                justifyContent={"flex-end"}
                width={"100%"}
                my={0.5}
              >
                <Box
                  sx={{
                    p: 1,
                    borderRadius: 4,
                    display: "flex",
                    // width:"max-content"
                    minWidth: "auto",
                    maxWidth: "fit-content",
                    flexWrap: "wrap",
                    wordWrap: "break-word",
                    backgroundColor: "#333000",
                    color: "#fff",
                  }}
                >
                  {/* <Avatar_small/> */}
                  <Typography m={1} variant="p" gutterBottom>
                    Lorem, ipsum dolor.
                  </Typography>
                </Box>
              </Box>

              <Box
                display={"flex"}
                justifyContent={"flex-start"}
                width={"100%"}
                my={0.5}
              >
                <Box
                  sx={{
                    p: 1,
                    borderRadius: 4,
                    display: "flex",
                    // width:"max-content"
                    minWidth: "auto",
                    maxWidth: "fit-content",
                    flexWrap: "wrap",
                    wordWrap: "break-word",
                    bgColor: "red",
                  }}
                  bgcolor={"#f1f1f1"}
                >
                  {/* <Avatar_small/> */}
                  <Typography m={1} variant="p" gutterBottom>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Doloribus quibusdam asperiores, soluta aliquam at explicabo
                    ad perspiciatis veritatis voluptatum tenetur!
                  </Typography>
                </Box>
              </Box>

              <Box
                display={"flex"}
                justifyContent={"flex-start"}
                width={"100%"}
                my={0.5}
              >
                <Box
                  sx={{
                    p: 1,
                    borderRadius: 4,
                    display: "flex",
                    // width:"max-content"
                    minWidth: "auto",
                    maxWidth: "fit-content",
                    flexWrap: "wrap",
                    wordWrap: "break-word",
                    backgroundColor: "#f1f1f1",
                  }}
                >
                  {/* <Avatar_small/> */}
                  <Typography m={1} variant="p" gutterBottom>
                    Lorem, ipsum dolor.
                  </Typography>
                </Box>
              </Box>

              <Box
                display={"flex"}
                justifyContent={"flex-end"}
                width={"100%"}
                my={0.5}
              >
                <Box
                  sx={{
                    p: 1,
                    borderRadius: 4,
                    display: "flex",
                    // width:"max-content"
                    minWidth: "auto",
                    maxWidth: "fit-content",
                    flexWrap: "wrap",
                    wordWrap: "break-word",
                    backgroundColor: "#333000",
                    color: "#fff",
                  }}
                >
                  {/* <Avatar_small/> */}
                  <Typography m={1} variant="p" gutterBottom>
                    Lorem, ipsum dolor.
                  </Typography>
                </Box>
              </Box>
            </Box>

            <TypeMessageBox />

            {/* <PeopleList/>
                  <PeopleList/>
                  <PeopleList/>
                  <PeopleList/>
                  <PeopleList/>
                  <PeopleList/>
                  <PeopleList/>
                  <PeopleList/>
                  <PeopleList/>
                  <PeopleList/>
                  <PeopleList/>
                  <PeopleList/>
                  <PeopleList/>
                  <PeopleList/>
                  <PeopleList/>
                  <PeopleList/>
                  <PeopleList/> */}
          </Box>
 

    </>
  )
}
