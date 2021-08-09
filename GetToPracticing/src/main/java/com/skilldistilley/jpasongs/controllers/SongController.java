package com.skilldistilley.jpasongs.controllers;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistilley.jpasongs.entities.Song;
import com.skilldistilley.jpasongs.services.SongService;

@RestController
@RequestMapping("api")
public class SongController {
	
	@Autowired
	private SongService ss;
	
	@GetMapping("songs")
	public List<Song> index(){
		return ss.allSongs();
	}
	
	@GetMapping("songs/{id}")
	public Song show(@PathVariable int id, HttpServletResponse res) {
		Song song = ss.findById(id);
		if(song == null) {
			res.setStatus(404);
		}
		return song;
	}

	@PostMapping("songs")
	public Song create(@RequestBody Song song, HttpServletResponse res, HttpServletRequest req) {
	try {	
		song = ss.create(song);
		res.setStatus(201);
		StringBuffer url = req.getRequestURL();
		url.append("/").append(song.getId());
		res.setHeader("Location", url.toString());
		} catch (Exception e) {
			res.setStatus(400);
			song = null;
		}
		return song;
	}
	
	@PutMapping("songs")
	public Song update(@RequestBody Song song, HttpServletResponse res, HttpServletRequest req) {
		Song dbSong;
		try {
			dbSong = ss.update(song);
			res.setStatus(200);
			if(dbSong == null) {
				res.setStatus(404);
			}
		} catch (Exception e) {
			res.setStatus(400);
			dbSong = null;
		}
		return dbSong;
	}
	
	@DeleteMapping("songs/{id}")
	public void delete(@PathVariable int id, HttpServletResponse res) {
		boolean remove = ss.delete(id);
		try {
			if(remove) 
				res.setStatus(204);
			else {
				res.setStatus(404);}
		} catch (Exception e) {
			res.setStatus(400);
		}
	}
	
	
	
}
