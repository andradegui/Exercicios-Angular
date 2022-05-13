import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/model/cliente';
import { ClienteService } from 'src/app/service/cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  clientes = new Array<Cliente>()
  cliente?: Cliente;
  constructor(private ClienteService: ClienteService) { }

  ngOnInit(): void {
    this.listar();
  }

  listar() {
    this.ClienteService.listar().subscribe(listaCliente => {
      this.clientes = listaCliente;
    });
  }

  novo() {
    this.cliente = new Cliente();
  }

  salvar() {
    if (this.cliente) {
      this.ClienteService.inserir(this.cliente).subscribe(cliente => {
        this.listar();
        this.cliente = undefined;
      });
    }
  }

}
