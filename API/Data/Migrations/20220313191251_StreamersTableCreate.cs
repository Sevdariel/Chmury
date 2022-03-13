using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace Apka.Data.Migrations
{
    public partial class StreamersTableCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Streamers",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Channel = table.Column<string>(type: "text", nullable: true),
                    WatchTime = table.Column<decimal>(type: "numeric(20,0)", nullable: false),
                    StreamTime = table.Column<int>(type: "integer", nullable: false),
                    PeakViewers = table.Column<int>(type: "integer", nullable: false),
                    AverageViewers = table.Column<int>(type: "integer", nullable: false),
                    Followers = table.Column<int>(type: "integer", nullable: false),
                    FollowersGained = table.Column<int>(type: "integer", nullable: false),
                    ViewsGained = table.Column<decimal>(type: "numeric(20,0)", nullable: false),
                    Partnered = table.Column<bool>(type: "boolean", nullable: false),
                    Mature = table.Column<bool>(type: "boolean", nullable: false),
                    Language = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Streamers", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Streamers");
        }
    }
}
