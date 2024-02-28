import { Component, OnInit } from '@angular/core';
import { Thought } from '../Thought';

@Component({
  selector: 'app-thoughts-list',
  templateUrl: './thoughts-list.component.html',
  styleUrls: ['./thoughts-list.component.css']
})
export class ThoughtsListComponent implements OnInit {

  thoughtsList : Thought[] = [
    {
      id: 1,
      conteudo: 'Passo informações para o componente filho',
      autoria: 'Componente pai',
      modelo: 'modelo3'
    },
    {
        id: 2,
        conteudo: 'Minha propriedade é decorada com @Input()',
        autoria: 'Componente filho',
        modelo: 'modelo2'
    },
    {
        id: 3,
        conteudo: 'Mussum Ipsum, cacilds vidis litro abertis. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Diuretics paradis num copo é motivis de denguis. Atirei o pau no gatis, per gatis num morreus. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis. Sapien in monti palavris qui num significa nadis i pareci latim.',
        autoria: '',
        modelo: 'modelo1'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
