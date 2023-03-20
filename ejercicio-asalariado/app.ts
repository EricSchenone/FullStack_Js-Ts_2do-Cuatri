
import { ProductionEmployee } from "./empleadoProduccion";
import { DistributionEmployee } from "./empleadoDistribucion";

const productionEmployee01 : ProductionEmployee = new ProductionEmployee("Carlos", 28659841, 14, 150000, "mañana");
console.log( productionEmployee01.getSalary());

const distributionEmployee01 : DistributionEmployee = new DistributionEmployee("Luis", 23741952, 10, 140000, "centro")
console.log(distributionEmployee01.getSalary());


distributionEmployee01.setName("Eric");
console.log(distributionEmployee01);
