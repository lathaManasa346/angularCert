import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FootBallUpdateService {
  private baseUrl = 'https://v3.football.api-sports.io/fixtures';
  private apiUrl = 'https://v3.football.api-sports.io/leagues';
  private url =  'https://v3.football.api-sports.io/standings';


  constructor(private httpClient:HttpClient) { 
  }

  getFootBallupdates():Observable<any> {
    const today = new Date();
const dateFormatted = today.toISOString().split('T')[0];
    const headers = new HttpHeaders()
      .set('x-apisports-key', '3a72e2d1c2855f68a3d83e2ff9eea7a6')
     return this.httpClient.get(`${this.baseUrl}?date=${dateFormatted}`, { headers });
    // return this.httpClient.get('/assets/featureData.json');

  }

  getFootBallDataWithStandings():Observable<any>{
    const headers = new HttpHeaders()
    .set('x-apisports-key', '3a72e2d1c2855f68a3d83e2ff9eea7a6')
  return this.httpClient.get(`${this.apiUrl}?current=true`,{headers});
  // return this.httpClient.get('/assets/footBallAlldata.json');
  }

  getIndividualCountryData(leagueId:string,season:string):Observable<any>{
    const headers = new HttpHeaders()
    .set('x-apisports-key', '3a72e2d1c2855f68a3d83e2ff9eea7a6')
    return this.httpClient.get(`${this.url}?league=${leagueId}&season=${season}`,{headers});
    // return this.httpClient.get('/assets/individualLeagueDetails.json')
  }


  resultsOfIndividualStanding(live: string, teamId: string): Observable<any> {
    const headers = new HttpHeaders()
      .set('x-apisports-key', '3a72e2d1c2855f68a3d83e2ff9eea7a6');
    let url = this.baseUrl;
    if (live === 'all') {
      url += '?live=all&team=' + teamId;
    } else if (live.startsWith('id-')) {
      url += `?live=${live}&team=${teamId}`;
    } else {
      throw new Error('Invalid value for "live" parameter');
    }
    return this.httpClient.get(url, { headers });
    // return this.httpClient.get('/assets/liveData.json')
  }
 
}



