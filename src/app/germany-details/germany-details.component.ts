import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { FOOTBALLDETAILS } from '../featureTable.interface';
import { FootBallUpdateService } from '../foot-ball-update.service';
import { LEAGUESDATA } from '../leagueIds.interface';
import { FootballApiResponse } from '../response.interface';

@Component({
  selector: 'app-germany-details',
  templateUrl: './germany-details.component.html',
  styleUrls: ['./germany-details.component.scss']
})
export class GermanyDetailsComponent implements OnInit {
  dataSource = new MatTableDataSource<FOOTBALLDETAILS>([]);
  leagueId: string = '78';
  leagues: LEAGUESDATA[] = [];
  displayedColumns: string[] = ['index', 'icons', 'name', 'games', 'wins', 'loses', 'draw', 'goalDiff', 'points'];
  showIndividualData: boolean = false;
  live: string = 'all';
  teamId: string = ''
  constructor(private footBallService: FootBallUpdateService) { }

  ngOnInit(): void {
    this.getCountryData(this.leagueId);
    if (this.teamId) {
      this.individualTeamDetails(this.live, this.teamId);
    }
  }

  getCountryData(leagueId: string) {

    this.footBallService.getFootBallDataWithStandings().subscribe(data => {
      this.leagues = data.response as LEAGUESDATA[];
      const selectedLeagueID = this.leagues?.find(x => x.league && x.league.id == leagueId)
      if (selectedLeagueID) {
        const firstSeasons = selectedLeagueID.seasons;
        const leagueId = selectedLeagueID.league.id;

        if (firstSeasons) {
          const yearVal = firstSeasons[0].year;
          if (yearVal) {
            this.getIndividualCountryData(leagueId, yearVal);
          }
        }
      }
    }
    )
  };
  getIndividualCountryData(leagueId: string, year: string) {
    this.footBallService.getIndividualCountryData(leagueId, year).subscribe((data: FootballApiResponse | any) => {
      if (data && data.response) {
        const standings = data.response[0].league.standings;
        this.dataSource.data = standings[0].slice(0, 10);
      }
    });
  }

  individualTeamDetails(live: string, teamId: string) {
    this.showIndividualData = true;
    this.footBallService.resultsOfIndividualStanding(live, teamId).subscribe(data => {
    })
  }
}


