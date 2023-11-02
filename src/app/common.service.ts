import { Injectable } from '@angular/core';
import { FootBallUpdateService } from './foot-ball-update.service';
import { LEAGUESDATA } from './leagueIds.interface';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
 
  leagues :LEAGUESDATA[] = [];

  constructor(private footBallService:FootBallUpdateService) { }


getCountryData(leagueId:string){

  this.footBallService.getFootBallDataWithStandings().subscribe(data =>{
   this.leagues = data.response as LEAGUESDATA[];
  const selectedLeagueID = this.leagues?.find(x=>x.league && x.league.id == leagueId)

  if(selectedLeagueID){
    const firstSeasons = selectedLeagueID.seasons;
   const leagueId =  selectedLeagueID.league.id
    if(firstSeasons){

      const yearVal = firstSeasons[0].year;
      if(yearVal){
        this.getIndividualCountryData(leagueId,yearVal)
      }
     
    }
    

    
  }

     
    }
  )};
   getIndividualCountryData(leagueId:string,year:string){
    this.footBallService.getIndividualCountryData(leagueId,year).subscribe(data =>{
    })
  }
}



