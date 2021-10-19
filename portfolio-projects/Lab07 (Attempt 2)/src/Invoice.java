public class Invoice {
    private double shirtsTotal;
    private double pantsTotal;
    private double tiesTotal;
    private double shoesTotal;
    private double salesTax;
    private double totalBill;
    //3.00 to 9.50, in increments of 0.25
    public Invoice (double shirtsTotal, double pantsTotal, double tiesTotal, double shoesTotal, double salesTax){
        this.shirtsTotal = shirtsTotal;
        this.pantsTotal = pantsTotal;
        this.tiesTotal = tiesTotal;
        this.shoesTotal = shoesTotal;
        this.salesTax = salesTax;
        this.totalBill = (this.shirtsTotal + this.pantsTotal + this.tiesTotal + this.shoesTotal) * ((this.salesTax / 100.0) + 1.0);
    }
    public String toString() {
        return "hello";
    }
    public double getTotalBill() {
        return totalBill;
    }
}
