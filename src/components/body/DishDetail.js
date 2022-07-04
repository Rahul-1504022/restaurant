import React from "react";
import { Card, CardBody, CardHeader, CardImg, CardImgOverlay, CardSubtitle, CardTitle, CardText } from 'reactstrap';
import LoadComments from "./LoadComments";
import CommentForm from "./CommentForm";


const DishDetail = props => {
    return (
        <div>
            <Card style={{ marginTop: "10px" }}>
                <CardImg top src={props.detail.image} alt={props.detail.name} />
                <CardBody style={{ textAlign: "left" }}>
                    <CardTitle style={{ fontWeight: "bold", fontStyle: "italic" }}>{props.detail.name}</CardTitle>
                    <CardText style={{ fontSize: "16px" }}>
                        {props.detail.description}
                    </CardText>
                    <CardText style={{ fontSize: "16px" }}>
                        Caregory : {props.detail.category}
                    </CardText>
                    <CardText style={{ fontSize: "16px" }}>
                        Price : {props.detail.price}/-
                    </CardText>
                    <hr />
                    <h5 style={{ fontStyle: "italic" }}><u>Comments</u></h5>
                    <LoadComments comments={props.comments} />
                    <hr />
                    <CommentForm dishId={props.detail.id} addComment={props.addComment} />

                </CardBody>
            </Card>
        </div>
    );
}
export default DishDetail;