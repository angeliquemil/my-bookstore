namespace Backend.Models
{
    public class Book
    {
        public int Id { get; set; }
        public required string Title { get; set; }
        public required string Author { get; set; }
        public required string Publisher { get; set; }
        public required string ISBN { get; set; }
        public required string Category { get; set; }
        public int Pages { get; set; }
        public decimal Price { get; set; }
    }
}