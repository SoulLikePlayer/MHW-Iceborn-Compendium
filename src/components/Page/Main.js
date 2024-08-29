import React from "react";
import '../../style/Page/Main.css';

function Main() {
    return (
        <div className="main-container">
            <header className="hero-section">
                <h1 className="hero-title">Bienvenue, Chasseur</h1>
                <p className="hero-subtitle">Le Compendium ultime pour tous les protecteurs du Nouveau Monde.</p>
                <a className="cta-button" href="#explore">Explorez le Compendium</a>
            </header>

            <section className="compendium-intro" id="explore">
                <h2>À la Conquête du Nouveau Monde</h2>
                <p>
                    Entrez dans un monde où chaque chasseur forge son destin. Ici, vous trouverez tout ce dont vous avez besoin pour affronter les créatures les plus redoutables, des Wyverns volantes aux Anciens Dragons. Parcourez les vastes terres glacées de Hoarfrost Reach, et découvrez les secrets cachés de chaque région.
                </p>
            </section>

            <section className="features">
                <div className="feature-item">
                    <h3>Monstres</h3>
                    <p>Découvrez les profils détaillés des créatures que vous rencontrerez, leurs faiblesses, habitudes, et le butin qu'elles peuvent offrir.</p>
                    <a href="/monsters" className="feature-link">Explorer les Monstres</a>
                </div>

                <div className="feature-item">
                    <h3>Zones</h3>
                    <p>Explorez les différents environnements, des jungles luxuriantes de la Forêt Ancienne aux pics glacés du Hoarfrost Reach.</p>
                    <a href="/zones" className="feature-link">Explorer les Zones</a>
                </div>

                <div className="feature-item">
                    <h3>Armes</h3>
                    <p>Maîtrisez les 14 types d'armes pour devenir le chasseur ultime. Chaque arme possède ses forces et faiblesses – choisissez sagement.</p>
                    <a href="/weapons" className="feature-link">Explorer les Armes</a>
                </div>
            </section>

            <section className="call-to-action">
                <h2>Préparez-vous pour la Chasse</h2>
                <p>Que vous soyez un chasseur vétéran ou un nouveau venu, il est temps d'affûter vos armes, de préparer vos potions, et de partir en quête.</p>
                <a href="/prepare" className="cta-button-secondary">Préparez-vous</a>
            </section>
        </div>
    );
}

export default Main;
