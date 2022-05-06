import { Component, OnInit } from '@angular/core';
import { Endereco } from 'src/app/model/endereco';
import { EnderecoService } from 'src/app/service/endereco.service';

@Component({
  selector: 'app-cep',
  templateUrl: './cep.component.html',
  styleUrls: ['./cep.component.css']
})
export class CepComponent implements OnInit {

  cep = '';
  endereco?: Endereco;

  constructor(private endService: EnderecoService) { }

  ngOnInit(): void {
  }

  consultarCep() {
    this.endService.obterEndereco(this.cep).subscribe(end => {
    this.endereco = end;
    });
  }

}
