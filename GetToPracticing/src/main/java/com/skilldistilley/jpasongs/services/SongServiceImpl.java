package com.skilldistilley.jpasongs.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistilley.jpasongs.entities.Song;
import com.skilldistilley.jpasongs.repositories.SongRepository;

@Service
public class SongServiceImpl implements SongService {

	@Autowired
	private SongRepository repo;
	
	@Override
	public List<Song> allSongs() {
		return repo.findAll();
	}

	@Override
	public Song findById(int id) {
		Optional<Song> s = repo.findById(id);
		Song song = null;
		if(s.isPresent()) {
			song = s.get();
		}
		return song;
	}

	@Override
	public Song create(Song song) {
		Song s = null;
		try {
			s=repo.saveAndFlush(song);
		} catch (Exception e) {
		}
		return s;
	}

	@Override
	public Song update(Song song) {
		return repo.saveAndFlush(song);
	}

	@Override
	public boolean delete(int id) {
		repo.deleteById(id);
		boolean successfulRemove;
		successfulRemove = !repo.existsById(id);
		return successfulRemove;
	}
	
	public int songCount() {
		return allSongs().size();
	}
	
	public int totalTime() {
		List<Song> songs = allSongs();
		int time = 0;
		for (Song song : songs) {
			time += song.getLength();
		}
		return time;
	}

}
