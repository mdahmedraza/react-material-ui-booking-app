import { Typography, Container, Box, Paper, BottomNavigation} from "@mui/material";
import ImageCollage from '../components/ImageCollage';
import CustomizedAccordions from "../components/Accordian";

const Tour=()=>{
    return(
    <Container sx={{width: 900}}>
        <Typography variant="h3" component="h1" marginTop={3}>
            Explore the World in Vegas
        </Typography>
        <Box marginTop={3} sx={{display: "flex"}}>
            <img src="https://travelpassionate.com/wp-content/uploads/2021/01/Las-Vegas-Nevada-USA-at-the-Welcome-to-Las-Vegas-Sign-at-dusk.-min-800x534.jpg" alt="" height={325} />
            <ImageCollage />
        </Box>
        <Box>
            <Typography variant="h6" component="h1" marginTop={3} marginBottom={2}>
                About this ticket
            </Typography>
            <Typography variant="paragraph" component="p" marginTop={3}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Typography>
        </Box>
        <Box>
        <Typography variant="h6" component="h1" marginTop={3}>
                Frequently asked Questions.
            </Typography>
            <CustomizedAccordions />
        </Box>
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation>
            Hello
        </BottomNavigation>
      </Paper>
    </Container>
    )
}
export default Tour;