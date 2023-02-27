import { Component } from '@angular/core';

@Component({
  selector: 'app-xyz',
  templateUrl: './xyz.component.html',
  styleUrls: ['./xyz.component.css']
})
export class XyzComponent {
  public XyzComponent() {}

  value: string = ""

  public foo() {
    fetch('URL HERE')
      .then(res => {
        return res.body?.getReader().read().then(val => {
          this.value += new TextDecoder().decode(val.value)
        })
      }).catch(res => {
        console.log(res)
      })
  }
}
