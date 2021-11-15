interface IUser {
  email: string;
  password: string;
}

interface IMatch {
  id: string;
  away: string;
  awayThmb: string;
  date: Date;
  final: string;
  local: string;
  localThmb: string;
  referee: string;
  result: string;
  resultAway: string;
  resultLocal: string;
  stadium: string;
}

interface IPlayer {
  id: string;
  image: string;
  lastname: string;
  name: string;
  age: string;
  position: string;
}

interface ICard {
  background: string;
  number: string;
  name: string;
  lastname: string;
}
