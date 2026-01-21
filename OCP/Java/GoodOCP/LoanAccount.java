public class LoanAccount implements InterestCalculator {
    public double calculate(double balance) {
        return balance * 0.08;
    }
}
