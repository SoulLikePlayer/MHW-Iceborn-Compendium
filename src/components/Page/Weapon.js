import React, { useEffect, useState, useRef } from "react";
import { weapon as WeaponData } from "../data/weapon-data";
import { useParams } from "react-router-dom";
import "../../style/Page/weapon.css";

function Weapon() {
    let { name } = useParams();

    const [weapon, setWeapon] = useState(null);
    const [loading, setLoading] = useState(true);
    const videoRef = useRef(null);

    useEffect(() => {
        const foundWeapon = WeaponData.find(w => w.id === name);
        setWeapon(foundWeapon);
        setLoading(false);
    }, [name]);

    useEffect(() => {
        if (videoRef.current && weapon) {
            videoRef.current.load();
        }
    }, [weapon]);

    if (loading) {
        return <div className="weapon-loading">Recherche de l'arme...</div>
    }

    if (!weapon) {
        return <div className="weapon-not-found">Arme non trouvée</div>
    }

    return (
        <div className="weapon-container">
            <div className="weapon-header">
                <h1 className="weapon-title">{weapon.name}</h1>
            </div>
            <div className="weapon-content">
                <img
                    src={weapon.iconlink}
                    alt={weapon.name}
                    className="weapon-image"
                />
                <div className="weapon-details">
                    <blockquote className="weapon-description">
                        "{weapon.description}"
                    </blockquote>
                    <div className="weapon-video">
                        <video ref={videoRef} controls>
                            <source src={weapon.videolink} type="video/mp4" />
                            Votre navigateur ne supporte pas la lecture de vidéos.
                        </video>
                    </div>
                </div>
            </div>
            <a href="/" className="weapon-backlink">Retour au Compendium</a>
        </div>
    );
}

export default Weapon;
