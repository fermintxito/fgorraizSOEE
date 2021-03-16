package com.fgorraiz.soee;

import java.util.Date;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.fgorraiz.soee.models.User;
import com.fgorraiz.soee.resource.UserJdbcRepository;

@SpringBootApplication
public class FgorraizSoeeApplication implements CommandLineRunner {
	private Logger logger = LoggerFactory.getLogger(this.getClass());

	@Autowired
	UserJdbcRepository repository;

	public static void main(String[] args) {
		SpringApplication.run(FgorraizSoeeApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {

		logger.info("User id 1 -> {}", repository.findById(1));

		logger.info("Inserting -> {}",
				repository.insert(new User(10010, "Fermin10010", 40, "fermin10010@gmail.com", "1234", new Date())));

		logger.info("Update 10003 -> {}",
				repository.update(new User(1, "Name-Updated", 10, "editmail@gmail.com", "newPassword", new Date())));

		logger.info("Delete id 2");
		repository.deleteById(2);

		logger.info("All users -> {}", repository.findAll());
	}

}