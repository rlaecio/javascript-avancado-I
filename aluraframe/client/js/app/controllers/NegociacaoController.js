class NegociacaoController {
    
    constructor() {
        let $ = document.querySelector.bind(document);
         this._inputData = $('#data');
         this._inputQuantidade = $('#quantidade');
         this._inputValor= $('#valor');
    }
    
    adiciona () {
        event.preventDefault();
        let data = new Date(...
            this._inputData.value
            .split('-')
            .map(function(item, indice) {
                return item - indice % 2
            })
            
        );
        console.log(data);


        // let negociacao = new Negociacao(
        //     this._inputData.value.split('-'),
        //     this._inputQuantidade.value,
        //     this._inputValor.value
        // );

        // console.log(negociacao);

        // adicionar a negociaçao numa lista
    }
}