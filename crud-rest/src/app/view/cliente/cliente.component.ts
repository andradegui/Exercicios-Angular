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
  editando = false;
  colunas = ['nome', 'cpf', 'acoes'];

  constructor(private ClienteService: ClienteService) { }

  ngOnInit(): void {
    this.listar();
  }

  listar() {
    //retorna um observable
    this.ClienteService.listar().subscribe(listaCliente => {
      this.clientes = listaCliente;
    });
  }

  novo() {
    this.cliente = new Cliente();
    this.editando = false;
  }

  salvar() {
    if (this.cliente) {
      if(!this.editando){
        this.ClienteService.inserir(this.cliente).subscribe(cliente => {
          this.listar();
          this.cliente = undefined;
        });
      }
      else{
        this.ClienteService.atualizar(this.cliente).subscribe(cliente => {
          this.listar();
          this.cliente = undefined; //para sumir form
        })
      }
    }
  }

  excluir(id: number) {
    this.ClienteService.remover(id).subscribe(() => {
      this.listar();
    });
  }

  editar(cliente: Cliente) {
    this.cliente = cliente;
    this.editando = true;
  }

}
