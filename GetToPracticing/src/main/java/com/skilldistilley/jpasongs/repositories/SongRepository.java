package com.skilldistilley.jpasongs.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistilley.jpasongs.entities.Song;

public interface SongRepository extends JpaRepository<Song, Integer> {

}
