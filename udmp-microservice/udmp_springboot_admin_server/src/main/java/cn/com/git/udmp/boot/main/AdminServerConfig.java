package cn.com.git.udmp.boot.main;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.Configuration;

import de.codecentric.boot.admin.config.EnableAdminServer;

@Configuration
@EnableAutoConfiguration
@EnableAdminServer
public class AdminServerConfig {
    public static void main(String[] args) {
        SpringApplication.run(AdminServerConfig.class, args);
    }
}