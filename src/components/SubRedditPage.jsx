import React from "react";
import { useParams } from "react-router-dom";

export const SubRedditPage = () => {

    const { subReddit } = useParams();


    return (
        <div>
            <h2>SubRedditPage</h2>
            <h3>{subReddit}</h3>

        </div>
    )
}