import { Avatar, Box, Button, Container, Grid, Paper, Rating, Typography } from "@mui/material";
import isPropValid from "@emotion/is-prop-valid";

import styled from "@emotion/styled";

const serviceList = ["service 1", "service 2", "service 3"];

// const CustomButton = styled("button")({
//     color: "green",
//     backgroundColor: "aliceblue",
//     padding: "8",
//     borderRadius: "4",
// });

const CustomDiv = styled("div", {
    shouldForwardProp: (prop) => isPropValid(prop) && prop !== "color",
})((props) => ({
    color: props.color,
    backgroundColor: "aliceblue",
    padding: "8",
    borderRadius: "4",
}));

// const ExtraButton = styled.button<{ colorme: string; padding: number }>`
//         cursor: pointer,
//         padding: ${(props) => props.padding}px,
//         color: ${(props) => props.colorme},
//         backgroundColor: "yellow",
//         borderRadius: 10px,
//         marginLeft: 10px,

// // `;

//with custom props
const ExtraButton = styled.button<{ colorme: string; padding: number }>(
    {
        cursor: "pointer",
        backgroundColor: "yellow",
        borderRadius: "6px",
        marginLeft: "10px",
    },

    (props) => ({
        color: props.colorme,
        padding: `${props.padding}px`,
    })
);

const CustomMUIButton = styled(Button)<{ colorme: string }>(
    {
        cursor: "pointer",
        backgroundColor: "lightblue",
        marginLeft: "10px",
    },

    (props) => ({
        color: props.colorme,
    })
);

//emotion styled(api)
const MyButton = styled.button(
    {
        cursor: "pointer",
        padding: "20px",
        backgroundColor: "lightgreen",
        borderRadius: "10px",
        marginLeft: "10px",
    },

    (props) => ({
        color: props.color,
    })
);

function App() {
    return (
        <>
            <Container
                sx={{
                    bgcolor: "#ffeb3b",
                    height: "100vh",
                    width: "100vw",
                    p: 0,
                    m: 0,
                    ":hover": "blue",
                }}>
                <Typography variant="h1"> Overview</Typography>

                <Box
                    sx={{
                        display: "flex",
                        flexDirection: { xs: "column", lg: "row" },
                        justifyContent: "space-between",
                        gap: 4,
                        mt: 4,
                    }}>
                    {serviceList.map((li) => {
                        return (
                            <Paper elevation={3}>
                                <Box
                                    sx={{
                                        m: 3,
                                        p: 3,
                                        borderStyle: "solid",
                                        borderColor: "red",
                                        borderRadius: 3,
                                    }}>
                                    <Typography variant="h3" sx={{ mt: 2 }}>
                                        {li}
                                    </Typography>
                                    <Typography>
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                        Odio consequuntur nesciunt temporibus aspernatur animi.
                                        Cupiditate aliquid culpa ducimus amet sit corporis nulla
                                        omnis, officiis quos. Illum earum ad voluptate pariatur.
                                    </Typography>

                                    <Button variant="contained" color="secondary" size="large">
                                        Learn More
                                    </Button>

                                    <MyButton color="red">Hiiå</MyButton>
                                    <ExtraButton colorme="Black" padding={10}>
                                        Testing
                                    </ExtraButton>
                                    <CustomMUIButton
                                        colorme="black"
                                        sx={{
                                            borderColor: "black",
                                            border: "solid",
                                        }}>
                                        Dimelo
                                    </CustomMUIButton>

                                    <Typography component="legend">Controlled</Typography>
                                    <Rating name="simple-controlled" />
                                    <Avatar alt="Johnny Sharp" src="/static/images/avatar/1.jpg" />

                                    <CustomDiv color="red">Hi</CustomDiv>
                                </Box>
                            </Paper>
                        );
                    })}
                </Box>
            </Container>

            {/* grid is 12 columns, like bootstrap */}
            <Grid container mt={4}>
                <Grid item xs={12} sm={6} md={3}>
                    <Paper>1</Paper>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <Paper>1</Paper>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <Paper>1</Paper>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <Paper>1</Paper>
                </Grid>
            </Grid>
        </>
    );
}

export default App;
