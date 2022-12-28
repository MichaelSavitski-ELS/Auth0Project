using Auth0Project.RefitClients;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using Refit;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllersWithViews();

builder.Services.AddTransient<IAuth0Api>(x =>
            {
                var baseUrl = "https://dev-uai25tdjqul077vl.us.auth0.com/api/v2";
                return RestService.For<IAuth0Api>(baseUrl);
            });

builder.Services.AddTransient<IAuth0RefitClient, Auth0RefitClient>();

builder.Services.AddControllers(opts => opts.Filters.Add(new ResponseCacheAttribute { NoStore = true, Location = ResponseCacheLocation.None }))
                .AddNewtonsoftJson(opts =>
                {
                    opts.SerializerSettings.Converters.Add(new StringEnumConverter());
                    opts.SerializerSettings.NullValueHandling = NullValueHandling.Ignore;
                    opts.SerializerSettings.DateTimeZoneHandling = DateTimeZoneHandling.Utc;
                });

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html"); ;

app.Run();
