import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {Participant} from "../../participant"
import {HttpClient,HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    
  })
};


@Injectable({
  providedIn: 'root'
})
export class ParticipantService {

 
  constructor(private http: HttpClient) { }

   getParticipants():Observable<Participant[]> {
     const apiUrl = "http://localhost:3000/user/afficher_participant";
    console.log(this.http.get<Participant[]>(apiUrl))
    return this.http.get<Participant[]>(apiUrl);
  }
  // deleteParticipant(task:Task):Observable<Task>{
  //   const url=`${this.apiUrl}/${task.id}`
  //   return this.http.delete<Task>(url)
  // }

  addParticipant(participant:Participant):Observable<Participant>{
    const apiUrl = "http://localhost:3000/user/inscrit_participant";
    console.log(participant)
    return this.http.post<Participant>(apiUrl,participant)
  }
 
   
   
    modifyParticipant(participant:Participant):Observable<Participant>{
      const apiUrl = `http://localhost:3000/user/modifier_user/${participant._id}`;
      console.log("task",participant)
      // const body = { title: 'Angular PUT Request Example' };
      // const url=`${apiUrl}/${participant.id}`
      return this.http.put<Participant>(apiUrl,participant)
        
  }
}
