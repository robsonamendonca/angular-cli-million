import { Component, OnInit } from '@angular/core';
import { Sessao } from 'src/app/services/Sessao';
import { Router } from '@angular/router';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css'],
})
export class HeadComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  logout() {
    Sessao.removeCliente();
    this.router.navigateByUrl('');
  }
}
