import React from "react";
import { Link } from 'react-router-dom';

import "../../style/Page/Header.css";

function Header() {
    return (
        <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">Compendiumx</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle" to="/" id="monstersDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Monstres
                        </Link>
                        <div className="dropdown-menu" aria-labelledby="monstersDropdown">
                            <Link className="dropdown-item" to="/monsters/wyvern-crocs">Wyverns à Crocs</Link>
                            <Link className="dropdown-item" to="/monsters/wyvern-terre">Wyverns de Terre</Link>
                            <Link className="dropdown-item" to="/monsters/wyvern-volante">Wyverns Volantes</Link>
                            {/* Ajoutez les autres types de monstres ici */}
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle" to="/" id="zonesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Zones
                        </Link>
                        <div className="dropdown-menu" aria-labelledby="zonesDropdown">
                            <Link className="dropdown-item" to="/zones/ancient-forest">Forêt Ancienne</Link>
                            <Link className="dropdown-item" to="/zones/wildspire-waste">Terres Sauvages</Link>
                            <Link className="dropdown-item" to="/zones/coral-highlands">Plateau de Corail</Link>
                            <Link className="dropdown-item" to="/zones/rotten-vale">Val Putride</Link>
                            <Link className="dropdown-item" to="/zones/iceborne">Glacier Eternel (DLC Iceborne)</Link>
                            {/* Ajoutez les autres zones ici */}
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle" to="/" id="weaponsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Armes
                        </Link>
                        <div className="dropdown-menu" aria-labelledby="weaponsDropdown">
                            <Link className="dropdown-item" to="/weapons/great-sword">Grande épée</Link>
                            <Link className="dropdown-item" to="/weapons/long-sword">Épée longue</Link>
                            <Link className="dropdown-item" to="/weapons/sword-shield">Épée et bouclier</Link>
                            <Link className="dropdown-item" to="/weapons/dual-blades">Lames doubles</Link>
                            <Link className="dropdown-item" to="/weapons/hammer">Marteau</Link>
                            <Link className="dropdown-item" to="/weapons/hunting-horn">Corne de chasse</Link>
                            <Link className="dropdown-item" to="/weapons/lance">Lance</Link>
                            <Link className="dropdown-item" to="/weapons/gunlance">Lancecanon</Link>
                            <Link className="dropdown-item" to="/weapons/switch-axe">Morpho-hache</Link>
                            <Link className="dropdown-item" to="/weapons/charge-blade">Volto-hache</Link>
                            <Link className="dropdown-item" to="/weapons/insect-glaive">Insectoglaive</Link>
                            <Link className="dropdown-item" >Arc</Link>
                            <Link className="dropdown-item" >Fusarbalète léger</Link>
                            <Link className="dropdown-item" >Fusarbalète lourd</Link>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
        </header>
    );
}

export default Header;
