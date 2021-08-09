window.addEventListener('load', function(e){
	console.log('script.js loaded');
	init();
});

function init() {
	loadSongs();

	document.newSongForm.addSong.addEventListener('click', function(e){
		e.preventDefault();
		let song = document.newSongForm;
		let newSong = {
			artist: song.artist.value,
			title: song.title.value,
			album: song.album.value,
			releaseDate: song.releaseDate.value,
			length: song.length.value
		};	
		createSong(newSong);
		});

	// document.	
	// document.songListDiv.songListTable.editButton.addEventListener('click', editSong(song.id));
}

function loadSongs(){
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/songs');
	xhr.onreadystatechange = function(){
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				let songs = JSON.parse(xhr.responseText);
				displaySongs(songs);
			}
		}
	};
	xhr.send();
}

function displaySongs(songs) {
	let table = document.getElementById('songListTable');
	let count = 0;
	let totalTime = 0;
	for(const song of songs) {
		let tr = document.createElement('tr');
		let td = document.createElement('td');
		td.textContent = song.artist;
		tr.appendChild(td);
		td = document.createElement('td');
		td.textContent = song.title;
		tr.appendChild(td);
		td = document.createElement('td');
		td.textContent = song.album;
		tr.appendChild(td);
		td = document.createElement('td');
		td.textContent = song.releaseDate;
		tr.appendChild(td);
		td = document.createElement('td');
		td.textContent = song.length;
		tr.appendChild(td);
		let editButton = document.createElement('button');
		editButton.name = 'details';
		editButton.textContent = 'details';
		editButton.value = song.id;
		editButton.addEventListener('click', function(e){
			e.preventDefault();
			displayEditSong(song);
		});
		tr.appendChild(editButton);
		table.appendChild(tr);
		count++;
		totalTime += song.length;
	}
	let totalButton = document.createElement('button');
	totalButton.name = 'total songs';
	totalButton.textContent = 'total songs';
	totalButton.addEventListener('click', function(e){
		e.preventDefault();
	let div = document.getElementById('totalDiv');
	div.textContent = '';
	let ul = document.createElement('ul');
	let li = document.createElement('li');
	div.appendChild(ul);
	li.textContent = '# of Songs: ' + count;
	ul.appendChild(li);
	li = document.createElement('li');
	li.textContent = 'Total length of all songs: ' + totalTime;
	ul.appendChild(li);
	});
	let row = document.createElement('tr');
	row.appendChild(totalButton);
	table.appendChild(row);
}

function createSong(song){
	let xhr = new XMLHttpRequest();
	//    console.log(song);
	 xhr.open('POST','api/songs');
	 xhr.onreadystatechange = function(){
	   if(xhr.readyState === 4 ){
		 if(xhr.status === 201){
		   console.log('Request successful');
		   let newSong = JSON.parse(xhr.responseText);
		   displaySong(newSong);
		 }else{
		   displayError('Error creating song: ' + xhr.status);
		 }
	   }
	 };
	   xhr.setRequestHeader("Content-type", "application/json"); // Specify JSON request body
	   let songJson = JSON.stringify(song);
	 xhr.send(songJson);
   }

   function displaySong(song) {
	   console.log(song);
	let dataDiv = document.getElementById('songData');
	dataDiv.textContent = '';
	let ul = document.createElement('ul');
	dataDiv.appendChild(ul);
	
	let li = document.createElement('li');
	li.textContent = 'Artist: ' + song.artist;
	ul.appendChild(li);
	li = document.createElement('li');
	li.textContent = 'Title: ' + song.title;
	ul.appendChild(li);
	li = document.createElement('li');
	li.textContent = 'Album: ' + song.album;
	ul.appendChild(li);   
	li = document.createElement('li');
	li.textContent = 'Release Date: ' + song.releaseDate;
	ul.appendChild(li); 
	li = document.createElement('li');
	li.textContent = 'Length: ' + song.length;
	ul.appendChild(li); 
	let editButton = document.createElement('button');
		editButton.name = 'details';
		editButton.textContent = 'details';
		editButton.value = song.id; 
	dataDiv.appendChild(editButton);	
  	document.newSongForm.reset();
	
	let table = document.getElementById('songListTable');
	let tr = document.createElement('tr');
		let td = document.createElement('td');
		td.textContent = song.artist;
		tr.appendChild(td);
		td = document.createElement('td');
		td.textContent = song.title;
		tr.appendChild(td);
		td = document.createElement('td');
		td.textContent = song.album;
		tr.appendChild(td);
		td = document.createElement('td');
		td.textContent = song.releaseDate;
		tr.appendChild(td);
		td = document.createElement('td');
		td.textContent = song.length;
		tr.appendChild(td);
		table.appendChild(tr);
		let editButton = document.createElement('button');
		editButton.name = 'details';
		editButton.textContent = 'details';
		editButton.value = song.id;
		editButton.addEventListener('click', function(e){
			e.preventDefault();
			displayEditSong(song);
		});
		tr.appendChild(editButton);
		table.appendChild(tr);
  }

//   function editSong(songId){
// 	  console.log('editSong method accessed');
//     let xhr = new XMLHttpRequest();
//   xhr.open('GET','api/songs/' + songId);
//   xhr.onreadystatechange = function(){
//     if(xhr.readyState === 4 ){
//       if(xhr.status === 200){
//         console.log('Request successful');
//         let data = JSON.parse(xhr.responseText);
//         displayEditSong(data);
//       }else{
//         displayError('Film not in the filmData div');
//       }
//     }
//   };
//   xhr.send();
//   }

 function displayEditSong(song){
	let dataDiv = document.getElementById('songData');
	dataDiv.textContent = '';
	let form = document.createElement('form');
	dataDiv.appendChild(form);
	let label1 = document.createElement('label');
	label1.textContent = 'Artist: ';
	form.appendChild(label1);
	let input1 = document.createElement('input');
	input1.name = 'artist';
	input1.value = song.artist;
	input1.id = 'input1'
	form.appendChild(input1);
	let br = document.createElement('br');
	form.appendChild(br);
	let label2 = document.createElement('label');
	label2.textContent = 'Title: ';
	form.appendChild(label2);
	let input2 = document.createElement('input');
	input2.name = 'title';
	input2.value = song.title;
	input2.id = 'input2'
	form.appendChild(input2);
	br = document.createElement('br');
	form.appendChild(br);
	let label3 = document.createElement('label');
	label3.textContent = 'Album: ';
	form.appendChild(label3);
	let input3 = document.createElement('input');
	input3.name = 'album';
	input3.value = song.album;
	input3.id = 'input3'
	form.appendChild(input3);  
	br = document.createElement('br');
	form.appendChild(br);
	let label4 = document.createElement('label');
	label4.textContent = 'Release Date: ';
	form.appendChild(label4);
	let input4 = document.createElement('input');
	input4.name = 'releaseDate';
	input4.value = song.releaseDate;
	input4.id = 'input4'
	form.appendChild(input4);
	br = document.createElement('br');
	form.appendChild(br);
	let label5 = document.createElement('label');
	label5.textContent = 'Length: ';
	form.appendChild(label5);  
	let input5 = document.createElement('input');
	input5.name = 'length';
	input5.value = song.length;
	input5.id = 'input5'
	form.appendChild(input5);
	br = document.createElement('br');
	form.appendChild(br);
	updateButton = document.createElement('button');
	updateButton.name = 'update';
	updateButton.textContent = 'update';
	updateButton.addEventListener('click', function(e){
		e.preventDefault();
		// let dbSong = document.form;
		let updatedSong = {
			id: song.id,
			artist: form.artist.value,
			title: form.title.value,
			album: form.album.value,
			releaseDate: form.releaseDate.value,
			length: form.length.value
		};	
		updateSong(updatedSong);
		});
	form.appendChild(updateButton);	
	br = document.createElement('br');
	form.appendChild(br);
	deleteButton = document.createElement('button');
	deleteButton.name = 'delete';
	deleteButton.textContent = 'delete';
	deleteButton.addEventListener('click', function(e){
		e.preventDefault();
		deleteSong(song);
	});
	form.appendChild(deleteButton);	
 } 

function updateSong(song){
	console.log('updateSong method accessed');
	    let xhr = new XMLHttpRequest();
	  xhr.open('PUT','api/songs');
	  xhr.onreadystatechange = function(){
	    if(xhr.readyState === 4 ){
	      if(xhr.status < 400){
	        console.log('Request successful');
	        let data = JSON.parse(xhr.responseText);
	        displaySong(data);
	      }else{
	        console.log('Error updating song' + xhr.status);
	      }
	    }
	  };
	  xhr.setRequestHeader("Content-type", "application/json"); // Specify JSON request body
	  let songJson = JSON.stringify(song);
	xhr.send(songJson);
}

function deleteSong(song){
	console.log('updateSong method accessed');
	    let xhr = new XMLHttpRequest();
	  xhr.open('DELETE','api/songs/' + song.id);
	  xhr.onreadystatechange = function(){
	    if(xhr.readyState === 4 ){
	      if(xhr.status === 204){
	        console.log('Delete successful');
	      }else{
	        displayError('Error updating song' + xhr.status);
	      }
	    }
	  };
	  xhr.setRequestHeader("Content-type", "application/json"); // Specify JSON request body
	  let songJson = JSON.stringify(song);
	xhr.send(songJson);
}