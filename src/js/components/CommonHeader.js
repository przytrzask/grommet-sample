import React from 'react';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';
import NavAnchor from './NavAnchor';


const CommonHeader = () => {
  return (
    <Header  direction="row" fixed={true}  splash={false}
        pad="small"
        primary={true}  >
        <Title>GiftPlus+</Title>
        <Menu 
            
            dropAlign={{left: "left", right: "left", top: "bottom"}}
                label='WIDOK'
                inline={false}
                closeOnClick={true}
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
                <NavAnchor path="digital">
                    Zamówienia Elektroniczne
                 </NavAnchor>
            </Menu>
            <Menu pad={{ horizontal: 'medium' }} direction='row'
                // icon={<Actions />}
                label='OPCJE'
                inline={false}
                primary={false}
                closeOnClick={false}
                size='small'>
                <NavAnchor path="/password"
                    >
                    Zmień hasło
  </NavAnchor>
                <NavAnchor path="/cancelTransaction">
                    Anulowanie transakcji
  </NavAnchor>
                <NavAnchor path="/b">
                    Weryfikacja certyfikatu transakcji
  </NavAnchor>
                <NavAnchor path="/c">
                    Zmiana daty ważności karty
  </NavAnchor>
                <NavAnchor path="/d">
                    Masowa zmiana daty i ważności karty
  </NavAnchor>
                <NavAnchor path="/e">
                    Masowa aktywacja kart(sprzedaż B2B)
  </NavAnchor>
            </Menu>
            <Menu size='small' label="ZESTAWIENIA">
                <NavAnchor path="/stats">
                    Statystyki
  </NavAnchor>
                <NavAnchor path="/reports">
                    Raporty
  </NavAnchor>
                <NavAnchor path="/h">
                    Raporty automatyczne
  </NavAnchor>
            </Menu>
            <Menu label="POMOC"
            size='small'>
                <NavAnchor path="/i">
                    Licencja
  </NavAnchor>
                <NavAnchor path="transactionstates">
                    Statusy transakcji
  </NavAnchor>
                <NavAnchor path="/j">
                    Serwis
  </NavAnchor>
                <NavAnchor path="/k">
                    Podręcznik kierownika
  </NavAnchor>
                <NavAnchor path="/l">
                    Podręcznik kasjera
  </NavAnchor>
                <NavAnchor path="/m">
                    Podręcznik księgowego
  </NavAnchor>
            </Menu>
        </Header>


  );


};

export default CommonHeader;
