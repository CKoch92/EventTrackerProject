package com.skilldistilley.jpasongs.services;

import java.util.List;

import com.skilldistilley.jpasongs.entities.Song;

public interface SongService {
	
	List<Song> allSongs();
	Song findById(int id);
	Song create(Song song);
	Song update(Song song);
	boolean delete(int id);
	int songCount();
	int totalTime();
}
