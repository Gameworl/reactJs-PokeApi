import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";
import {FocusPokemon} from "../page/Accueil/FocusPokemon";
import "./styles/navigationStyle.scss"
import {PageListPokemon} from "../page/ListePokemon/PageListPokemon";
import {Pokemon} from "../page/DetailsPokemon/Pokemon";
import {Mespokemon} from "../page/Favorie/mesProkemon";
import {PageListeTypePokemon} from "../page/ListePokemon/PageListeTypePokemon";

/**
 * Barre de Navigation et redirection
 * @returns {*}
 * @constructor
 */
export const Navigation = () => {
    return(
        <Router >
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                        <Link className="navbar-brand" to="/">
                            <img src={"/assets/logo.png"} width="30" height="30"
                                 className="d-inline-block align-top" alt=""/>
                        </Link>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link  className={"nav-link"} to="/">Accueil</Link>
                            </li>
                            <li className="nav-item">
                                <Link  className={"nav-link"} to="/PokeList">PokeList</Link>
                            </li>
                            <li className="nav-item">
                                <Link  className={"nav-link"} to="/PokeListType">TypeList</Link>
                            </li>
                            <li className="nav-item">
                                <Link  className={"nav-link"} to="/MesPokemons">Mes Pokemons</Link>
                            </li>
                        </ul>
                    </div>
                </nav>

                {/* A <Switch> looks through its children <Route>s and
                  renders the first one that matches the current URL. */}
                <Switch>
                    <Route exact path="/PokeList">
                        <div className={"backgroundList"}>
                            <PageListPokemon/>
                        </div>
                    </Route>
                    <Route exact path="/">
                        <div className={"backgroundAccueil"} style={{backgroundImage: "/background/background.jpg"}}>
                            <FocusPokemon/>
                        </div>
                    </Route>
                    <Route exact path="/details">
                        <div className={"backgroundAccueil"}>
                            <Pokemon/>
                        </div>
                    </Route>
                    <Route exact path="/PokeListType">
                        <div className={"backgroundList"}>
                            <PageListeTypePokemon/>
                        </div>
                    </Route>
                    <Route exact path="/MesPokemons">
                        <div className={"backgroundList"}>
                            <Mespokemon/>
                        </div>
                    </Route>
                    {/*Si la route est non définit redirige vers 404*/}
                    <Route path="*">
                        <div className={"background404"}>
                        </div>
                    </Route>
                </Switch>
            </div>
        </Router>
    )

}
