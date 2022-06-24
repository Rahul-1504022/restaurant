import React from "react";
import { Card, CardBody, CardHeader, CardImg, CardImgOverlay, CardSubtitle, CardTitle } from 'reactstrap';

const MenuItem = (props) => {
    return (
        <div>
            <Card style={{ margin: "5px" }} >
                <CardBody>
                    <CardImg width="100%" alt={props.dish.name} src={props.dish.image} style={{ opacity: "0.5" }} />
                    <CardImgOverlay>
                        <CardTitle style={{ cursor: "pointer" }} onClick={props.DishSelect}>{props.dish.name}</CardTitle>
                    </CardImgOverlay>
                </CardBody>
            </Card>

        </div >
    );
}
export default MenuItem;