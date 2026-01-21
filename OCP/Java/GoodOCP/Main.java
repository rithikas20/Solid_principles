public class Main {
    public static void main(String[] args) {

        InterestCalculator calculator = new SavingsAccount();
        System.out.println(calculator.calculate(10000));

        // later change to LoanAccount without modifying existing code
        calculator = new LoanAccount();
        System.out.println(calculator.calculate(10000));
    }
}
