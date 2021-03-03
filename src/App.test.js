import React from 'react';
import { render,screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import store from './app/store';
import {Navigation} from "./features/navigation/navigation";
import {FocusPokemon} from "./features/page/Accueil/FocusPokemon";
import {PageListeTypePokemon} from "./features/page/ListePokemon/PageListeTypePokemon";

describe('Navigation', ()=>{
    test('Test d\'un mots sur une page', () => {
        const { getByText } = render(
            <Provider store={store}>
                <Navigation/>
            </Provider>
        );
        expect(getByText(/Accueil/i)).toBeInTheDocument();
    });

    test('Test si on a une navBar', () => {
        render(
            <Provider store={store}>
                <Navigation/>
            </Provider>
        );
        expect(screen.getByRole('navigation')).toBeInTheDocument();
    });

    test('Test nb lien de redirection', () => {
        render(
            <Provider store={store}>
                <Navigation/>
            </Provider>
        );
        const listLink = screen.getAllByRole('link');
        expect(listLink.length).toEqual(5);
    });
});

describe('Page Liste type Pokemon ', ()=>{

    test('Test que aucun type est charger', async () => {
        render(
            <Provider store={store}>
                <PageListeTypePokemon/>
            </Provider>
        );

        expect(screen.getByRole('img')).toBeInTheDocument();
    });

    test('Test Un type est selectionner', async () => {
        render(
            <Provider store={store}>
                <PageListeTypePokemon/>
            </Provider>
        );

        expect(screen.queryByText(/Détails/)).toBeNull();
        await userEvent.type(screen.getByRole('option'), 'dragon');
        expect(screen.findByText(/Détails/));
    });

});

