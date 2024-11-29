import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  socialMediaList = [
    {
      name: 'Facebook',
      url: 'https://facebook.com',
      icon: 'facebook',
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com',
      icon: 'instagram',
    },
    {
      name: 'TikTok',
      url: 'https://tiktok.com',
      icon: 'tiktok',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
