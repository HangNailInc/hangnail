import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import Tile from '../../../../models/tile'
import Grid from '../../../../models/grid'

const BASEURL = ''

@Component({
  selector: 'app-xyz',
  templateUrl: './xyz.component.html',
  styleUrls: ['./xyz.component.css']
})
export class XyzComponent {
  public XyzComponent() {}

  value: string = ""

  public helloWorld() {
    fetch(BASEURL + '/')
      .then(res => {
        res.body?.getReader().read().then(val => {
          this.value = new TextDecoder().decode(val.value)
        })
      }).catch(res => {
        console.log(res)
      })
  }

  public async getGrid() {
    let res = await fetch(BASEURL + '/grid')
    let g = await res.json() as Grid.Grid;
    this.value = '';
    for (let arr of g) {
      this.value += '[';
      for (let t of arr) {
        this.value += JSON.stringify(t);
      }
      this.value += ']';
    }
  }
  public async postTile() {
    let t: Tile.Tile = {
      x: 0,
      y: 0,
      color: "hello"
    }
    this.value = JSON.stringify(t);
    await fetch(BASEURL + '/place-tile', {
      method: "POST",
      body: JSON.stringify(t),
      headers: [
        ["Content-Type", "application/json"]
      ]
    });
    this.value += 'posted';
  }
}
