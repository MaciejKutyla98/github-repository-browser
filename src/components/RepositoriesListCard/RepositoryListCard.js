import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

const bull = (
    <Box
        component="span"
        sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
        •
    </Box>
);

export const RepositoryListCard = (props) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/repository-details/${props.repositoryName}`);
    };

    return (
        <Card sx={{ minWidth: 275, margin: 8 }}>
            <CardContent>
                <Typography variant="h5" component="div">
                    {props.repositoryName}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={handleClick}>
                    More details
                </Button>
            </CardActions>
        </Card>
    );
};
