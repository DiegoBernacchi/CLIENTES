export class NotaFiscalVO {
    constructor(
        public id?: number,
        public loja?: string,
        public numeroNota?: number,
        public dataNota?: Date,
        public dataCadastro?: Date,
        public formaPagamento?: string,
        public valor?: number
    ) { }
}
