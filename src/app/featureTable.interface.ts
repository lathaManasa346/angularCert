

  export interface FOOTBALLDETAILS {
    team: {
      logo: string;
      name: string;
    };
    all: {
      played: number;
      win: number;
      draw: number;
      lose: number;
    };
    goalsDiff: number;
    points: number;
  }