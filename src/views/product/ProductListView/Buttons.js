/* eslint-disable no-unused-vars */
import React from "react";
import { Button } from "semantic-ui-react";
import { staticUrl } from "../../../config";

const Buttons = ({ restaurant, onSave, onCancel }) => {
    const createRest = () => {
        fetch(staticUrl + "restaurants/create", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                label: restaurant.label,
                adress: restaurant.adress,
                description: restaurant.description,
                imgUrl: restaurant.imgUrl,
                ownerId: restaurant.ownerId,
                opensAt: restaurant.opensAt,
                closeAt: restaurant.closeAt
            })
        })
            .then(res => res.json())
            .then(resJson => {
                console.log(resJson);
                if (resJson.success) {
                    alert("Successfully saved");
                    onCancel();
                } else {
                    alert(resJson.message || resJson.errorMessage);
                    alert(resJson.error);
                }
            })
            .catch(err => {
                alert("Saved ...");
            });
    };
    return (
        <Button.Group>
            <Button onClick={onCancel}>Cancel</Button>
            <Button.Or />
            <Button positive onClick={createRest}>
                Save
            </Button>
        </Button.Group>
    );
};

export default Buttons;
