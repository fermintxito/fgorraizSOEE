package com.fgorraiz.soee.resource;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import com.fgorraiz.soee.models.User;

@Repository
public class UserJdbcRepository {
	@Autowired
	JdbcTemplate jdbcTemplate;

	class UserRowMapper implements RowMapper<User> {
		@Override
		public User mapRow(ResultSet rs, int rowNum) throws SQLException {
			User user = new User();
			user.setId(rs.getInt("id"));
			user.setName(rs.getString("name"));
			user.setAge(rs.getInt("age"));
			user.setEmail(rs.getString("email"));
			user.setCreated(rs.getDate("created"));
			user.setPassword(rs.getString("password"));
			return user;
		}

	}

	public List<User> findAll() {
		return jdbcTemplate.query("select * from users", new UserRowMapper());
	}

	@SuppressWarnings("deprecation")
	public User findById(Integer id) {
		return jdbcTemplate.queryForObject("select * from users where id=?", new Object[] { id },
				new BeanPropertyRowMapper<User>(User.class));
	}

	public int deleteById(Integer id) {
		return jdbcTemplate.update("delete from users where id=?", new Object[] { id });
	}

	public int insert(User user) {
		return jdbcTemplate.update(
				"insert into users (id, name, age, email, created, password) " + "values(?, ?, ?, ?, ?, ?)",
				new Object[] { user.getId(), user.getName(), user.getAge(), user.getEmail(), user.getCreated(),
						user.getPassword() });
	}

	public int update(User user) {
		return jdbcTemplate.update(
				"update users " + " set name = ?, age = ?, email = ?, password = ? " + " where id = ?",
				new Object[] { user.getName(), user.getAge(), user.getEmail(), user.getPassword(), user.getId() });
	}

}
