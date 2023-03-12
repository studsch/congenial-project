import React from "react";
import { Nav } from 'react-bootstrap'
import vkLogo from './Icons/vk.png';
import tgLogo from './Icons/tg.png';


export default function HeaderInfo() {
    return(
    <>
    <header class="container" style={{marginTop: 20, marginBottom: 20}}>
        <div class="row">
            <h5 class="col">Строительная компания, занимается фасадами и продажей материалов</h5>
            <h5 class="col">+7 (123) 123 123 123</h5>
            <h5 class="col">г. Красноярск, ул. Ладо-кецховели 22а</h5>
            <div class="container col">
                <div class="row align-items-start">
                    <h5 class="col col-xl-4">Мы есть:</h5>
                    <Nav class="col col-xl-4">
                        <a style={{marginRight: 10}} class="col" href="https://vk.com/id450767708"><img style={{height: 20}} src={vkLogo} alt="VK"/></a>
                        <a style={{marginRight: 10}} class="col"href="https://vk.com/id450767708"><img style={{height: 20}} src={tgLogo} alt="TG"/></a>
                    </Nav>
                    
                </div>

            </div>
        </div>
    </header>
    </>

)}