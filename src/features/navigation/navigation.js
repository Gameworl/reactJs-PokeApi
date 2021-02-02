import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";
import logo from "../../assets/logo.png"
import {FocusPokemon} from "../page/Accueil/FocusPokemon";
import "./styles/navigationStyle.scss"
import {PageListPokemon} from "../page/ListePokemon/PageListPokemon";
import {Pokemon} from "../page/DetailsPokemon/Pokemon";
import {Mespokemon} from "../page/Favorie/mesProkemon";

export const Navigation = () => {
    return(
        <Router >
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <Link className="navbar-brand" to="/">
                            <img src={logo} width="30" height="30"
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
                        <div className={"backgroundAccueil"}>
                            <FocusPokemon/>
                        </div>
                    </Route>
                    <Route exact path="/details">
                        <div className={"backgroundAccueil"}>
                            <Pokemon/>
                        </div>
                    </Route>
                    <Route exact path="/MesPokemons">
                        <div className={"backgroundList"}>
                            <Mespokemon/>
                        </div>
                    </Route>
                    <Route path="*">

                    </Route>
                </Switch>
            </div>
        </Router>
    )

}
