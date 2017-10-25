using Microsoft.AspNetCore.SignalR;
using System.Threading.Tasks;

namespace ServiceDesk.Hubs
{
    public class LoopyHub : Hub
    {
        public Task Send(string data)
        {
            return Clients.All.InvokeAsync("Send", data);
        }
    }
}
