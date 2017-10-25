namespace ServiceDesk.Models
{
    public class ServiceRequest
    {
        public long Id { get; set; }

        public string Description { get; set; }

        public string Name { get; set; }

        public string Author { get; set; }

        public string Category { get; set; }
    }
}
