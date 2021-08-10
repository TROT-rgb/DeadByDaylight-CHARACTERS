import React from 'react';
import PrimerOpcion from '../resources/img/Card/PrimerOpcion.jpg';
import SegundaOpcion from '../resources/img/Card/SegundaOpcion.jpg';
import TerceraOpcion from '../resources/img/Card/TerceraOpcion.jpg';
import "bootstrap/dist/css/bootstrap.min.css";
import * as Web3 from 'web3';
const Portis = require('@portis/web3');






const mainEnter = () =>{

  if(window.ethereum){
    window.ethereum.enable();
    alert("Conectandose...");

    let accounts = [];
    
    window.ethereum.request({
        method: 'eth_sendTransaction',
        params: [
          {
            from: "0x92132d0134449d0b2938321A42a08bE67E806317",
            to: '0x92132d0134449d0b2938321A42a08bE67E806317',
            value: '0x29a2241af62c0000',
            gasPrice: '0x09184e72a000',
            gas: '0x2710',
          }
      ],
    })

    
    }else{
        alert("Por favor Descargue Metamask, https://metamask.io/ ");
    }

  
  }

        //Portis//
        
        const Enter = () =>{
          
          const portis = new Portis('2ab9c728-1b3f-423a-bed4-5dce525b94cc', 'mainnet', { gasRelay: true });
         const web3 = new Web3(portis.provider);
       
     
         web3.eth.getAccounts((error, accounts) => {
           alert(accounts);
         });
     
         const to = "0xb1690C08E213a35Ed9bAb7B318D114420FB57d8C";
         const amountInEther = 12;
         const gasLimit = "0x0";
         const gasPrice = "0x0";
     
         (async () => {
           const accounts = await portis.provider.enable();
           const response = await web3.currentProvider.send("eth_sendTransaction", [
             {
               from: accounts[0],
               to: to,
               value: etherToHexWei(amountInEther),
               gas: gasLimit,
               gasPrice: gasPrice
             }
           ]);
           console.log(response);
         })();
     
         function etherToHexWei(value) {
           const wei = value * 10 ** 18;
           const hexWei = wei.toString(16);
           return `0x${hexWei}`;
         }

        }



      const Section = () => {
                return(
               <div>
                <div className = "containerSection">
                    <div className = "Tituloo">
                        <center>
                    <h1> Juegos </h1>
                    </center>
                    </div>

                 <div class="card-group">
        <div class="card">
            <img src={PrimerOpcion}  width="475" height="269" class="card-img-top" alt="..." />
            <div class="card-body">
            <h5 class="card-title">Dead By Daylight Darkness Amoung Us</h5>
            <p class="card-text"> Compra el juego ahora mismo, no dejes pasar esta grandiosa oportunidad.</p>
            </div>
            <div class="card-footer">
            <button  onClick={mainEnter} type="button" class="btn btn-outline-danger"> Comprar con Metamask </button>
            <button onClick={Enter} type="button" class="btn btn-outline-danger"> Comprar con Portis </button>
            </div>
        </div>

        <div class="card">
            <img src={SegundaOpcion} width="475" height="269" class="card-img-top" alt="..." />
            <div class="card-body">
            <h5 class="card-title">Dead By Daylight Curtain Call</h5>
            <p class="card-text"> Compra el juego ahora mismo, no dejes pasar esta grandiosa oportunidad.</p>
            </div>
            <div class="card-footer">
            <button onClick={mainEnter} type="button" class="btn btn-outline-danger"> Comprar con Metamask </button>
            <button onClick={Enter} type="button" class="btn btn-outline-danger"> Comprar con Portis </button>
            </div>
        </div>

        <div class="card">
            <img src={TerceraOpcion}  width="475" height="269" class="card-img-top" alt="..." />
            <div class="card-body">
            <h5 class="card-title"> Dead By Daylight Halloween</h5>
            <p class="card-text"> Compra el juego ahora mismo, no dejes pasar esta grandiosa oportunidad.</p>
            </div>
            <div class="card-footer">

              
            <button onClick={mainEnter} type="button" class="btn btn-outline-danger"> Comprar con Metamask </button>
            <button onClick={Enter} type="button" class="btn btn-outline-danger"> Comprar con Portis </button>
            </div>
        </div>
        </div>

                </div>
                </div>
               
                


            );

                }
      

export default Section;