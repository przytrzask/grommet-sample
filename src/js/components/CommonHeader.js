import React from 'react';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';
import NavAnchor from './NavAnchor';


const CommonHeader = () => {
  return (
    <Header direction="row"
        pad="small"
        primary={true} colorIndex="neutral-3-a" >
        <Title>GiftPlus+</Title>
        <Menu 
            
            
                label='Widok'
                inline={false}
                closeOnClick={false}
                size='small'>
                <Anchor  path="/"
                      >Transakcje
                    
                </Anchor>
                <NavAnchor path="users">
                    Użytkownicy
                </NavAnchor>
                <NavAnchor path="contractors">Kontrahenci</NavAnchor>
                <NavAnchor path="orders">
                    Zamówienia Kart
                 </NavAnchor>
                <NavAnchor path="cards">
                    Cesje kart
                 </NavAnchor>
            </Menu>
            <Menu pad={{ horizontal: 'medium' }} direction='row'
                // icon={<Actions />}
                label='Opcje'
                inline={false}
                primary={false}
                closeOnClick={false}
                size='small'>
                <NavAnchor path="rrr"
                    >
                    Zmień hasło
  </NavAnchor>
                <NavAnchor path="/a">
                    Anulowanie transakcji
  </NavAnchor>
                <NavAnchor path="/a">
                    Weryfikacja certyfikatu transakcji
  </NavAnchor>
                <NavAnchor path="/a">
                    Zmiana daty ważności karty
  </NavAnchor>
                <NavAnchor path="/a">
                    Masowa zmiana daty i ważności karty
  </NavAnchor>
                <NavAnchor path="/a">
                    Masowa aktywacja kart(sprzedaż B2B)
  </NavAnchor>
            </Menu>
            <Menu size='small' label="Zestawienia">
                <NavAnchor path="/a">
                    Statystyki
  </NavAnchor>
                <NavAnchor path="/a">
                    Raporty
  </NavAnchor>
                <NavAnchor path="/a">
                    Raporty automatyczne
  </NavAnchor>
            </Menu>
            <Menu label="Pomoc"
            size='small'>
                <NavAnchor path="/a">
                    Licencja
  </NavAnchor>
                <NavAnchor path="status">
                    Statusy transakcji
  </NavAnchor>
                <NavAnchor path="/a">
                    Serwis
  </NavAnchor>
                <NavAnchor path="/a">
                    Podręcznik kierownika
  </NavAnchor>
                <NavAnchor path="/a">
                    Podręcznik kasjera
  </NavAnchor>
                <NavAnchor path="/a">
                    Podręcznik księgowego
  </NavAnchor>
            </Menu>
        </Header>


  );


};

export default CommonHeader;
