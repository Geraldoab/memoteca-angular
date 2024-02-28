import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Thought } from './Thought';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThoughtService {

  private readonly THOUGHTS_URL = "http://localhost:3000/thoughts"

  constructor(private http: HttpClient) { }

  toList() : Observable<Thought[]> {
    return this.http.get<Thought[]>(this.THOUGHTS_URL)
  }

  create(newThought: Thought) : Observable<Thought> {
    return this.http.post<Thought>(this.THOUGHTS_URL, newThought)
  }

  delete(id: number) : Observable<Thought> {
    const url = `${this.THOUGHTS_URL}/${id}`
    return this.http.delete<Thought>(url)
  }

  getById(id: number) : Observable<Thought> {
    const url = `${this.THOUGHTS_URL}/${id}`
    return this.http.get<Thought>(url)
  }
}
