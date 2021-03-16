package com.fgorraiz.soee.resource;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.fgorraiz.soee.models.User;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class UserResource {

	@Autowired
	private UserJdbcRepository userRepository;

	@GetMapping("/users")
	public List<User> retrieveAllUsers() {
		return userRepository.findAll();
	}

	@GetMapping("/users/{id}")
	public User retrieveUserById(@PathVariable Integer id) {
		User user;
		try {
			user = userRepository.findById(id);

			if (user == null) {
				return new User();
//			throw new UserNotFoundException("id-" + id);
			}
		} catch (Exception e) {
			return new User();
		}

		return user;
	}

	@GetMapping("/users/email/{email}")
	public User retrieveUserByMail(@PathVariable String email) {
		User user;
		try {
			user = userRepository.findByEmail(email);

			if (user == null) {
				return new User();
//			throw new UserNotFoundException("id-" + id);
			}
		} catch (Exception e) {
			return new User();
		}

		return user;
	}

	@DeleteMapping("/users/{id}")
	public void deleteUser(@PathVariable Integer id) {
		userRepository.deleteById(id);
	}

	@PostMapping("/users")
	public ResponseEntity<Object> createUser(@RequestBody User user) {

//		User userOptional = userRepository.findById(id);

		if (user == null) {
			return ResponseEntity.notFound().build();
		}

		userRepository.insert(user);

		return ResponseEntity.noContent().build();
	}

	@PutMapping("/users/{id}")
	public ResponseEntity<Object> updateUser(@RequestBody User user, @PathVariable Integer id) {

//		User userOptional = userRepository.findById(id);

		if (user == null) {
			return ResponseEntity.notFound().build();
		}

		user.setId(id);

		userRepository.update(user);

		return ResponseEntity.noContent().build();
	}
}
