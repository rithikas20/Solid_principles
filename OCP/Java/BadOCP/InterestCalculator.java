public class InterestCalculator {

    public double calculate(String accountType, double balance) {

        if (accountType.equals("SAVINGS")) {
            return balance * 0.04;
        } else if (accountType.equals("CURRENT")) {
            return 0;
        } else if (accountType.equals("LOAN")) {
            return balance * 0.08;
        }

        return 0;
    }

    public static void main(String[] args) {
        InterestCalculator calc = new InterestCalculator();
        System.out.println(calc.calculate("SAVINGS", 10000));
    }
}
