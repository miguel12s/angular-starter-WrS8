import { Component,Input } from '@angular/core';

interface DataItem {
  id_hora:String
  hora:String
  uso_horario:String
}
@Component({
  selector: 'app-tabla-horas',
  templateUrl: './tabla-horas.component.html',
  styleUrls: ['./tabla-horas.component.scss']
})
export class TablaHorasComponent {
  @Input() horas!:DataItem[]
  searchValue = '';
  visible = false;
  listOfData: DataItem[] = [
    {
      id_hora:"1",
      hora:"7:00",
      uso_horario:"a.m"
      
    },
    {
      id_hora:"2",
      hora:"8:00",
      uso_horario:"a.m"
    }
  ];
  listOfDisplayData = [...this.listOfData];
  reset(): void {
    this.searchValue = '';
    this.search();
  }
  
  search(): void {
    this.visible = false;
    this.listOfDisplayData = this.listOfData.filter((item: DataItem) => item.hora.indexOf(this.searchValue) !== -1);
  }
}
