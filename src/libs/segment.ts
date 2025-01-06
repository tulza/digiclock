export const segment = (char: number | string) => {
  switch (char) {
    case 0:
      return "1111110";
    case 1:
      return "0110000";
    case 2:
      return "1101101";
    case 3:
      return "1111001";
    case 4:
      return "0110011";
    case 5:
      return "1011011";
    case 6:
      return "1011111";
    case 7:
      return "1110000";
    case 8:
      return "1111111";
    case 9:
      return "1111011";
    case "e":
      return "1001111";
    case "r":
      return "1000110";
  }
};
