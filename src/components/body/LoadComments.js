import React from "react";
import dateFormat from "dateformat";

const LoadComments = props => {
    return (
        props.comments.map(comment => {
            return (
                <div key={comment.id} style={{ border: "1px solid grey ", margin: "5px 0px 5px 0px", borderRadius: "3px", padding: "5px" }}>

                    <h6 style={{ fontSize: "16px" }}>{comment.author}</h6>
                    <p style={{ fontSize: "13px" }}>{comment.comment}</p><p style={{ fontSize: "13px" }}>User Rating : {comment.rating}*</p><p style={{ fontSize: "13px" }}>{dateFormat(comment.date, "dddd, mmmm dS, yyyy, h:MM TT")}</p>
                </div>
            );
        })
    );
}

export default LoadComments;