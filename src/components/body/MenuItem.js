import React from "react";
import { Card, CardBody, CardHeader, CardImg, CardImgOverlay, CardSubtitle, CardTitle, CardGroup, Col } from 'reactstrap';

const MenuItem = (props) => {
    return (
        <div>
            <Card style={{ margin: "5px", height: "100%", width: "30%" }} >

                <CardBody>
                    <CardImg top alt={props.dish.name} src={props.dish.image} style={{ opacity: "0.8" }} />
                    <CardTitle style={{ cursor: "pointer" }} onClick={props.DishSelect}>{props.dish.name}</CardTitle>
                </CardBody>
            </Card>
        </div >
    );
}
export default MenuItem;