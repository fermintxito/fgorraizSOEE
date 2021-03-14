package com.fgorraiz.soee.models;

import java.io.Serializable;
import java.util.Date;

@SuppressWarnings("serial")
public class User implements Serializable {

	private Integer id;
	private String name;
	private int age;
	private String email;
	private String password;
	private Date created;

	public User() {
		super();
	}

	public User(Integer id, String name, int age, String email, String password, Date created) {
		super();
		this.id = id;
		this.name = name;
		this.age = age;
		this.email = email;
		this.password = password;
		this.created = created;
	}

	public User(User user) {
		super();
		this.name = user.getName();
		this.age = user.getAge();
		this.email = user.getEmail();
		this.password = user.getPassword();
		this.created = user.getCreated();
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Date getCreated() {
		return created;
	}

	public void setCreated(Date created) {
		this.created = created;
	}

	@Override
	public String toString() {
		return String.format("User [id=%s, name=%s, age=%s, email=%s, password=%s, created=%s]", id, name, age,
				email, password, created);
	}
}
