import { TelefoneVO } from './telefone.vo';
import { EnderecoVO } from './endereco.vo';

export class ClienteVO {
    constructor(
        public id?: number,
        public nome?: string,
        public email?: string,
        public cpf?: number,
        public observacao?: string,
        public foto?: string,
        public telefone?: TelefoneVO,
        public endereco?: EnderecoVO
    ) { }
}
