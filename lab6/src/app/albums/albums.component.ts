import {Component, OnInit} from '@angular/core';
import {Album} from "../models";
import {ActivatedRoute} from "@angular/router";
import {AlbumsService} from "../albums.service";

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit{
  albums: Album[];
  newAlbum : Album;
  loaded: boolean;
  constructor(private albumService : AlbumsService) {
    this.albums = [];
    this.newAlbum = {} as Album;
    this.loaded = true;
  }
  ngOnInit() {
    // this.albums = ALBUMS;
    this.getAlbum();
  }

  deleteAlbum(album:any){
    this.albums.splice(this.albums.indexOf(album), 1);
  }

  getAlbum(){
    this.loaded = false;
    this.albumService.getAlbums().subscribe((albums) => {
      this.albums = albums;
      this.loaded = true;
    })
  }
  addAlbum(){
    this.loaded = false;
    this.albumService.addAlbum(this.newAlbum).subscribe((album) => {
      this.albums.unshift(album);
      this.loaded = true;
      this.newAlbum = {} as Album;
    });
  }
}
