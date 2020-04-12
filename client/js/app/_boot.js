import {currentInstance} from './controllers/NegociacaoController';

let negociacaoController = currentInstance();

document.querySelector('.form').onsubmit = negociacaoController.adiciona.bind(negociacaoController);
document.querySelector('#importa-negociacoes-btn').onclick = negociacaoController.importaNegociacoes.bind(negociacaoController);
document.querySelector('#apaga-negociacoes-btn').onclick = negociacaoController.apaga.bind(negociacaoController);