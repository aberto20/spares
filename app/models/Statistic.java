package models;

/**
 * Created by Noel on 6/16/2017.
 */
public class Statistic {
    public static int TotalBland(String blandId) {
        int sum = 0;
        for (SparePart s : SparePart.all()) {
            if (s.blandId.equalsIgnoreCase(blandId)) {
                sum ++;
            }
        }
        return sum;
    }
}
