
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-feedbackform',
  templateUrl: './feedbackform.component.html',
  styleUrls: ['./feedbackform.component.css']
})
export class FeedbackformComponent {
  apiUrl: string = "http://localhost:8080/";

  cName: string = '';
  ccity: string = '';
  copinion: string = '';
  isModalOpen: boolean = false;

  constructor(private http: HttpClient) { }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  addfeedback() {
    const feedback = {
      name: this.cName,
      city: this.ccity,
      opinion: this.copinion
    };

    this.http.post(this.apiUrl + "add-fb", feedback).subscribe(
      (response) => {
        alert('Feedback added successfully');
        this.cName = '';
        this.ccity = '';
        this.copinion = '';
        // Close the modal after submission
        this.closeModal();
      },
      (error) => {
        console.error('Error adding feedback:', error);
      }
    );
  }
}
