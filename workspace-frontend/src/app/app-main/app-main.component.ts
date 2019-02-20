import { AppMainService } from './app-main.service';
import { ValoresVO } from './../model/vo/valores.vo';
import { NotaFiscalVO } from '../model/vo/nota-fiscal.vo';
import { Component, OnInit, Input } from '@angular/core';
import { ChaveValorDTO } from '../model/dto/chave-valor.dto';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './app-main.component.html',
  styleUrls: ['./app-main.component.scss']
})
export class AppMainComponent implements OnInit {

  @Input() public exibeDados: boolean;

  public valores: ValoresVO;
  public notaFiscal: NotaFiscalVO;
  public listaNotaFiscal: NotaFiscalVO[];
  public formularioNotaFiscal: FormGroup;
  public formularioCadastrarNotas: FormGroup;

  public listaFormaPagamento: ChaveValorDTO[] = [
    new ChaveValorDTO('CARTÃO', 'CARTÃO'),
    new ChaveValorDTO('BOLETO', 'BOLETO'),
    new ChaveValorDTO('CHEQUE', 'CHEQUE')
  ];

  constructor(private fb: FormBuilder, private service: AppMainService) {
  }

  ngOnInit() {
    this.formularioNotaFiscal = this.fb.group({
      loja: ['', Validators.required],
      numeroNota: ['', Validators.required],
      dataNota: ['', Validators.required],
      formaPagamento: ['', Validators.required],
      valor: ['', Validators.required]
    });
    this.valores = new ValoresVO();
    this.notaFiscal = new NotaFiscalVO();
    this.listaNotaFiscal = [];
  }

  adicionarNotaFiscal() {
    if (this.formularioNotaFiscal.valid) {
      this.listaNotaFiscal.push(this.notaFiscal);
      this.notaFiscal = new NotaFiscalVO();
    }
  }

  cancelarNotaFiscal() {
    this.notaFiscal = new NotaFiscalVO();
  }

  cadastrarNotas() {
    alert(JSON.stringify(this.listaNotaFiscal));
  }

  cancelarNotas() {
    this.listaNotaFiscal = [];
  }

  validarPagina() {
    setTimeout(() => {
      if (this.exibeDados) {
        this.service.listarValores().subscribe(res => {
          this.valores = res.json();
        });
        this.formularioNotaFiscal.enable();
      } else {
        this.valores = new ValoresVO();
        this.formularioNotaFiscal.disable();
      }
      this.notaFiscal = new NotaFiscalVO();
      this.listaNotaFiscal = [];
    }, 10);
  }

}
