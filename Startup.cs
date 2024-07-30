using AspNetCoreDemos.DemoShell;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

namespace AspNetCoreDemos.RichEdit {
    public class Startup {
        public Startup(IConfiguration configuration) {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        public void ConfigureServices(IServiceCollection services) {
            services
                .AddControllersWithViews()
                .AddJsonOptions(options => options.JsonSerializerOptions.PropertyNamingPolicy = null);

            services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();

#if DEBUG
            services.AddScoped<DemoMenuMeta>();
#else
            services.AddSingleton<DemoMenuMeta>();
#endif
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env) {
            if(env.IsDevelopment()) {
                app.UseDeveloperExceptionPage();
            }
            app.UseStaticFiles();
            app.UseRouting();
            app.UseEndpoints(routes => {
                routes.MapControllerRoute(
                    name: "Default",
                    pattern: "{controller}/{action}/{id?}",
                    defaults: new { controller = "Default", action = "Index" }
                );
            });

            DemoUtils.SIMULATOR_NO_BORDER = true;
            DemoUtils.PRODUCT_CSS_BUNDLE_NAME = "richedit";
        }
    }
}
