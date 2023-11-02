export interface LEAGUESDATA{
    league:{
        id:string;
        name:string;
        type:string;
        logo:string;
    }
    seasons:[{
        year:string;
        start:string;
        end:string
    }]
}

