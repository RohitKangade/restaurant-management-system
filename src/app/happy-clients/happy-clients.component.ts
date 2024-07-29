import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-happy-clients',
  templateUrl: './happy-clients.component.html',
  styleUrl: './happy-clients.component.css'
})
export class HappyClientsComponent implements OnInit {
  apiUrl: string = "http://localhost:8080/"
  feedback: any[] = [];
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.fetchfeedback();
  }

  fetchfeedback() {
    this.http.get<any[]>(this.apiUrl + "get-all-feedback").subscribe(
      (data) => {
        this.feedback = data.map(texts => ({
          cname: texts.name,
          ccity: texts.city,
          copinion: texts.opinion,
        }));
      },
      (error) => {
        console.error('Error fetching feedback forms:', error);
      }
    );
  }


}
