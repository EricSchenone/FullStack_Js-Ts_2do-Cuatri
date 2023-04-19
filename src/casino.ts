import { Dados } from "./dado";
import { Ruleta } from "./ruleta";
import { SlotLetras } from "./slotLetras";
import { SlotNumeros } from "./slotNumeros";

export class Casino {
    private dados : Dados;
    private ruleta : Ruleta;
    private slotLetras : SlotLetras;
    private slotNumeros : SlotNumeros;

    public constructor(dados : Dados, ruleta : Ruleta, slotLetras : SlotLetras, slotNumeros : SlotNumeros){
        this.dados = dados;
        this.ruleta = ruleta;
        this.slotLetras = slotLetras;
        this.slotNumeros = slotNumeros;
    }
}
