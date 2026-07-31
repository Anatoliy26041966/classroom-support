import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Введіть: ");
        String d = sc.nextLine().trim();
        if (!d.isEmpty()) {
            if (d.length() > 3) System.out.println("Результат A");
            else System.out.println("Результат B");
        } else System.out.println("Порожньо");
        sc.close();
    }
}
