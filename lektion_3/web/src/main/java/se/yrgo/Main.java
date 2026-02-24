package se.yrgo;

import static spark.Spark.*;
import java.sql.*;
import java.util.*;

public class Main {

    public static void main(String[] args) {
        try (var conn = DriverManager.getConnection("jdbc:sqlite:names.db");
                Statement stmt = conn.createStatement()) {
            stmt.execute("CREATE TABLE IF NOT EXISTS users (name TEXT)");
        } catch (SQLException e) {
            e.printStackTrace();
        }

        staticFiles.location("/public");

        post("/submit", (req, res) -> {
            String name = req.queryParams("name");
            var names = name != null && !name.isBlank() ? saveAndGet(name) : List.of();
            var listHtml = names.stream()
                    .map(n -> "<li>Hello, " + n + "!</li>")
                    .reduce("", String::concat);
            return "<!DOCTYPE html><html><body><ul>%s</ul></body></html>".formatted(listHtml);
        });
    }

    private static List<String> saveAndGet(String name) throws SQLException {
        try (var conn = DriverManager.getConnection("jdbc:sqlite:names.db");
                var pstmt = conn.prepareStatement("INSERT INTO users(name) VALUES(?)")) {
            pstmt.setString(1, name);
            pstmt.executeUpdate();

            var names = new ArrayList<String>();
            try (var rs = conn.createStatement().executeQuery("SELECT name FROM users")) {
                while (rs.next()) {
                    names.add(rs.getString("name"));
                }

                return names;
            }
        }
    }
}