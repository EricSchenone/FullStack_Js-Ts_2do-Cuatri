import { SoccerTeam } from "./seleccion";
import { SoccerPlayer } from "./futbolista";
import { Coach } from "./entrenador";
import { Massagist } from "./masajista";
import { CupWon } from "./copas";

const cupPlayer01 : CupWon = new CupWon(2004, "Mejor jugador");
const player01 : SoccerPlayer = new SoccerPlayer("Pedro","Cachito", 2498562016, "28/10/90", "delantero", true, cupPlayer01);

const cupPlayer02 : CupWon = new CupWon(2012, "Campeon Sudamericano");
const player02 : SoccerPlayer = new SoccerPlayer("Luis", "Piñero", 4587261598, "10/05/92", "mediocampista", true, cupPlayer02);

const cupPlayer03 : CupWon = new CupWon(2008, "Mejor Arquero");
const player03 : SoccerPlayer = new SoccerPlayer("Sergio", "Gonzalez", 8592617043, "09/01/89", "arquero", false, cupPlayer03);

const playersAtletico : SoccerPlayer[] = [player01, player02, player03];

const coachAtletico : Coach = new Coach("Sebastian", "Enrique", 65748721350, "21/06/82", "Futbolista", 10);

const massagistAtletico : Massagist = new Massagist("Hector", "DeFelipe", 12859764361, "03/11/90", "Masajista Deportivo");

const atletico : SoccerTeam = new SoccerTeam("Atletico Las Flores", playersAtletico, coachAtletico, massagistAtletico);

console.log(atletico.getMassagist().getInfo());
console.log(atletico.getSoccerPlayers());
console.log(player03.getIsHolder());
console.log(player03.setIsHolder(true));
console.log(player03);
console.log(atletico.getCoach().getInfo());






 

