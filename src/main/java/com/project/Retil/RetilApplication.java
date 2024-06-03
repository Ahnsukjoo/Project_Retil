package com.project.Retil;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication(exclude = SecurityAutoConfiguration.class)
public class RetilApplication {

    public static void main(String[] args) {
        SpringApplication.run(RetilApplication.class, args);
    }

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**")
                    .allowedMethods("*")
                    .allowedOrigins("*")
                    .allowedHeaders("*");
            }
        };
    }

    @Configuration
    public class WebConfig implements WebMvcConfigurer {

        @Override
        public void addViewControllers(ViewControllerRegistry registry) {
            registry.addViewController("/{path:^(?!.*\\.).*}")
                .setViewName("forward:/index.html");
            registry.addViewController("/**/{path:^(?!.*\\.).*}")
                .setViewName("forward:/index.html");
        }
    }
}
