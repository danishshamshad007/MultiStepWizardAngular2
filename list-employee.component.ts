import { Component, ViewChild, TemplateRef } from '@angular/core';
import {FormsModule} from '@angular/forms'

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent {
  @ViewChild('displayTmpl1') displayTmpl1 : TemplateRef<any>;
  @ViewChild('displayTmpl2') displayTmpl2: TemplateRef<any>;
  @ViewChild('displayTmpl3') displayTmpl3: TemplateRef<any>;
  @ViewChild('displayTmpl4') displayTmpl4: TemplateRef<any>;
  first:number=1;
  getTemplate(j:number) {      
    debugger 
    if(j===1){     
      this.first=1; 
      return this.displayTmpl1
    }
    else if(j===2){      
      this.first=2;
      return this.displayTmpl2
    }
    else if(j===3){
      this.first=3;      
      return this.displayTmpl3
    }
    else if(j===4){
      this.first=4;      
      return this.displayTmpl4
    }
    
  //   else{
  //     this.first=4;      
  //     return this.displayTmpl1
  // }
}
save(){
document.write("Finish");

}

}
