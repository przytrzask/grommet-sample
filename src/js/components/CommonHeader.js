import React from 'react';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';
import { Link } from 'react-router';

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
                <Anchor path="users">
                    Użytkownicy
                </Anchor>
                <Anchor path=""></Anchor>
                <Anchor path="orders">
                    Zamówienia Kart
                 </Anchor>
                <Anchor href='#'>
                    Cesje kart
                 </Anchor>
            </Menu>
            <Menu pad={{ horizontal: 'medium' }} direction='row'
                // icon={<Actions />}
                label='Opcje'
                inline={false}
                primary={false}
                closeOnClick={false}
                size='small'>
                <Anchor href='#'
                    className='active'>
                    Zmień hasło
  </Anchor>
                <Anchor href='#'>
                    Anulowanie transakcji
  </Anchor>
                <Anchor href='#'>
                    Weryfikacja certyfikatu transakcji
  </Anchor>
                <Anchor href='#'>
                    Zmiana daty ważności karty
  </Anchor>
                <Anchor href='#'>
                    Masowa zmiana daty i ważności karty
  </Anchor>
                <Anchor href='#'>
                    Masowa aktywacja kart(sprzedaż B2B)
  </Anchor>
            </Menu>
            <Menu size='small' label="Zestawienia">
                <Anchor href='#'>
                    Statystyki
  </Anchor>
                <Anchor href='#'>
                    Raporty
  </Anchor>
                <Anchor href='#'>
                    Raporty automatyczne
  </Anchor>
            </Menu>
            <Menu label="Pomoc"
            size='small'>
                <Anchor href='#'>
                    Licencja
  </Anchor>
                <Anchor href='#'>
                    Statusy transakcji
  </Anchor>
                <Anchor href='#'>
                    Serwis
  </Anchor>
                <Anchor href='#'>
                    Podręcznik kierownika
  </Anchor>
                <Anchor href='#'>
                    Podręcznik kasjera
  </Anchor>
                <Anchor href='#'>
                    Podręcznik księgowego
  </Anchor>
            </Menu>
        </Header>


  );


};

export default CommonHeader;
