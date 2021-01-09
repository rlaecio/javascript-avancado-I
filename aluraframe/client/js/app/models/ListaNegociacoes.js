class ListaNegociacoes {

    constructor() {

        this._negociacoes = []
    }

    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
    }

    get negociacoes() {
        return  [].concat(this._negociacoes); 
    }

    constructor(armadilha) {

        this._negociacoes = [];
        this._armadilha = armadilha;
    }

}