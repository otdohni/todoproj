import React from "react";
import { useNavigate } from "react-router-dom";

export const AboutPage: React.FC = () => {
    const navigate = useNavigate()

    return(
        <>
            <h1>Раздел информации</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam rem dolorem hic nihil dolores quam accusantium commodi non nesciunt voluptates?</p>
            <button className="btn" onClick={() => navigate('/')}>Вернуться к списку дел</button>
        </>
    )
    
}