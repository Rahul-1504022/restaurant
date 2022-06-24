import React from "react";
import { Card, CardBody, CardHeader, CardImg, CardImgOverlay, CardSubtitle, CardTitle, CardText } from 'reactstrap';

const DishDetail = props => {
    return (
        <div>
            <Card style={{ marginTop: "10px" }}>
                <CardImg top src={props.detail.image} alt={props.detail.name} />
                <CardBody style={{ textAlign: "left" }}>
                    <CardTitle style={{ fontWeight: "bold", fontStyle: "italic" }}>{props.detail.name}</CardTitle>
                    <CardText style={{ fontSize: "10px" }}>
                        <p>{props.detail.description}</p>
                        <p>Caregory : {props.detail.category}</p>
                        <p>Price : {props.detail.price}/-</p>
                        <button type="button" style={{ color: "white", background: "green", Align: "center" }}>Order</button>
                    </CardText>
                </CardBody>
            </Card>
        </div>
    );
}
export default DishDetail;