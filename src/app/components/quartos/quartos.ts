import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-quartos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './quartos.html',
  styleUrls: ['./quartos.scss']
})
export class QuartosComponent {
  quartoSelecionado: any = null;

  quartos = [
    {
      nome: 'Quarto Luxo',
      descricao: 'Desfrute do máximo conforto em nossos quartos luxo...',
      detalhes: 'Cama king-size, banheira de hidromassagem, varanda com vista.',
      img: 'https://i.pinimg.com/736x/ec/c0/c7/ecc0c7ecd5350281d6a91c1f55053c16.jpg'
    },
    {
      nome: 'Quarto Standard',
      descricao: 'Estadia confortável e acessível para viajantes práticos.',
      detalhes: 'Cama casal, ar-condicionado, TV, frigobar e café da manhã.',
      img: 'https://i.pinimg.com/1200x/4b/72/21/4b722154dc3f319b1f8e9ac7c0a48d4f.jpg'
    },
    {
      nome: 'Suíte Empresarial',
      descricao: 'Conforto e funcionalidade para viajantes a negócios.',
      detalhes: 'Estação de trabalho, Wi-Fi dedicado, sala de reuniões privativa.',
      img: 'https://i.pinimg.com/1200x/2d/64/23/2d6423ef2ae63ffafb41da2ab248b87c.jpg'
    }
  ];

  reserva = {
    name: '',
    email: '',
    entrada: '',
    saida: '',
    numCartao: '',
    mensagem: ''
  };

  openPopUp(quarto: any) {
    this.quartoSelecionado = quarto;
  }

  closePopUp() {
    this.quartoSelecionado = null;
  }

  enviarReserva() {
    console.log('Reserva feita:', this.reserva);
    alert(`Reserva para ${this.quartoSelecionado.nome} feita com sucesso!`);
    this.closePopUp();
    this.reserva = {
      name: '',
      email: '',
      entrada: '',
      saida: '',
      numCartao: '',
      mensagem: ''
    };
  }
}
