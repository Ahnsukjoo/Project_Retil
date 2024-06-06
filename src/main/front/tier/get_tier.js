import bronze from "../src/assets/bronze.jpg";
import silver from "../src/assets/silver.jpg";
import gold from "../src/assets/gold.jpg";
import platinum from "../src/assets/platinum.jpg";
import diamond from "../src/assets/diamond.jpg";
export function getTier(tierId) {
  switch (tierId) {
    case 1:
      return bronze;
    case 2:
      return silver;
    case 3:
      return gold;
    case 4:
      return platinum;
    case 5:
      return diamond;
    default:
      return null;
  }
}
